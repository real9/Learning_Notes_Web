<template>
<div id="StatisticsAnalysis" @click="getOtherClickToClose($event)">
  <el-row>
    <el-col :span="3">
      <el-menu
          :default-active="defaultActiveIndex"
          class="el-menu-vertical-demo"
          background-color="#01031C"
          style="width: 125px"
          @select="getSelectedCity">
        <el-menu-item v-for="city in cities" :index="city.index" :key="city.index">
          <span slot="title">{{city.name}}</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :span="14" >
      <el-card class="box-card box-card-left cityDetail">
        <div slot="header" class="clearfix">
          <span
              :style="{color: currentCompoundIndex > 2? 'rgb(35,247,238)'
              : (currentCompoundIndex > 1 ? 'rgb(158, 90, 251)'
              : (currentCompoundIndex > 0 ? 'blue'
              : (currentCompoundIndex === 0 ? 'red' : '')))}"
              class="topIndex">
            TOP.{{ currentCompoundIndex + 1 }}
          </span>
          <span>{{compoundName}}</span>
        </div>
        <el-row>
          <el-col :span="8">
            <div class="compoundInfo">
              <div>{{compoundInformation}}</div>
<!--              两个拐角-->
              <div class="topLeft"></div>
              <div class="bottomRight"></div>
            </div>
          </el-col>
          <el-col :span="8">
<!--            仪表盘-->
            <div id="evaluationScoreDashboard" style="margin: auto"></div>
          </el-col>
          <el-col :span="8" class="rankingCardGroups">
            <el-row>
              <div>所在区域内排名</div>
              <el-col :span="6" class="rankingCard">{{districtRankingNum[0]}}</el-col>
              <el-col :span="6" class="rankingCard">{{districtRankingNum[1]}}</el-col>
              <el-col :span="6" class="rankingCard">{{districtRankingNum[2]}}</el-col>
              <el-col :span="6" class="rankingCard">{{districtRankingNum[3]}}</el-col>
            </el-row>
            <el-row class="rankingCardGroups">
              <div>所在集团内排名</div>
              <el-col :span="6" class="rankingCard">{{groupRankingNum[0]}}</el-col>
              <el-col :span="6" class="rankingCard">{{groupRankingNum[1]}}</el-col>
              <el-col :span="6" class="rankingCard">{{groupRankingNum[2]}}</el-col>
              <el-col :span="6" class="rankingCard">{{groupRankingNum[3]}}</el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
      <el-card class="box-card box-card-left cityMap">
        <div id="cityMapChart"></div>
        <div class="timeSelector">
          <div class="timeBar">近一月</div>
          <div class="timeBar">近三月</div>
          <div class="timeBar">近六月</div>
          <div class="timeBar">近一年</div>
          <div class="timeBar" @click="getCustomClick" id="datePicker">自定义</div>
        </div>
<!--        element-ui内部有个bug，版本2.15.8不会报错，其他版本会-->
        <el-date-picker
            v-show="show"
            v-model="dateRangeValue"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            size="mini"
            style="position: absolute;bottom: 0;right: 0"
            @focus="getFocusFlag"
            @blur="getDateRange">
        </el-date-picker>
      </el-card>
    </el-col>
    <el-col :span="7">
      <el-card class="box-card box-card-right cityScatterDiagram">
      <div slot="header" class="clearfix cardName">
        <span>评价排行（2022/01/01至2022/06/30）</span>
      </div>
        <div id="evaluationRankingScatterDiagram"></div>
        <div class="legend-box">
          <div class="legend-solid"></div>
          <div class="legend-name">省行集团中位数</div>
          <div class="legend-dashed"></div>
          <div class="legend-name">杭州市中位数</div>
        </div>
      </el-card>
      <el-card class="box-card box-card-right cityScatterDTable">
        <div slot="header" class="clearfix cardName">
          <span>评价得分（2022/01/01至2022/06/30）</span>
        </div>
        <el-table :data="tableData" :show-header="false" highlight-current-row @current-change="handleCurrentChange">
          <el-table-column width="60" >
            <template slot-scope="scope">
              <div class="topIndex" :style="{color:getIndexColor(scope.$index)}">{{'TOP.'+ (scope.$index + 1)}}</div>
            </template>
          </el-table-column>
          <el-table-column prop="compoundName" :show-overflow-tooltip="true"></el-table-column>
          <el-table-column prop="location" width="80"></el-table-column>
          <el-table-column prop="score" width="60"></el-table-column>
        </el-table>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script >
