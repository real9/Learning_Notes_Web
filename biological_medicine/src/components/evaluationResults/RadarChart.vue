<template>
<div id="radarChart"></div>
</template>

<script>
export default {
  name: "RadarChart",
  data(){
    return{
      dimensions: ['管理', '市场', '融资', '研发', '其他加分项', '其他扣分项'],
      score: [11, 20, 28, 17, 25, 30],
      radarData: {
        maxValue: [],
        quantValue: [],
      },
      tempData: {}
    }
  },
  mounted() {
    this.initRadarChart();
  },
  methods:{
    async initRadarChart(){
      await this.$store.dispatch('evaluationResults/getScoreDetail', {
        companyId: "91330421MA2CYP1X1R",
        modelId: "hg1000015720211210",
        updateTime: "20220729"
      })
          .then((res) => {
            let maxSum, quantSum;
            this.tempData = res.data.data;
            console.log(this.tempData);
            for(let i = 0; i < this.tempData.length; i ++){
              maxSum = 0;
              quantSum = 0;
              for(let j = 0; j < this.tempData[i].scoreDetailList.length; j ++){
                maxSum += parseInt(this.tempData[i].scoreDetailList[j].quantMaxValue);
                quantSum += parseInt(this.tempData[i].scoreDetailList[j].quantValue)
              }
              this.radarData.maxValue.push(maxSum);
              this.radarData.quantValue.push(quantSum);
            }
            console.log(typeof this.radarData.maxValue[0], typeof this.radarData.quantValue[0])
          })
          .catch((error) => {
            console.dir(error)
          })
      let myChart = this.$echarts.init(document.getElementById('radarChart'), null, {
        width:450,
        height:400
      });
      let that = this;
      let option = {
        radar: {
          // shape: 'circle',
          indicator: [
            {name: '管理', max: that.radarData.maxValue[0]},
            {name: '市场', max: that.radarData.maxValue[1]},
            {name: '融资', max: that.radarData.maxValue[2]},
            {name: '研发', max: that.radarData.maxValue[3]},
            {name: '其他加分项', max: that.radarData.maxValue[4]},
            {name: '其他扣分项', max: that.radarData.maxValue[5]}
          ],
          axisName: {
            color: '#000',
            fontSize: 14,
            formatter: function (value,indicator){
              let index = that.dimensions.indexOf(indicator.name)
              return value + '\n' + that.radarData.quantValue[index] + '/' + indicator.max;
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
              value : that.radarData.quantValue,
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
