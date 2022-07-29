<template>
<div id="StatisticsAnalysis">
<!--  <p style="color: yellow">StatisticsAnalysis</p>-->
  <el-row>
    <el-col :span="3">
      <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          background-color="#01031C"
          text-color="#fff"
          active-text-color="#ffd04b"
      style="max-width: 150px">
        <el-menu-item v-for="city in cities" :index="city.index" :key="city.index">
          <span slot="title">{{city.name}}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="14" >
      <el-card class="box-card box-card-left cityDetail">
        <div slot="header" class="clearfix">
          <span>Compound Name小区名称</span>
        </div>
        <el-row>
          <el-col :span="8">
            <div class="compoundInfo">
              小区介绍
<!--              两个拐角-->
              <div class="topLeft"></div>
              <div class="bottomRight"></div>
            </div>
          </el-col>
          <el-col :span="8">
<!--            仪表盘-->
            <div id="evaluationScoreDashboard" ></div>
          </el-col>
          <el-col :span="8" class="rankingCardGroups">
            <el-row>
              <div>所在区域内排名</div>
              <el-col :span="6" class="rankingCard">0</el-col>
              <el-col :span="6" class="rankingCard">0</el-col>
              <el-col :span="6" class="rankingCard">0</el-col>
              <el-col :span="6" class="rankingCard">1</el-col>
            </el-row>
            <el-row class="rankingCardGroups">
              <div>所在集团内排名</div>
              <el-col :span="6" class="rankingCard">0</el-col>
              <el-col :span="6" class="rankingCard">0</el-col>
              <el-col :span="6" class="rankingCard">1</el-col>
              <el-col :span="6" class="rankingCard">3</el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
      <el-card class="box-card box-card-left cityMap">
        <div v-for="o in 4" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </el-col>
    <el-col :span="7">
      <el-card class="box-card box-card-right cityScatterDiagram">
      <div slot="header" class="clearfix cardName">
        <span>评价排行（2022/01/01至2022/06/30）</span>
      </div>
      <div v-for="o in 8" :key="o" class="text item">
        {{'列表内容 ' + o }}
      </div>
      </el-card>
      <el-card class="box-card box-card-right cityScatterDTable">
        <div slot="header" class="clearfix cardName">
          <span>评价得分（2022/01/01至2022/06/30）</span>
        </div>
        <div v-for="o in 8" :key="o" class="text item">
          {{'列表内容 ' + o }}
        </div>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: "StatisticsAnalysis",
  data() {
    return {
      cities:[
        {
          index:'3301',
          name:'杭州市'
        },
        {
          index:'3302',
          name:'宁波市'
        },
        {
          index:'3303',
          name:'温州市'
        },
        {
          index:'3304',
          name:'嘉兴市'
        },
        {
          index:'3305',
          name:'湖州市'
        },
        {
          index:'3306',
          name:'绍兴市'
        },
        {
          index:'3307',
          name:'金华市'
        },
        {
          index:'3308',
          name:'衢州市'
        },
        {
          index:'3309',
          name:'舟山市'
        },
        {
          index:'3310',
          name:'台州市'
        },
        {
          index:'3311',
          name:'丽水市'
        },
      ]
    }
  },
  mounted() {
    this.initEvaluationScoreDashboard();
  },
  methods:{
    initEvaluationScoreDashboard(){
      let myChart = this.$echarts.init(document.getElementById('evaluationScoreDashboard'),null, {
        width: 230,
        height: 230
      })
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
            //仪表盘的数据条
            itemStyle: {
              color: 'auto',
              shadowColor: 'rgba(0,138,255,0.45)',
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
                color:[[1, '#043366']],
              }
            },
            axisTick: {
              show: true,
              splitNumber:2,
              length: 2,
              lineStyle:{
                width:5,
              }
            },
            areaStyle:{
              color:'#000',
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
                return '{value|' + value.toFixed(1) + '}{unit|\n评价得分}';
              },
              rich: {
                value: {
                  fontSize: 50,
                  fontWeight: 'bold',
                  color: '#fff',
                  padding: [0, 0, 60, 0]
                },
                unit: {
                  fontSize: 15,
                  color: '#fff',
                  padding: [0, 0, 60, 0]
                }
              }
            },
            data: [
              {
                value: 94.5
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
                offset: 1, color: '#24FEEE' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          }
        ],
        // color: [
        //   // 径向渐变，前三个参数分别是圆心 x, y 和半径，取值同线性渐变
        //   {
        //     type: 'radial',
        //     x: 0.5,
        //     y: 0.5,
        //     r: 0.5,
        //     colorStops: [{
        //       offset: 0, color: 'red' // 0% 处的颜色
        //     }, {
        //       offset: 1, color: 'blue' // 100% 处的颜色
        //     }],
        //     global: false // 缺省为 false
        //   }
        // ]
      };
      myChart.setOption(option);
    }
  },
}
</script>

<style scoped>
.el-menu{
  border-right: none;
}
.el-card /deep/ .el-card__header {
  border-bottom: none;
}
.el-card /deep/ .el-card__body{
  /*padding: 20px;*/
  padding-right: 0;
}
/*所有卡片*/
.box-card {
  /*background-color: rgba(255,255,255,0.18);*/
  background-image: linear-gradient(rgb(1,21,50), rgb(2,30,68));
  color: white;
  border: none;
}
/*两个左半卡片*/
.box-card-left {
  border-radius: unset;
  margin-left: 5px;
  margin-right: 3px;
  margin-bottom: 10px;
}
/*两个右半卡片*/
.box-card-right {
  border-radius: unset;
  margin-right: 5px;
  margin-left: 3px;
  margin-bottom: 10px;
}
/*小区介绍*/
.compoundInfo {
  position: relative;
  width: 100%;
  height: 100px;
  background-image: linear-gradient(rgb(3,32,71), rgb(8,47,104));

}
/*两个拐角*/
.compoundInfo .topLeft{
  position: absolute;
  top: 0;
  left: 0;
  width: 10px;
  height: 10px;
  border-top: 5px solid #1794E5;
  border-left: 5px solid #1794E5;
}
.compoundInfo .bottomRight{
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-bottom: 5px solid #1794E5;
  border-right: 5px solid #1794E5;
}
/*排名的数字卡片组*/
.rankingCardGroups{
  margin-right: 0;
  margin-left: 0;
}
/*排名信息的文字*/
.rankingCardGroups div{
  text-align: left;
}
/*排名数字的卡片*/
.rankingCardGroups .rankingCard {
  width: 40px;
  height: 40px;
  margin-right: 5px;
  margin-bottom: 15px;
  margin-top: 5px;
  background-color: rgba(255,255,255,0.3);
  font-size: 30px;
  font-weight: bold;
  text-align: center;
  line-height: 40px;
}
/*大卡片名字*/
.cardName{
  text-align: left;
}
</style>
