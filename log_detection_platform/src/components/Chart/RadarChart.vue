<template>
  <div id="radarChart"></div>
</template>

<script>
export default {
  name: "RadarChart",
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
    this.initRadarChart();
  },
  methods: {
    initRadarChart() {
      this.myChart = this.$echarts.init(document.getElementById('radarChart'), null, {
        width: 600,
        height: 400
      });
      let option;
      option = {
        title: {
          text: '三种维度比较',
          right: '40%'
        },
        legend: {
          data: ['Allocated Budget', 'Actual Spending'],
          right: 0,
          orient: 'vertical'
        },
        tooltip: {
          trigger: 'item'
        },
        radar: {
          // shape: 'circle',
          indicator: [
            { name: 'F1分数', max: 100 },
            { name: '准确率', max: 100 },
            { name: '召回率', max: 100 },
          ]
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
              {
                value: [90, 80, 70],
                name: 'Allocated Budget'
              },
              {
                value: [87, 87, 89],
                name: 'Actual Spending'
              }
            ]
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
