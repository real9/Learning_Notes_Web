<template>
  <div id="barChart"></div>
</template>

<script>
export default {
  name: "BarChart",
  props: {},
  data() {
    return {
      myChart: {},
    }
  },
  mounted() {
    setTimeout(() => {
      this.initBarChart();
    }, 1000);
    let that = this;
    window.onresize = () => {
      that.myChart.resize();
    };
  },
  methods: {
    initBarChart() {
      // this.$echarts.dispose(document.getElementById('barChart'));
      this.myChart = this.$echarts.init(document.getElementById('barChart'), null, {
        width: 400,
        height: 800
      });
      let option;
      option = {
        title: {
          text: '日志中模板字段出现频率',
          textStyle: {
            fontSize: 16,
          },
          padding: 18,
          // textAlign: 'center',
          right: 0
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        legend: {
          bottom: 0,
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          boundaryGap: [0, 0.01]
        },
        yAxis: {
          type: 'category',
          data: ['Brazil', 'Indonesia', 'USA', 'India', 'China', 'World']
        },
        series: [
          {
            name: '2012',
            type: 'bar',
            data: [19325, 23438, 31000, 121594, 134141, 681807]
          }
        ]
      };
      this.myChart.setOption(option);
    }
  },
}
</script>

<style scoped>

</style>