export default {
  name: "StatisticsAnalysis",
  data() {
    return {
      //对于第一个card的内容，求取到数据后全部赋值为第一组数据
      //实际开发中，小区分数应该默认是0
      compoundScore: 89.45,
      compoundInformation:'默认内容的设置，对于第一个card的内容，求取到数据后全部赋值为第一组数据',
      compoundName:'泰禾杭州院子',
      districtRankingNum:[0,0,0,0],
      groupRankingNum:[0,0,0,0],
      dateRangeValue: '',
      show: false,
      flag: false,
      defaultActiveIndex: '3301',
      //地图中高亮的部分
      currentCompoundIndex: 0,
      currentDistrictName:'',
      cityCode: '330100',
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
      ],
      tableData:[
        {
          compoundName:'泰禾杭州院子',
          location:'余杭区',
          score:'89.45',
          rank1: 1234,
          rank2: 1235,
        },
        {
          compoundName:'阳光城西郊半岛',
          location:'富阳区',
          score:'78.67',
          rank1: 1,
          rank2: 12,
        },
        {
          compoundName:'万达同心湾',
          location:'富阳区',
          score:'73.76',
          rank1: 123,
          rank2: 456,
        },
        {
          compoundName:'泰禾大城小院',
          location:'富阳区',
          score:'72.67',
          rank1: 6789,
          rank2: 8848,
        },
        {
          compoundName:'绿地柏澜晶舍',
          location:'临安区',
          score:'70.34',
          rank1: 8888,
          rank2: 2022,
        },
        {
          compoundName:'璞玉公馆',
          location:'钱塘区',
          score:'65.67',
          rank1: 2021,
          rank2: 2012,
        },
        {
          compoundName:'阳光城檀映里',
          location:'钱塘区',
          score:'64.34',
          rank1: 2333,
          rank2: 1949,
        },
        {
          compoundName:'泰禾大城小院',
          location:'余杭区',
          score:'50',
          rank1: 1945,
          rank2: 1919,
        },
        {
          compoundName:'阳光城檀映里',
          location:'西湖区',
          score:'40',
          rank1: 1956,
          rank2: 19,
        },
      ],
      myChart:{},
    }
  },
  mounted() {
    this.initEvaluationScoreDashboard();
    this.initEvaluationRankingScatterDiagram();
    this.initCityMapChart();
  },
  methods:{
    initEvaluationScoreDashboard(){
      let myChart = this.$echarts.init(document.getElementById('evaluationScoreDashboard'),null, {
        width: 230,
        height: 230
      })
      //最好的做法时myChart是全局变量，每次判断dom是否被创建，创建了就要清理旧的
      //不做其他处理的话，只会warning
      let that = this;
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
                value: that.compoundScore
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
      };
      myChart.setOption(option);
    },
    initEvaluationRankingScatterDiagram(){
      let myChart = this.$echarts.init(document.getElementById('evaluationRankingScatterDiagram'),null, {
        width: 350,
        height: 300
      })
      let option;
      option = {
        xAxis: {
          show: false,
          type: 'category',
          data: ['绿地柏澜晶舍', '阳光城西郊半岛', '阳光城檀映里', '万达同心湾', '璞玉公馆', '泰禾大城小院', '阳光城檀映里', '泰禾杭州院子', '泰禾大城小院'],
        },
        yAxis: {
          interval: 20,
          axisLine:{
            show: false,
          },
          axisTick:{
            show: false,
          },
          //分割线
          splitLine: {
            lineStyle: {
              color: '#444'
            }
          },
        //  刻度
          axisLabel: {
            color: '#ccc'
          }
        },
        series: [
          {
            colorBy: 'data',
            color:['rgb(38,223,249)','rgb(55,95,253)','rgb(78,187,229)','rgb(150,78,247)'],
            symbolSize: 10,
            label:{
              //标签文字
              show: true,
              position: 'top',
              distance: 1,
              formatter: '{b}',
              color: '#fff',
              align: 'center',
              fontSize: 10,
            },
            //标记线
            markLine:{
              label:{
                position: 'insideEndBottom',
                color: 'skyblue',
                fontSize: 12,
              },
              //解决线的两个端点的样式，用数组
              symbol: ['none', 'none'],
              data: [
                {
                  yAxis: 57.67,
                  lineStyle:{
                    type:'solid',
                  }
                },
                {
                  yAxis: 37.67,
                  lineStyle:{
                    type:'dashed',
                  }
                }
              ],
            },
            data:[40, 81, 20, 69, 40, 61, 5, 89, 70],
            type: 'scatter'
          }
        ],
      };
      myChart.setOption(option);
    },
    async initCityMapChart(){
      let cityData;
      //要异步，不然就是先渲染了但是还没数据进来
      await this.$axios.get('https://geo.datav.aliyun.com/areas_v3/bound/'+ this.cityCode +'_full.json')
      .then( (res) => {
        cityData = res.data;
        // console.log(res.data);
      });
      //图表部分
      //首先清理已存在的dom，不然就报错，并且更改选中高亮部分的时候不会重绘
      this.$echarts.dispose(document.getElementById('cityMapChart'));
      this.myChart = this.$echarts.init(document.getElementById('cityMapChart'),null,{
        width: 500,
        height: 400
      })
      // this.$echarts.registerMap('hangzhou', cityData, {})
      this.$echarts.registerMap(this.cityCode, cityData, {})
      let option = {
        backgroundColor: 'transparent',
        //地图部分
        geo: {
          componentType: 'geo',
          // map: 'hangzhou',
          map: this.cityCode,
          zoom: 1.2,
          label: {
            show: true,
            position: 'inside',
            color: '#abc',
            fontSize: 10,
          },
          itemStyle: {
            areaColor: 'rgb(40,63,105)',
            borderColor: 'rgb(75,127,166)',
          },
          emphasis:{
            disabled: false,
            label: {
              color: '#abc',
              fontSize: 10,
            },
            itemStyle: {
              borderColor: 'rgb(16,90,154)',
              borderWidth: 3,
              areaColor: 'rgb(40,63,105)',
            },
          },
          //特定区域的样式
          regions: [{
            //可接入数据，通过其他地方传数据进来，指定哪个区域高亮
            //name可以为空
            name: this.currentDistrictName,
            //有bug，地区的一半线条只变色不加粗（原生的问题吧）
            itemStyle: {
              areaColor: 'rgb(40,63,105)',
              borderColor: 'rgb(16,90,154)',
              borderWidth: 3,
            },
            label: {
              color: '#abc',
              fontSize: 10,
            },
          }]
        },
        // 散点图
        series: [{
          type: 'scatter',
          coordinateSystem: 'geo',
          label: {  //显示文字
            show: true,
            formatter: '{@3}',
            color:'rgb(36,196,235)',
            fontSize:6,
          },
          itemStyle: {
            color: 'transparent',
            borderColor: 'rgb(36,196,235)',
          },
          data: [
            {
              name: '绿地柏澜晶舍',
              value: [119.787185, 30.268468, 70.34, 1],
            },
            {
              name: '阳光城西郊半岛',
              value: [119.978973, 30.057302, 78.67, 2],
            },
            {
              name: '阳光城檀映里',
              value: [120.193783, 30.228839, 64.34, 3],
            },
            {
              name: '万达同心湾',
              value: [119.940638, 30.094721, 73.76, 4],
            },
            {
              name: '璞玉公馆',
              value: [120.288348, 30.322457, 65.67, 5],
            },
            {
              name: '泰禾大城小院',
              value: [119.970032, 30.145152, 72.67, 6],
            },
            {
              name: '阳光城檀映里',
              value: [119.91769, 30.055263, 40, 7],
            },
            {
              name: '泰禾杭州院子',
              value: [120.040683, 30.278311, 89.45, 8],
            },
            {
              name: '泰禾大城小院',
              value: [120.136666, 30.237311, 50, 9],
            },
          ],
          emphasis: {
            label: {
              color: '#fff',
              fontSize: 10,
              position: 'inside',
            },
            itemStyle: {
              borderColor: 'transparent',
              color:'rgb(16,149,254)',
            },
          }
        }]
      };
      this.myChart.setOption(option);
      this.myChart.dispatchAction({
        type:'highlight',
        //传入选定数据的下标即可
        dataIndex: this.currentCompoundIndex,
      })
    },
    //日期选择器失去焦点时就被掩藏，一般是选好了日期被隐藏
    getDateRange(){
      this.show = false;
      this.flag = false;
      console.log(this.dateRangeValue);
    },
    //自定义日期
    getCustomClick(){
      this.show = true;
    },
    //判断是否focus状态，防止选日期的时候datePicker被隐藏
    getFocusFlag(){
      this.flag = true;
    },
    //点击其他地方，关闭日期选择器
    getOtherClickToClose(e){
      let el = document.getElementById('datePicker')
      if(el){
        if(!el.contains(e.target) && !this.flag){
          this.show = false;
        }
      }
    },
    //动态添加样式
    getIndexColor(index){
      if( index === 0){
        return 'red'
      }else if (index === 1){
        return 'blue'
      }else if (index === 2){
        return 'rgb(158, 90, 251)'
      }
    },
    //第四块的表格和第三块的地图联动
    handleCurrentChange(val){
      this.currentCompoundIndex = this.tableData.indexOf(val);
      this.currentDistrictName = val.location;
      this.initCityMapChart();
      //仪表盘联动
      this.compoundScore = val.score;
      this.initEvaluationScoreDashboard();
    //  小区介绍联动
      this.compoundInformation = '';
      for(let i = 0; i < 10; i ++){
        this.compoundInformation += val.compoundName ;
      }
      this.compoundName = val.compoundName;
    //  排名联动
      this.districtRankingNum = [0,0,0,0];
      this.groupRankingNum = [0,0,0,0];
      let i = 0
      let rank1 = val.rank1;
      let rank2 = val.rank2;
      while (rank1 > 0 || rank2 > 0){
        this.districtRankingNum[3 - i] = rank1 % 10;
        rank1 = Math.floor(rank1 / 10);
        this.groupRankingNum[3 - i] = rank2 % 10;
        rank2 = Math.floor(rank2 / 10);
        i += 1;
      }
    },
    //切换选中的城市
    getSelectedCity(index){
      this.cityCode = index + '00';
      this.initCityMapChart();
    }
  },
}
</script>

