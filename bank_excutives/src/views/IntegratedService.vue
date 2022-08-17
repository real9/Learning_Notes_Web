<template>
  <div class="service">
    <el-row>
      <el-col>
        <div class="head">
          <p>xx综合服务系统</p>
        </div>
      </el-col>
      <el-col>
        <div class="tag" @click="goToIntegratedQuery">
          <p>综合查询</p>
        </div>
        <div class="tag" @click="goToOthers">
          <p>其他功能</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'IntegratedService',
  methods: {
    goToIntegratedQuery() {
      this.$router.replace('/query/candidates');
    },
    goToOthers(){
      alert('未开放区域！');
    }
  }
}
</script>

<style>
.service{
  /*搞个窗口自适应*/
  background-color: white;
  height: 300px;
  width: 50vw;
  margin-top: 25vh;
  margin-left: 25vw;
}
.head>p {
  font-size: 20px;
  font-weight: bold;
}
.tag{
  cursor: pointer;
  border: 2px solid rgb(211, 0, 44);
  border-radius: 5px;
  width: 50%;
  height: 3em;
  margin: auto;
  margin-bottom: 5px;
  /*background-color: rgb(211, 0, 44);*/
  padding: 0;
}
.tag:hover{
  color: white;
  background-color: rgb(211, 0, 44);
}
</style>
