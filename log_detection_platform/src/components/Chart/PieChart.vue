<template>
<div id="pieChart"></div>
</template>

<script>
export default {
  name: "PieChart",
  props: {},
  data() {
    return {
      myChart: {},
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.initPieChart();
    // }, 1000);
    this.initPieChart();
  },
  methods: {
    initPieChart() {
      // this.$echarts.dispose(document.getElementById('pieChart'));
      this.myChart = this.$echarts.init(document.getElementById('pieChart'), null, {
        width: 400,
        height: 300
      });
      let option;
      option = {
        title: {
          text: '数据划分',
          // subtext: 'Fake Data',
          left: 'center'
        },
        tooltip: {
          trigger: 'item'
        },
        legend: {
          orient: 'vertical',
          left: 'left'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              // { value: 580, name: 'Email' },
              // { value: 484, name: 'Union Ads' },
              // { value: 300, name: 'Video Ads' }
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
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
