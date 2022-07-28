<template>
  <el-row id="topNav">
    <el-col :span="8" class="topNav_title">
      <p>房地产行业信贷结构优化评价模型</p>
    </el-col>
    <el-col :span="12" class="topNav_tabs">
        <div v-for="tab in tabs" :key="tab.id" @click="gpToPage(tab.id)">{{tab.name}}</div>
    </el-col>
    <el-col :span="4" class="topNav_icon">
      <div class="el-icon-search"></div>
      <div class="el-icon-setting"></div>
      <div class="el-icon-right"></div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "TopNav",
  data() {
    return {
      activeTab: '',
      tabs: [
        {
          name: '项目列表',
          id: 'ProjectList'
        },
        {
          name: '评价结果',
          id: 'EvaluationResult'
        },
        {
          name: '统计分析',
          id: 'StatisticsAnalysis'
        },
        {
          name: '模型管理',
          id: 'ModelManagement'
        },
        {
          name: '附录列表',
          id: 'AppendixList'
        },
      ]
    }
  },
  methods: {
    gpToPage(pathName){
      this.$router.push('/' + pathName)
    }
  },
}
</script>

<style scoped>
* {
  font-family: PingFangSC-Medium, PingFang SC;
}
#topNav {
  font-size: 16px;
  height: 70px;
  border-bottom: 2px solid #eee;
}
.topNav_title{
  font-size: 20px;
}
.topNav_title p {
  text-align: left;
  padding-left: 20px;
}
.topNav_tabs {
  line-height: 70px;
  display: flex;
  height: 70px;
}
.topNav_tabs > div {
  text-align: center;
  cursor: pointer;
  width: 90px;
}
.topNav_icon{
  font-size: 20px;
  line-height: 70px;
  text-align: right;
}
.topNav_icon > div {
  margin-right: 20px;
  cursor: pointer;
}

</style>