<style scoped>
.el-menu{
  border-right: none;
}
/*/deep/被弃用，vue3现在是deep()，本项目是vue2*/
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
/*第一个卡片的标题部分*/
.cityDetail .clearfix{
  width: 180px;
  height: 34px;
  line-height: 34px;
  margin: auto;
  color: rgb(138,195,222);
  background-color: rgba(255, 255, 255, 0.2); /*针对不支持渐变的浏览器*/
  background-image: radial-gradient(circle, rgb(8, 47, 114), rgb(10,36,69));
}
/*小区介绍*/
.compoundInfo {
  position: relative;
  width: 100%;
  height: 100px;
  background-image: linear-gradient(rgb(3,32,71), rgb(8,47,104));
}
.compoundInfo div {
  color: rgb(67, 177, 227);
  font-size: 14px;
  /*统一padding，但是两个拐角的padding要unset*/
  padding: 10px 10px;
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
  padding: unset;
}
.compoundInfo .bottomRight{
  position: absolute;
  bottom: 0;
  right: 0;
  width: 10px;
  height: 10px;
  border-bottom: 5px solid #1794E5;
  border-right: 5px solid #1794E5;
  padding: unset;
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
/*四位数，排名数字的卡片*/
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
/*图例部分，原生css样式手写*/
.legend-box {
  display: flex;
  margin: auto;
  align-items: center;
}

.legend-solid {
  height: 0;
  width: 40px;
  border-top: 2px solid #1794E5;
  border-left: none;
  border-right: none;
  border-bottom: none;
  margin: 0;
  padding: 0
}
.legend-dashed{
  height: 0;
  width: 40px;
  border-top: 2px dashed #1794E5;
  border-left: none;
  border-right: none;
  border-bottom: none;
  margin: 0;
  padding: 0
}
.legend-name {
  margin: auto;
  font-size: 10px
}
.cityMap{
  position: relative;
}
/*城市地图旁边的时间选择器整体*/
.timeSelector {
  background-color: rgba(0,0,0,0);
  width: 200px;
  height: 200px;
  position: absolute;
  right: 0;
  bottom: 0
}
.timeBar {
  font-size: 10px;
  text-align: center;
  margin-bottom: 10px;
  width: 75px;
  height: 30px;
  line-height: 30px;
  cursor: pointer;
  position: relative;
  z-index: 99;
}
/*梯形背景*/
.timeBar:after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 0;
  background-color: rgba(255, 255, 255, 0.1);
  transform: perspective(10px) rotateX(-3deg);
  transform-origin: left;
}
.topIndex{
  font-family:Papyrus, Herculanum, Party LET, Curlz MT, Harrington, fantasy,sans-serif;
  color: rgb(35,247,238);
}
.el-table {
  color: white;
  background-color: transparent;
  border: none;
}
.el-table /deep/ tr {
  background-color: transparent;
}
.el-table /deep/ td.el-table__cell, .el-table th.el-table__cell.is-leaf{
  /*background-color: transparent;*/
  border-bottom: 1px solid rgba(255,255,255,0.1);
}
/*最后一行的border删不掉，找了其他的来覆盖*/
/deep/ .el-table__body-wrapper{
  border-bottom: 2px solid rgb(1,21,50) !important;
  z-index: 99;
}
/*鼠标经过，该行变色*/
/deep/ .el-table__body tr:hover>td{
  background-color: rgba(255,255,255,0.1) !important;
}
/*选中某行*/
/deep/ .el-table__body tr.current-row>td.el-table__cell{
  background-color: rgba(255,255,255,0.2);
}
/*日期选择器*/
.el-date-editor{
  background-color: rgba(255,255,255,0.2);
  border: 1px solid rgba(255,255,255,0.5);
}
/deep/ .el-range-separator{
  color: white;
}
/deep/ .el-range-input{
  color: white;
  background-color: rgba(255,255,255,0.5);
}
/*placeHolder的样式*/
/deep/ .el-range-input::-webkit-input-placeholder { /* WebKit browsers 适配谷歌 */
  color: white;
}
/*左侧导航栏样式*/
/*未激活的样式*/
.el-menu-item{
  margin-bottom: 20px;
  font-weight: bold;
  font-size: 16px;
  color: rgb(26,57,86);
  background-color: rgba(255, 255, 255, 0.1) !important; /*针对不支持渐变的浏览器*/
  background-image: radial-gradient(farthest-corner at 50% 5%, rgb(12, 46, 83), #01031C);
}
/*激活的样式*/
/deep/ .el-menu-item.is-active {
  color: rgb(67, 177, 227);
  background-color: rgba(255, 255, 255, 0.2); /*针对不支持渐变的浏览器*/
  background-image: radial-gradient(farthest-corner at 50% 5%, rgb(8, 47, 114), #01031C);
}
/*字体*/
.el-menu-item.is-active span{
  background-image: -webkit-gradient(linear,0 top, 0 bottom, from(white), to(rgb(67, 177, 227)));
  /*必需加前缀 -webkit- 才支持这个text值 */
  -webkit-background-clip: text;
  /*text-fill-color会覆盖color所定义的字体颜色： */
  -webkit-text-fill-color: transparent;
}
</style>
