<template>
  <div>
    <el-row>
      <el-col class="title"><i class="el-icon-notebook-2"></i> 服务器#1</el-col>
    </el-row>
    <el-row class="chart">
      <el-col :span="6">
        <dash-board-chart></dash-board-chart>
      </el-col>
      <el-col :span="6">
        <el-row>
          <el-col style="text-align: left">当前磁盘使用率%</el-col>
        </el-row>
        <water-ball></water-ball>
      </el-col>
      <el-col :span="6">
        <el-row>
          <el-col style="text-align: left">当前内存占有率%</el-col>
        </el-row>
        <water-ball></water-ball>
      </el-col>
      <el-col :span="6">
        <stacked-line-chart></stacked-line-chart>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import dashBoardChart from './ChartComponents/DashBoardChart'
import waterBall from './ChartComponents/WaterBall'
import stackedLineChart from './ChartComponents/StackedLineChart'
export default {
  name: "ServicePanel",
  components:{
    dashBoardChart,
    waterBall,
    stackedLineChart,
  }
}
</script>

<style scoped>
.title{
  text-align: left;
}
.chart{
  margin-top: 20px;
}
</style>
