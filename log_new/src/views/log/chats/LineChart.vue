<template>
  <div id="lineChart" class="w-100"></div>
</template>

<script>
import * as echarts from 'echarts';
export default {
  name: "LineChart",
  data() {
    return {
      myChart: {},
      data: [],
    }
  },
  mounted() {
    this.initLineChart();
  },
  methods: {
    initLineChart() {
      this.myChart = echarts.init(document.getElementById('lineChart'), null, {
        // width: 1200,
        height: 300
      });
      let option;
      // option = {
      //   xAxis: {
      //     type: 'time',
      //     // data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      //   },
      //   yAxis: {
      //     type: 'value'
      //   },
      //   series: [
      //     {
      //       name: 'Fake Data',
      //       type: 'line',
      //       showSymbol: false,
      //       data: this.data
      //     }
      //   ]
      // };
      // let that = this;
      // setInterval(function () {
      //   for (let i = 0; i < 5; i++) {
      //     that.data.shift();
      //     that.data.push(that.randomData());
      //   }
      //   that.myChart.setOption({
      //     series: [
      //       {
      //         data: that.data
      //       }
      //     ]
      //   });
      // }, 1000);
      function randomData() {
        now = new Date(+now + oneSecond);
        value = (Math.random() + 0.45).toFixed(0);
        return {
          name: now.toString(),
          value: [
            [now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/')
            + ' ' + [now.getHours(), now.getMinutes(), now.getSeconds()].join(':'),
            value
          ],
        };
      }
      let data = [];
      let now = new Date(2005, 9, 3, 0, 0, 0);
      let oneSecond = 1000;
      let value = Math.random();
      for (let i = 0; i < 1000; i++) {
        data.push(randomData());
      }
      option = {
        // title: {
        //   text: 'VLog日志异常检测时序图'
        // },
        tooltip: {
          trigger: 'axis',
          // formatter: function (params) {
          //   params = params[0];
          //   var date = new Date(params.name);
          //   return (
          //       date.getDate() +
          //       '/' +
          //       (date.getMonth() + 1) +
          //       '/' +
          //       date.getFullYear() +
          //       ' : ' +
          //       params.value[1]
          //   );
          // },
          axisPointer: {
            animation: false
          }
        },
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          }
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          },
          max: 1,
        },
        visualMap: {
          show: false,
          // dimension: 0,
          pieces: [
            {
              lt: 0.2,
              gte: 0,
              color: 'red'
            },
            {
              gt: 0.2,
              lte: 1,
              color: 'green'
            },
          ]
        },
        series: [
          {
            name: '预测结果',
            type: 'line',
            showSymbol: false,
            data: data
          }
        ]
      };
      let that = this;
      setInterval(function () {
        for (var i = 0; i < 5; i++) {
          data.shift();
          data.push(randomData());
        }
        that.myChart.setOption({
          series: [
            {
              data: data
            }
          ]
        });
      }, 1000);
      this.myChart.setOption(option);
    }
  }
}
</script>

<style scoped>

</style>
