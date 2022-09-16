<template>
<div class="resultsBoard">
  <el-row>
    <el-col>
      <el-card class="companyInfo">
        <div slot="header" class="clearfix">
          <span>{{ companyInfo.companyName }}</span>
          <el-tag class="tag">{{ companyInfo.tag }}</el-tag>
        </div>
        <el-row :gutter="20">
          <el-col :span="12">
            <div class="info">
              <div>简介：
                {{ companyInfo.companyDesc }}
              </div>
            </div>
          </el-col>
          <el-col :span="12" class="info">
            <el-col>
              <el-icon class="el-icon-location-outline icon" ></el-icon>
              <span class="item">地址：{{companyInfo.address}}</span>
            </el-col>
            <el-col>
              <el-icon class="el-icon-phone icon"></el-icon>
              <span class="item">电话：{{companyInfo.contact}}</span>
            </el-col>
            <el-col>
              <el-icon class="el-icon-message icon"></el-icon>
              <span class="item">邮箱：{{companyInfo.url}}</span>
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
          <dashboard-chart :score="companyInfo.score"></dashboard-chart>
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
  <el-row>
    <el-col>
      <el-card class="detail">
        <div slot="header" class="detailHead">
          <el-icon class="el-icon-zoom-out icon"></el-icon>
          <span>评估结果明细</span>
          <el-button type="text" class="btn"><i class="el-icon-refresh"></i></el-button>
          <el-button type="text" class="btn"><i class="el-icon-download"></i></el-button>
        </div>
        <div>
          <el-row>
            <el-col><div class="dimension">评估维度一：管理</div></el-col>
            <el-col :span="12">
              <detail-board></detail-board>
            </el-col>
            <el-col :span="12"></el-col>
          </el-row>
          <el-row>
            <el-col><div class="dimension">评估维度二：市场</div></el-col>
            <el-col :span="12">
              <detail-board></detail-board>
            </el-col>
            <el-col :span="12"></el-col>
          </el-row>
          <el-row>
            <el-col><div class="dimension">评估维度三：融资</div></el-col>
            <el-col :span="12">
              <detail-board></detail-board>
            </el-col>
            <el-col :span="12"></el-col>
          </el-row>
          <el-row>
            <el-col><div class="dimension">评估维度四：研发</div></el-col>
            <el-col :span="12">
              <detail-board></detail-board>
            </el-col>
            <el-col :span="12"></el-col>
          </el-row>
          <el-row>
            <el-col><div class="dimension">评估维度五：其他加分项</div></el-col>
            <el-col :span="12">
              <detail-board mode="plus"></detail-board>
            </el-col>
            <el-col :span="12"></el-col>
          </el-row>
          <el-row>
            <el-col><div class="dimension danger">评估维度六：其他扣分项</div></el-col>
            <el-col :span="12">
              <detail-board danger mode="minus"></detail-board>
            </el-col>
            <el-col :span="12"></el-col>
          </el-row>
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
import detailBoard from './evaluationResults/DetailBoard'

export default {
  name: "EvaluationResults",
  components:{
    dashboardChart,
    radarChart,
    lineChart,
    detailBoard
  },
  data() {
    return{
      companyInfo:{
        companyName: '',
        tag: '',
        companyDesc: '',
        address: '',
        contact: '',
        url: '',
        score: 0,
      },
    }
  },
  created() {
    this.getCompanyInfo();
    // this.getCompanyScore();
  },
  methods: {
    //评估主体
    getCompanyInfo() {
      this.$store.dispatch('evaluationResults/getCompanyInfo', {companyId: "91330421MA2CYP1X1R"})
      .then((res) => {
        this.companyInfo = res.data.data[0]
        console.log(res)
      })
      .catch((error) => {
        console.dir(error)
      })
    },
    getCompanyScore() {
      this.$store.dispatch('evaluationResults/getCompanyScore', {companyId: "91330421MA2CYP1X1R"})
          .then((res) => {
            console.log(res)
          })
          .catch((error) => {
            console.dir(error)
          })
    },
  },
}
</script>

<style scoped>
.resultsBoard{
  margin: 20px;
}
.resultsBoard .companyInfo, .resultsBoard .charts, .resultsBoard .detail{
  background-color: white;
  border-radius: unset;
  box-shadow: none;
  padding: 1em;
}
.resultsBoard .companyInfo /deep/.el-card__header,
.resultsBoard .charts /deep/.el-card__header,
.resultsBoard .detail /deep/.el-card__header{
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
.resultsBoard .charts .chartHead, .resultsBoard .detail .detailHead{
  text-align: left;
  font-size: 18px;
  font-weight: 600;
}
.resultsBoard .charts .chartHead .icon, .resultsBoard .detail .detailHead .icon{
  color: #409EFF;
  font-size: 18px;
  line-height: 20px;
  margin-right: 10px;
}
.resultsBoard .charts .rank{
  font-size: 12px;
  /*text-align: right;*/
}
.resultsBoard .charts .rank .rankNum{
  font-size: 20px;
  color: #409EFF;
}
.resultsBoard .detail{
  margin-top: 20px;
}
.resultsBoard .detail .detailHead .btn{
  float: right;
  font-size: 18px;
}
.resultsBoard .detail .dimension{
  text-align: left;
  color: #409EFF;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 16px;
}
.resultsBoard .detail .el-row:not(:first-child) .dimension{
  margin-top: 16px;
}
.resultsBoard .detail .danger{
  color: rgb(255,103,84)!important;
}
</style>
