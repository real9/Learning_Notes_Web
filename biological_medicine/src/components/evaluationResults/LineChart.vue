<template>
<div id="lineChart"></div>
</template>

<script>
export default {
  name: "LineChart",
  props:{
    dateCategory:{
      type: Array,
      default: () => {return []}
    },
    historyData:{
      type: Array,
      default: () => {return []}
    }
  },
  mounted() {
    this.initLineChart();
  },
  methods:{
    initLineChart(){
      let myChart = this.$echarts.init(document.getElementById('lineChart'), null ,{
        width:450,
        height:400
      });
      // let that = this;
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
          },
          label:{
            show: true,
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
