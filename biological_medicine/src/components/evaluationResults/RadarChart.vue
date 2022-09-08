<template>
<div id="radarChart"></div>
</template>

<script>
export default {
  name: "RadarChart",
  props:{},
  data(){
    return{
      dimensions: ['管理', '市场', '融资', '研发', '其他加分项', '其他扣分项'],
      score: [11, 20, 28, 17, 25, 30],
    }
  },
  mounted() {
    this.initRadarChart();
  },
  methods:{
    initRadarChart(){
      let myChart = this.$echarts.init(document.getElementById('radarChart'), null, {
        width:450,
        height:400
      });
      let that = this;
      let option = {
        radar: {
          // shape: 'circle',
          indicator: [
            {name: '管理', max: 13},
            {name: '市场', max: 20},
            {name: '融资', max: 44},
            {name: '研发', max: 23},
            {name: '其他加分项', max: 50},
            {name: '其他扣分项', max: 50}
          ],
          axisName: {
            color: '#000',
            fontSize: 14,
            formatter: function (value,indicator){
              let index = that.dimensions.indexOf(indicator.name)
              return value + '\n' + that.score[index] + '/' + indicator.max;
            }
          },
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          splitArea: {
            areaStyle: {
              color: ['rgb(121,212,254)', 'rgb(142,218,254)', 'rgb(164,225,255)', 'rgb(188,233,255)','rgb(214,241,254)'],
            }
          },
        },
        series: {
          type: 'radar',
          data: [
            {
              value : this.score,
            },
          ],
          lineStyle:{
            color: 'rgb(0,218,216)'
          },
          symbol: 'none',
        }
      };
      myChart.setOption(option);
    }
  }
}
</script>

<style scoped>

</style>
