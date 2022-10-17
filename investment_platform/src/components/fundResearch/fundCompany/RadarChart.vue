<template>
<div :id="id"></div>
</template>

<script>
const uid = +new Date();
export default {
  name: "RadarChart",
  data() {
    return {
      id: '',
    }
  },
  created() {
    this.id = 'radarChart' + uid;
  },
  mounted(){
    this.initRadarChart();
  },
  methods:{
    initRadarChart(){
      let myChart = this.$echarts.init(document.getElementById(this.id), null, {
        width: 340,
        height: 400
      });
      let options;
      options = {
        legend: {
          data: ['近三月', '近六月', '近一年', '近三年']
        },
        radar: {
          // shape: 'circle',
          radius: '50%',
          indicator: [
            { name: '收益能力', max: 100 },
            { name: '选股能力', max: 100 },
            { name: '业绩稳定性', max: 100 },
            { name: '择时能力', max: 100 },
            { name: '风控能力', max: 100 },
          ]
        },
        axisName: {
          color: '#000',
          fontSize: 14,
          formatter: function (value){
            return value + '\n' + 'max: 100';
          }
        },
        series: [
          {
            name: 'Budget vs spending',
            type: 'radar',
            data: [
              {
                value: [80,50,60,30,50],
                name: '近三月'
              },
              {
                value: [40,50,60,40,55],
                name: '近六月'
              },
              {
                value: [77,88,66,99,55],
                name: '近一年'
              },
              {
                value: [55,56,74,58,90],
                name: '近三年'
              },
            ]
          }
        ]
      };
      myChart.setOption(options)
    }
  }
}
</script>

<style scoped>

</style>
