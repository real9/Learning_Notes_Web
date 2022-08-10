<template>
  <div id="one">
    <el-row>
      <el-col class="title"><i class="el-icon-notebook-2"></i> 服务器#1</el-col>
    </el-row>
    <el-row class="chart">
      <el-col :span="6">
        <el-row>
          <el-col style="text-align: left">当前CPU占有率</el-col>
        </el-row>
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
        <el-row>
          <el-col style="text-align: left">24h网络使用情况</el-col>
        </el-row>
        <line-chart></line-chart>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import dashBoardChart from './ChartComponents/DashBoardChart'
import waterBall from './ChartComponents/WaterBall'
import lineChart from './ChartComponents/StackedLineChart'
export default {
  name: "ServicePanel",
  components:{
    dashBoardChart,
    waterBall,
    lineChart,
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
