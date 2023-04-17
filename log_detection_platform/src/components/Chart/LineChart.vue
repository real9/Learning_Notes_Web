<template>
  <div id="lineChart">line</div>
</template>

<script>
export default {
  name: "LineChart",
  data() {
    return {
      myChart: {},
    }
  },
  mounted() {
    this.initLineChart()
  },
  methods: {
    initLineChart() {
      this.myChart = this.$echarts.init(document.getElementById('lineChart'), null, {
        width: 1000,
        height: 400
      });
      let option;
      option = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: 'line'
          }
        ]
      };
      this.myChart.setOption(option);
    }
  }
}
</script>

<style scoped>

</style>
