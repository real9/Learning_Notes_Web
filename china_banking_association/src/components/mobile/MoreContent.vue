<template>
<div>
  <el-row>
    <el-col class="head">地址导航</el-col>
    <el-col>
      <router-link to="" >首页</router-link>
    </el-col>
    <hr/>
    <el-col>人才录入</el-col>
    <router-link to="/talentEntry/talentInfo">
      <el-button @click="updateMobile" type="text">人才信息</el-button>
      </router-link>
    <br/>
    <router-link to="/talentEntry/progressQuery">
      <el-button @click="updateMobile" type="text">进度查询</el-button>
    </router-link>
    <hr/>
    <el-col>公共信息</el-col>
    <hr/>
    <el-col>综合服务</el-col>
    <hr/>
    <el-col>
      <el-button @click="updateMobile">登录</el-button>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: "MoreContent",
  methods: {
    updateMobile(){
      //路由跳转有延迟
      this.$store.commit('updateLoading');
      setTimeout(() => {
        this.$store.commit('updateMobileFlag');
        this.$store.commit('updateLoading');
      }, 500)
    }
  }
}
</script>

<style scoped>
.head{
  font-weight: 600;
  font-size: 20px;
}
</style>
