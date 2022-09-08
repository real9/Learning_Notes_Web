<template>
<div id="lineChart"></div>
</template>

<script>
export default {
  name: "LineChart",
  props:{},
  mounted() {
    this.initLineChart();
  },
  methods:{
    initLineChart(){
      let myChart = this.$echarts.init(document.getElementById('lineChart'), null ,{
        width:450,
        height:400
      });
      let option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: {
          type: 'line',
          data: [150, 230, 224, 218, 135, 147, 260],
          itemStyle:{
            color:'#409EFF',
          }
        }
      };
      myChart.setOption(option)
    }
  },
}
</script>

<style scoped>

</style>
