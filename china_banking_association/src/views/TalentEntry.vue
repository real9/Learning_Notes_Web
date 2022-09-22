<template>
<div>
  <el-row>
    <el-col>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>人才录入</el-breadcrumb-item>
        <el-breadcrumb-item>{{currentPage}}</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
    <el-col :md="4" id="left">
      <div class="left">
        <div class="leftMenu">
          <div :class="{'menuItem': true, 'active': activeClass}" @click="goToPage('人才信息')">人才信息</div>
          <div :class="{'menuItem': true, 'active': _activeClass}" @click="goToPage('进度查询')">进度查询</div>
        </div>
      </div>
    </el-col>
    <el-col :md="20" :sm="24" :xs="24">
    <router-view></router-view>
  </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: "TalentEntry",
  data(){
    return{
      activeClass: true,
      currentPage:'人才信息',
    }
  },
  computed:{
    _activeClass: function (){
      return !this.activeClass;
    }
  },
  methods:{
    goToPage(pageName){
      this.currentPage = pageName;
      if (pageName === '人才信息'){
        this.activeClass = true;
        this.$router.push('/talentEntry/talentInfo');
      } else {
        this.activeClass = false;
        this.$router.push('/talentEntry/progressQuery');
      }
   }
  }
}
</script>

<style scoped>
/*小屏幕*/
@media all and (max-width: 992px){
  .el-breadcrumb{
    display: none;
  }
  #left{
    display: none;
  }
}
.el-breadcrumb {
  margin-top: 10px;
  margin-bottom: 10px;
}
.el-breadcrumb__inner a, .el-breadcrumb__inner.is-link{
  font-weight: unset;
}
/deep/ .el-breadcrumb .el-breadcrumb__item:last-child .el-breadcrumb__inner{
  font-weight: 700;
  color: black;
}
.left{
  background-color: white;
  padding-top: 2em;
  padding-left: 1em;
  height: 500px;
}
.left .leftMenu{
  border-left: solid 1px #e6e6e6;
  height: 5em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}
.left .leftMenu .menuItem{
  color: #303133;
  line-height: 2em;
  font-size: 14px;
  padding-left: 1em;
  margin-bottom: 1em;
  text-align: left;
  border: none;
  border-left: transparent 2px solid;
}
.left .leftMenu .menuItem:last-child{
  margin-bottom: 0;
}
.left .leftMenu .menuItem:hover{
  border-left: #D3002C 2px solid;
  color: #D3002C;
  transition: border-left .3s,color .3s;
  cursor: pointer;
}
.left .leftMenu .active{
  border-left: #D3002C 2px solid;
  color: #D3002C;
  transition: border-left .3s,color .3s;
  cursor: pointer;
}
</style>
