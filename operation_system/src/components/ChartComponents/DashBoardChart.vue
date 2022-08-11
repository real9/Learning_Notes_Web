<template>
<div>
  <el-row>
    <div :id="id"></div>
  </el-row>
</div>
</template>

<script>
const uid = () => new Date().getTime();
export default {
  name: "DashBoardChart",
  props: {
    cpuOccupancy:{
      type: Number,
      default: 0,
    },
    balanceNum:{
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      id: null,
    }
  },
  created() {
    this.id = uid() + '';
  },
  mounted() {
    this.initDashBoardChart();
  },
  methods: {
    initDashBoardChart(){
      let myChart = this.$echarts.init(document.getElementById(this.id), null, {
        width: 200,
        height: 250,
      });
      let option;
      let that = this;
      option = {
        series: [
          {
            type: 'gauge',
            startAngle: 210,
            endAngle: -30,
            min: 0,
            max: 100,
            splitNumber: 5,
            pointer: {
              show:false,
            },
            progress: {
              show: true,
              width: 25,
              itemStyle: {
                color: 'rgb(102, 177, 255)',
                borderColor: '#2d7ed5',
              }
            },
            axisLine: {
              lineStyle: {
                width: 25,
                color:[[1, 'rgb(198, 226, 255)']],
                shadowColor: '#2d7ed5',
                shadowBlur: 3
              }
            },
            axisTick: {
              show: false
            },
            splitLine: {
              length: 8,
              distance: 0,
              lineStyle: {
                width: 1,
                color: '#2d7ed5'
              }
            },
            axisLabel: {
              distance: 25,
              color: '#999',
              fontSize: 8,
              formatter: '{value}%',
            },
            anchor: {
              show: false,
            },
            title: {
              show: false
            },
            detail: {
              valueAnimation: true,
              offsetCenter: [0, '70%'],
              formatter: function (value) {
                return '{value|' + value + '%}{unit|\n比目标值偏高'+that.balanceNum+'%}';
              },
              rich: {
                value:{
                  fontSize: 25,
                  fontWeight: 'bold',
                  color: 'black',
                },
                unit: {
                  fontSize: 10,
                  color: 'red',
                  padding:[0, 0, 20, 0],
                }
              }
            },
            data: [
              {
                value: that.cpuOccupancy
              }
            ]
          }
        ]
      };
      myChart.setOption(option);
    }
  },
}
</script>

<style scoped>

</style>
