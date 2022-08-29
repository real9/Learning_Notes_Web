<template>
  <div >
    <div :id="index" class="servicePanel" v-for="(item, index) in servers" :key="index" :ref="'s'+index">
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
            <el-col style="text-align: left" >当前磁盘使用率%</el-col>
          </el-row>
          <water-ball :usage-rate="item.diskUsage" :usage-num="item.actualDisk"></water-ball>
        </el-col>
        <el-col :span="6">
          <el-row>
            <el-col style="text-align: left">当前内存占有率%</el-col>
          </el-row>
          <water-ball :usage-rate="item.memoryOccupancy" :usage-num="item.actualMemory"></water-ball>
        </el-col>
        <el-col :span="6">
          <el-row>
            <el-col style="text-align: left">24h网络使用情况</el-col>
          </el-row>
          <line-chart :up-data="item.networkFlowData[0]" :down-data="item.networkFlowData[1]"></line-chart>
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
          diskUsage: 12,
          actualDisk: 1200,
          memoryOccupancy: 61,
          actualMemory: 6100,
          networkFlowData: [
            [150, 232, 201, 154, 190, 330, 410, 200, 400, 200, 200, 200],
            [320, 332, 301, 334, 390, 330, 320, 200, 400, 300, 700, 100]],
        },
        {
          id: '2',
          cpuOccupancy: 66,
          balanceNum: 22,
          diskUsage: 34,
          actualDisk: 3400,
          memoryOccupancy: 32,
          actualMemory: 3200,
          networkFlowData: [
            [150, 230, 224, 218, 135, 147, 260, 150, 230, 224, 218, 135],
            [260, 150, 230, 224, 218, 135, 260, 150, 230, 224, 218, 135]],
        },
        {
          id: '3',
          cpuOccupancy: 77,
          balanceNum: 33,
          diskUsage: 56,
          actualDisk: 5600,
          memoryOccupancy: 43,
          actualMemory: 4300,
          networkFlowData: [
            [120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90],
            [220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290]],
        },
        {
          id: '4',
          cpuOccupancy: 88,
          balanceNum: 44,
          diskUsage: 78,
          actualDisk: 7800,
          memoryOccupancy: 54,
          actualMemory: 5400,
          networkFlowData: [
            [820, 932, 901, 934, 1290, 1330, 1320, 820, 932, 901, 934, 1290],
            [1330, 1320, 820, 932, 901, 934, 1290, 820, 932,  1290, 1330, 999]],
        },
        {
          id: '5',
          cpuOccupancy: 44,
          balanceNum: 21,
          diskUsage: 99,
          actualDisk: 9900,
          memoryOccupancy: 65,
          actualMemory: 6500,
          networkFlowData: [
            [150, 230, 224, 218, 135, 147, 230, 224, 218, 135, 147, 260],
            [224, 218, 135, 147, 224, 218, 135, 147, 150, 230, 218, 135]],
        },
      ],
    }
  },
  mounted() {
    this.$nextTick(() =>{
      this.$store.commit('updatePanelHeight', this.$refs.s0[0].clientHeight)
    })
  },
  methods: {
  },
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
