<template>
  <el-row class="fund_manager">
    <router-link to="/fundResearch/fundCompany">点击基金经理名字跳转</router-link>
  </el-row>
</template>

<script>
export default {
  name: "FundManager",
  created() {
    // console.log(this.$route);
  }
}
</script>

<style scoped>
.fund_manager{
  margin-top: 100px;
}
</style>
