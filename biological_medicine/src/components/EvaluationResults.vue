<template>
<div class="resultsBoard">
  <el-row>
    <el-col>
      <el-card class="companyInfo">
        <div slot="header" class="clearfix">
          <span>圣诺生物医药技术(苏州)有限公司</span>
          <el-tag class="tag">生物制药行业</el-tag>
        </div>
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="info">
              <div>
                {{ detail }}
              </div>
            </div>
          </el-col>
          <el-col :span="12" class="info">
            <el-col>
              <el-icon class="el-icon-location-outline icon" ></el-icon>
              <span class="item">地址：{{address}}</span>
            </el-col>
            <el-col>
              <el-icon class="el-icon-phone icon"></el-icon>
              <span class="item">电话：</span>
            </el-col>
            <el-col>
              <el-icon class="el-icon-message icon"></el-icon>
              <span class="item">邮箱：</span>
            </el-col>
          </el-col>
        </el-row>
      </el-card>
    </el-col>
  </el-row>
  <el-row>
    <el-col :span="6">
      <el-card class="charts">
        <div slot="header" class="chartHead">
          <el-icon class="el-icon-odometer icon"></el-icon>
          <span>评估分数</span>
        </div>
        <div>
          <dashboard-chart></dashboard-chart>
        </div>
        <div class="rank">
          <span>已评价企业排名：</span>
          <span class="rankNum">{{15}}</span>
          <span>/100</span>
        </div>
      </el-card>
    </el-col>
    <el-col :span="9">
      <el-card class="charts">
        <div slot="header" class="chartHead">
          <el-icon class="el-icon-data-board icon"></el-icon>
          <span>评价概览</span>
        </div>
        <div>
          <radar-chart></radar-chart>
        </div>
      </el-card>
    </el-col>
    <el-col :span="9">
      <el-card class="charts">
        <div slot="header" class="chartHead">
          <el-icon class="el-icon-data-analysis icon"></el-icon>
          <span>企业历史评分</span>
        </div>
        <div>
          <line-chart></line-chart>
        </div>
      </el-card>
    </el-col>
  </el-row>
</div>
</template>

<script>
import dashboardChart from './evaluationResults/DashboardChart'
import radarChart from './evaluationResults/RadarChart'
import lineChart from './evaluationResults/LineChart'

export default {
  name: "EvaluationResults",
  components:{
    dashboardChart,
    radarChart,
    lineChart
  },
  data() {
    return{
      detail: '简介：哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
      address: '苏州'
    }
  }
}
</script>

<style scoped>
.resultsBoard{
  margin: 20px;
}
.resultsBoard .companyInfo, .resultsBoard .charts{
  background-color: white;
  border-radius: unset;
  box-shadow: none;
  padding: 1em;
}
.resultsBoard .companyInfo /deep/.el-card__header, .resultsBoard .charts /deep/.el-card__header{
  border-bottom: none;
  padding-bottom: unset;
}
.resultsBoard .companyInfo .clearfix{
  text-align: left;
  font-size: 20px;
  font-weight: 600;
}
.resultsBoard .companyInfo .clearfix .tag{
  margin-left: 1em;
  font-size: 14px;
  font-weight: 500;
}
.resultsBoard .companyInfo .info{
  font-size: 14px;
  text-align: left;
  height: 100px
}
.resultsBoard .companyInfo .info .icon{
  color: #409EFF;
  font-size: 16px;
  line-height: 20px;
  margin-right: 10px;
}
.resultsBoard .companyInfo .info .item{
  line-height: 20px;
}
.resultsBoard .charts{
  margin-top: 20px;
  margin-right: 20px;
}
/*注意层级关系，直接对charts使用last-child是无效的*/
.resultsBoard .el-row .el-col:last-child .charts{
  margin-right: 0;
}
.resultsBoard .charts .chartHead{
  text-align: left;
  font-size: 18px;
  font-weight: 600;
}
.resultsBoard .charts .chartHead .icon{
  color: #409EFF;
  font-size: 18px;
  line-height: 20px;
  margin-right: 10px;
}
.resultsBoard .charts .rank{
  font-size: 12px;
  /*text-align: right;*/
}
/*.resultsBoard .charts .rank span:first-child{*/
/*  text-align: left!important;*/
/*}*/
.resultsBoard .charts .rank .rankNum{
  font-size: 20px;
  color: #409EFF;
}
</style>
