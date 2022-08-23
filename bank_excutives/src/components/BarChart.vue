<template>
<div id="barChart" :style="{width: '50vw', height: chartHeight}">

</div>
</template>

<script>
export default {
  name: "BarChart",
  props:{
    chartData: {
      type: Array,
      default: null,
    },
    chartHeight: {
      type: String,
      default: '800px'
    }
  },
  data() {
    return {
      myChart: {},
    }
  },
  mounted() {
    // this.$nextTick(()=> {
    //   this.initBarChart();
    // })
    setTimeout(() => {
      this.initBarChart();
    }, 2000);
    let that = this;
    window.onresize = () => {
      that.myChart.resize();
    };
  },
  watch:{
    chartData: {
      handler: function () {
        setTimeout(() => {
          this.initBarChart();
          this.myChart.resize();
        }, 1000);
      }
    }
  },
  methods: {
    initBarChart() {
      this.$echarts.dispose(document.getElementById('barChart'));
      this.myChart = this.$echarts.init(document.getElementById('barChart'), null, );
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
          data: this.chartData[0]
        },
        series: {
          type: 'bar',
          label: {
            show: true,
            color: '#fff',
          },
          data: this.chartData[1]
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        color: ['rgb(244,137,115)'],
      };
      this.myChart.setOption(option);
    }
  }
}
</script>

<style scoped>

</style>
