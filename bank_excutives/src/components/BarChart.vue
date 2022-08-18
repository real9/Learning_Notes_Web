<template>
<div id="barChart">

</div>
</template>

<script>
export default {
  name: "BarChart",
  mounted() {
    this.initBarChart();
  },
  methods: {
    initBarChart() {
      let myChart = this.$echarts.init(document.getElementById('barChart'), null, {
        width: 600,
        height: 500
      });
      let option;
      option = {
        title: {
          text: 'menu1|menu2',
          textStyle: {
            fontSize: 16,
          },
          padding: 18,
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'none'
          }
        },
        xAxis: {
          type: 'value',
          position: 'top',
          name: '人数（人）',
          nameTextStyle: {
            align: 'left',
            padding: [ 0, 0, 0, 200],
          },
          nameLocation: 'center',
          nameGap: 30,
          boundaryGap: [ 0, '10%'],
        },
        yAxis: {
          type: 'category',
          axisTick: {
            show: false,
          },
          data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
        },
        series: {
          type: 'bar',
          label: {
            show: true,
            color: '#fff',
          },
          data: [28, 20, 20, 19, 13, 8]
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        color: ['rgb(244,137,115)'],
      };
      myChart.setOption(option);
    }
  }
}
</script>

<style scoped>

</style>
