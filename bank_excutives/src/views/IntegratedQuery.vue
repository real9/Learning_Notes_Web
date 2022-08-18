<template>
  <div class="query">
    <el-row>
      <el-col>
        <el-breadcrumb separator="/">
          <el-breadcrumb-item :to="{ path: '/' }">综合服务</el-breadcrumb-item>
          <el-breadcrumb-item>综合查询</el-breadcrumb-item>
        </el-breadcrumb>
      </el-col>
      <el-col>
        <div class="main">
          <el-row class="headGroup">
            <el-col :span="2" class="title">综合查询</el-col>
            <el-col :span="12" class="headButtons">
              <div class="headButtonItem active" @click="getActiveStyle($event, '/query/candidates')">合格人选</div>
              <div class="headButtonItem" @click="getActiveStyle($event, '/query/directors')">独董及外部监事</div>
              <div class="headButtonItem" @click="getActiveStyle($event, '/query/talentDemand')">人才需求</div>
            </el-col>
          </el-row>
          <router-view></router-view>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'IntegratedQuery',
  components: {

  },
  created() {
    //每次刷新直接重定向到第一个界面，就不需要根据路由来高亮对应标签啦
    this.$router.push('/query/candidates');
  },
  methods: {
    getActiveStyle(e, path){
      e.target.className = 'active';
      this.$router.push(path);
      //根据排他思想，运用姐妹节点
      //需要链表的思想
      let suf = e.target.nextElementSibling;
      while (suf){
        suf.className = 'headButtonItem';
        suf = suf.nextElementSibling;
      }
      let pre = e.target.previousElementSibling;
      while (pre){
        pre.className = 'headButtonItem';
        pre = pre.previousElementSibling;
      }
    }
  }
}
</script>

<style>
a{
  text-decoration: none;
  color: inherit;
}
.el-breadcrumb {
  margin-top: 10px;
  margin-left: 30px;
}
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
  font-weight: unset;
}
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link:hover{
  color: rgb(211, 0, 44);
}
.el-breadcrumb__item:last-child .el-breadcrumb__inner,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a,
.el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
  font-weight: 700;
  color: black;
}
.main{
  background-color: white;
  margin: 10px 30px;
  padding: 30px 20px;
}
.main .headGroup{
  display: flex;
  align-items: baseline;
}
.main .headGroup .title{
  font-size: 18px;
  font-weight: 700
}
.main .headGroup .headButtons{
  display: flex;
  align-items: baseline;
  cursor: pointer;
  margin-left: 2em;
}
.main .headGroup .headButtons .headButtonItem{
  height: 2em;
  width: 8em;
  margin-right: 10px;
  line-height: 2em;
  border: 1px solid transparent;
}
.main .headGroup .headButtons .headButtonItem:hover{
  background-color: #D3002C;
  color: white;
  border-radius: 3px;
  transition: background-color .2s cubic-bezier(.645,.045,.355,1), color .2s cubic-bezier(.645,.045,.355,1);
}
.active{
  height: 2em;
  width: 8em;
  margin-right: 10px;
  line-height: 2em;
  background-color: #D3002C;
  color: white;
  border: 1px solid #D3002C;
  border-radius: 3px;
  cursor: pointer;
}
</style>
