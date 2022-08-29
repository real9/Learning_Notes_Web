<template>
<div>
  <el-row>
    <el-col>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>人才信息</el-breadcrumb-item>
        <el-breadcrumb-item>综合查询</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: "TalentEntry"
}
</script>

<style scoped>
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
/*.el-breadcrumb__item:last-child .el-breadcrumb__inner,*/
/*.el-breadcrumb__item:last-child .el-breadcrumb__inner a,*/
/*.el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,*/
/*.el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {*/
/*  font-weight: 700;*/
/*  color: black;*/
/*}*/
</style>
