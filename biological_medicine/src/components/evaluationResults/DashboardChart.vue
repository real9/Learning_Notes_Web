<template>
<div id="dashBoardChart">
</div>
</template>

<script>
export default {
  name: "DashboardChart",
  props:{

  },
  mounted() {
    this.initDashboardChart();
  },
  methods:{
    initDashboardChart(){
      let myChart = this.$echarts.init(document.getElementById('dashBoardChart'), null, {
        width: 200,
        height:300
      });
      // let that = this;
      let option;
      option = {
        series: [
          {
            type: 'gauge',
            startAngle: 210,
            endAngle: -30,
            min: 0,
            max: 100,
            splitNumber: 12,
            center: ['50%', '40%'],  // 圆心相对于容器
            radius: '80%' ,  // 半径
            //仪表盘的数据条
            itemStyle: {
              color: 'auto',
              shadowColor: '#ecf5ff',
              shadowBlur: 10,
              shadowOffsetX: 2,
              shadowOffsetY: 2
            },
            progress: {
              show: true,
              roundCap: true,
              //进度条宽度
              width: 10
            },
            pointer: {
              show:false,
            },
            //仪表盘底色
            axisLine: {
              roundCap: true,
              lineStyle: {
                width: 10,
                color:[[1, '#ecf5ff']],
              }
            },
            axisTick: {
              show: true,
              splitNumber:2,
              length: 2,
              lineStyle:{
                width:5,
                color: '#ecf5ff',
              },
            },
            areaStyle:{
              color:'#ecf5ff',
            },
            splitLine: {
              show:false,
            },
            axisLabel: {
              show:false,
            },
            title: {
              show: false
            },
            detail: {
              backgroundColor: 'transparent',
              borderColor: 'transparent',
              borderWidth: 2,
              width: '60%',
              lineHeight: 40,
              height: 40,
              borderRadius: 8,
              offsetCenter: [0, '35%'],
              valueAnimation: true,
              formatter: function (value) {
                return '{value|' + value + '}{unit|\n评价得分}';
                // return value;
              },
              // formatter: '{value}',
              rich: {
                value: {
                  fontSize: 50,
                  fontWeight: 'bold',
                  color: '#409EFF',
                  padding: [0, 0, 60, 0]
                },
                unit: {
                  fontSize: 15,
                  color: '#000',
                  padding: [0, 0, 60, 0]
                }
              }
            },
            data: [
              {
                value: 80
              }
            ],
            color:{
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 1,
              colorStops: [{
                offset: 0, color: '#29CFFE' // 0% 处的颜色
              }, {
                offset: 1, color: '#409EFF' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          }
        ],
      };
      myChart.setOption(option);
    }
  }
}
</script>

<style scoped>

</style>
