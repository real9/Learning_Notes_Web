<template>
<div id="pieChart"></div>
</template>

<script>
export default {
  name: "PieChart",
  // props: {
  //   trainDatasetNum: {
  //     type: Number,
  //     default: 40,
  //   },
  //   testDatasetNum: {
  //     type: Number,
  //     default: 60
  //   },
  // },
  data() {
    return {
      myChart: {},
      trainDatasetNum: 40,
      testDatasetNum: 60,
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.initPieChart();
    // }, 1000);
    this.initPieChart();
  },
  watch: {
    trainDatasetNum() {
      let option = this.myChart.getOption();
      option.series[0].data[0].value = this.trainDatasetNum;
      option.series[0].data[1].value = this.testDatasetNum;
      this.myChart.setOption(option);
    }
  },
  methods: {
    initPieChart() {
      // this.$echarts.dispose(document.getElementById('pieChart'));
      this.myChart = this.$echarts.init(document.getElementById('pieChart'), null, {
        width: 400,
        height: 300
      });
      let option;
      let that = this;
      option = {
        title: {
          text: '数据集划分',
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
            name: '数据集中日志数量',
            type: 'pie',
            radius: '50%',
            data: [
              { value: that.trainDatasetNum, name: '训练集' },
              { value: that.testDatasetNum, name: '测试集' },
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
