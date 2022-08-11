<template>
  <div>
    <div :id="index" class="servicePanel" v-for="(item, index) in servers" :key="index">
      <el-row>
        <el-col class="title"><i class="el-icon-notebook-2"></i> 服务器#{{ index + 1 }}</el-col>
      </el-row>
      <el-row class="chart">
        <el-col :span="6">
          <el-row>
            <el-col style="text-align: left" >当前CPU占有率</el-col>
          </el-row>
          <dash-board-chart :cpuOccupancy="item.cpuOccupancy" :balance-num="item.balanceNum"></dash-board-chart>
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
  </div>

</template>

<script>
import dashBoardChart from './ChartComponents/DashBoardChart'
import waterBall from './ChartComponents/WaterBall'
import lineChart from './ChartComponents/LineChart'
export default {
  name: "ServicePanel",
  components:{
    dashBoardChart,
    waterBall,
    lineChart,
  },
  data() {
    return {
      servers: [
        {
          id: '1',
          cpuOccupancy: 55,
          balanceNum: 11,
          diskUsage: 0,
          actualDisk: 0,
          memoryOccupancy: 0,
          actualMemory: 0,
          networkFlowData: [
            [],
            []],
        },
        {
          id: '2',
          cpuOccupancy: 66,
          balanceNum: 22,
          diskUsage: 0,
          actualDisk: 0,
          memoryOccupancy: 0,
          actualMemory: 0,
          networkFlowData: [
            [],
            []],
        },
        {
          id: '3',
          cpuOccupancy: 77,
          balanceNum: 33,
          diskUsage: 0,
          actualDisk: 0,
          memoryOccupancy: 0,
          actualMemory: 0,
          networkFlowData: [
            [],
            []],
        },
        {
          id: '4',
          cpuOccupancy: 88,
          balanceNum: 44,
          diskUsage: 0,
          actualDisk: 0,
          memoryOccupancy: 0,
          actualMemory: 0,
          networkFlowData: [
            [],
            []],
        },
        {
          id: '5',
          cpuOccupancy: 44,
          balanceNum: 21,
          diskUsage: 0,
          actualDisk: 0,
          memoryOccupancy: 0,
          actualMemory: 0,
          networkFlowData: [
            [],
            []],
        },
      ]
    }
  }
}
</script>

<style scoped>
.servicePanel{
  background-color: white;
  margin-left: 10px;
  margin-top: 10px;
  padding: 20px;
}
.title{
  text-align: left;
}
.chart{
  margin-top: 20px;
}
</style>
