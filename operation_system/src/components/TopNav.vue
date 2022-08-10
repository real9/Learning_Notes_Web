<template>
  <el-row id="topNav">
    <el-col :span="4">
      <p>运维管理·系统运行监控</p>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "TopNav"
}
</script>

<style scoped>
#topNav{
  font-size: 16px;
  height: 50px;
  position: sticky;
  top: 0;
  z-index: 99;
  color: black;
  background-color: white;
  font-weight: bold;
  padding-left: 20px;
}
</style>
