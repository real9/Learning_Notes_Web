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
  name: "LineChart",
  props: {},
  data() {
    return {
      id: null,
    }
  },
  created() {
    this.id = uid() + '';
  },
  mounted() {
    this.initStackedLineChart();
  },
  methods: {
    initStackedLineChart() {
      let myChart = this.$echarts.init(document.getElementById(this.id), null, {
        width: 250,
        height: 250,
      });
      let option;
      option = {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['上行流量', '下行流量']
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'category',
          boundaryGap: false,
          data: ['14:00', '16:00', '18:00', '20:00', '22:00', '0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', ]
        },
        yAxis: {
          type: 'value',
          name: '流量（MB）',
          // nameRotate: 90,
          // nameLocation: 'middle',
          // nameGap: 30,
        },
        series: [
          {
            name: '上行流量',
            type: 'line',
            data: [150, 232, 201, 154, 190, 330, 410, 200, 400, 200, 200, 200],
          },
          {
            name: '下行流量',
            type: 'line',
            data: [320, 332, 301, 334, 390, 330, 320, 200, 400, 300, 700, 100]
          }
        ],
        color:['red', 'purple'],
      };
      myChart.setOption(option);
    }
  }
}
</script>

<style scoped>

</style>
