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
        height: 180
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
        grid: {
          left: '0',    // 左边距
          right: '0',   // 右边距
          bottom: '15%',  // 底边距
          top: '15%',     // 顶边距
          containLabel: true  // 包含坐标轴标签在内
        },
        xAxis: {
          type: 'time',
          splitLine: {
            show: false
          },
          name: '时间',
        },
        yAxis: {
          type: 'value',
          boundaryGap: [0, '100%'],
          splitLine: {
            show: false
          },
          max: 1,
          splitNumber: 2,
        },
        // visualMap: {
        //   show: false,
        //   // dimension: 0,
        //   pieces: [
        //     {
        //       lt: 0.2,
        //       gte: 0,
        //       color: 'red'
        //     },
        //     {
        //       gt: 0.2,
        //       lte: 1,
        //       color: 'green'
        //     },
        //   ]
        // },
        series: [
          {
            name: '预测结果',
            type: 'line',
            showSymbol: false,
            data: data,
            itemStyle: {
              color: {
                type: 'linear',
                x: 0,          // 渐变起始点 x 坐标
                y: 0,          // 渐变起始点 y 坐标
                x2: 0,         // 渐变结束点 x 坐标
                y2: 1,         // 渐变结束点 y 坐标
                colorStops: [{ // 渐变颜色位置
                  offset: 0,   // 渐变起始位置（百分比）
                  color: '#0d6efd' // 起始颜色
                }, {
                  offset: 1,   // 渐变结束位置（百分比）
                  color: '#dc3545' // 结束颜色
                }]
              }
            },
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
