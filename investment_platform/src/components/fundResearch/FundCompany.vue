<template>
<el-row class="fund_company">
  <el-col :span="20" :offset="2" class="updateTime">数据更新时间：2021-11-22</el-col>
  <el-col :span="20" :offset="2" class="btnGroups">
    <el-button v-for="item in buttons" :key="item.index" type="text">{{item.title}}</el-button>
  </el-col>
  <el-col :span="20" :offset="2">
    <el-button>111</el-button>
  </el-col>
  <el-col :span="20" :offset="2" class="companyName">
    <span class="title">广发基金</span>
    <span>基金公司评级</span>
    <el-rate
        v-model="rank"
        disabled
        text-color="#ff9900"
    class="rate">
    </el-rate>
  </el-col>
  <el-col :span="20" :offset="2" class="panels">
    <div class="panelItems" v-for="item in panels" :key="item.index">
      <div class="panelName">{{item.name}}</div>
      <div class="panelContent">{{item.content}}</div>
    </div>
  </el-col>
  <el-col :span="20" :offset="2" class="fundManager">
    <el-collapse>
      <el-collapse-item>
        <template slot="title">
          <span class="title">
            旗下基金经理
          </span>
          <el-input size="mini" class="input" placeholder="请输入搜过关键词" suffix-icon="el-icon-search"></el-input>
        </template>
        <el-table :data="managerData" stripe :header-row-style="tableHead">
          <el-table-column prop="name" label="基金经理" sortable align="center"></el-table-column>
          <el-table-column prop="rank1" label="股票基金管理评级" sortable align="center">
            <template slot-scope="scope">
              <el-rate v-if="scope.row.rank1 !== 0" v-model="scope.row.rank1" disabled text-color="#ff9900"></el-rate>
              <span v-else>- -</span>
            </template>
          </el-table-column>
          <el-table-column prop="rank2" label="债券基金管理评级" sortable align="center">
            <template slot-scope="scope">
              <el-rate  v-if="scope.row.rank2 !== 0" v-model="scope.row.rank2" disabled text-color="#ff9900"></el-rate>
              <span v-else>- -</span>
            </template>
          </el-table-column>
          <el-table-column prop="rank3" label="混合金管理评级" sortable align="center">
            <template slot-scope="scope">
              <el-rate v-if="scope.row.rank3 !== 0" v-model="scope.row.rank3" disabled text-color="#ff9900"></el-rate>
              <span v-else>- -</span>
            </template>
          </el-table-column>
          <el-table-column prop="rank4" label="境外金管理评级" sortable align="center">
            <template slot-scope="scope">
              <el-rate  v-if="scope.row.rank4 !== 0" v-model="scope.row.rank4" disabled text-color="#ff9900"></el-rate>
              <span v-else>- -</span>
            </template>
          </el-table-column>
          <el-table-column prop="rank5" label="其他金管理评级" sortable align="center">
            <template slot-scope="scope">
              <el-rate  v-if="scope.row.rank5 !== 0" v-model="scope.row.rank5" disabled text-color="#ff9900"></el-rate>
              <span v-else>- -</span>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="基金经理从业时间" sortable align="center"></el-table-column>
          <el-table-column prop="" label="详情" type="expand" align="center">
            <template slot-scope="scope">
              <el-row>
                <el-col :span="17" :offset="1">
                  <el-row class="personalInfo">
                    <el-col class="expandTitle">个人信息</el-col>
                    <el-col :span="3">
                      <el-image :src="scope.row.details.src" style="height: 150px; width: 100px">
                        <div slot="placeholder" class="image-slot">
                          加载中<span class="dot">...</span>
                        </div>
                      </el-image>
                    </el-col>
                    <el-col :span="20">{{scope.row.details.briefIntroduction}}</el-col>
                  </el-row>
                  <el-row class="career">
                    <el-col>
                      <el-col class="expandTitle">管理历程：</el-col>
                      <el-col>
                        <time-line></time-line>
                      </el-col>
                    </el-col>
                  </el-row>
                </el-col>
                <el-col :span="6">
                  <radar-chart></radar-chart>
                </el-col>
              </el-row>
            </template>
          </el-table-column>
        </el-table>
      </el-collapse-item>
    </el-collapse>
  </el-col>
  <el-col :span="20" :offset="2" class="fundProduct">
    <el-collapse>
      <el-collapse-item>
        <template slot="title">
          <span class="title">
            旗下基金产品
          </span>
          <el-input size="mini" class="input" placeholder="请输入搜过关键词" suffix-icon="el-icon-search"></el-input>
        </template>
        <el-scrollbar style="height: 50vh">
          <el-table :header-row-style="tableHead" stripe :data="productData">
            <el-table-column prop="code" label="基金代码" sortable align="center" width="100"></el-table-column>
            <el-table-column prop="name" label="基金名称" sortable align="center"></el-table-column>
            <el-table-column prop="rank" label="综合评级" sortable align="center" width="200">
              <template slot-scope="scope">
                <el-rate v-model="scope.row.rank" disabled text-color="#ff9900"></el-rate>
              </template>
            </el-table-column>
            <el-table-column prop="type" label="资产类型" sortable align="center" width="100"></el-table-column>
            <el-table-column prop="manager" label="基金经理" sortable align="center" width="100"></el-table-column>
            <el-table-column prop="date" label="基金成立日期" sortable align="center" width="140"></el-table-column>
            <el-table-column prop="belong" label="行业归属" sortable align="center" width="100"></el-table-column>
            <el-table-column prop="std" label="基金业绩标准" sortable align="center" min-width="180"></el-table-column>
          </el-table>
        </el-scrollbar>
      </el-collapse-item>
    </el-collapse>
  </el-col>
  <el-button class="backBtn" size="mini"><i class="el-icon-d-arrow-left"></i></el-button>
  <el-button class="forwardBtn" size="mini"><i class="el-icon-d-arrow-right"></i></el-button>
</el-row>
</template>

<script>
import radarChart from './fundCompany/RadarChart.vue'
import timeLine from './fundCompany/TimeLine'
export default {
  name: "FundCompany",
  components: {
    radarChart,
    timeLine,
  },
  data(){
    return {
      buttons: [
        {
          title: '广发基金',
          index: '1',
        },
        {
          title: '南方基金',
          index: '2',
        },
        {
          title: '博士基金',
          index: '3',
        },
        {
          title: '易方达基金',
          index: '4',
        },
        {
          title: '华夏基金',
          index: '5',
        },
        {
          title: '富国基金',
          index: '6',
        },
        {
          title: '鹏华基金',
          index: '7',
        },
        {
          title: '嘉实基金',
          index: '8',
        },
        {
          title: '招商基金',
          index: '9',
        },
        {
          title: '汇添富基金',
          index: '10',
        },
        {
          title: '工银瑞信基金',
          index: '11',
        },
        {
          title: '国泰基金',
          index: '12',
        },
        {
          title: '中欧基金',
          index: '13',
        },
        {
          title: 'aa基金',
          index: '14',
        },
        {
          title: 'bb基金',
          index: '15',
        },
        {
          title: 'cc基金',
          index: '16',
        },
      ],
      rank: 5,
      panels: [
        {
          index: 1,
          name: '旗下基金经理数',
          content: '68',
        },
        {
          index: 2,
          name: '旗下基金产品数',
          content: '471',
        },
        {
          index: 3,
          name: '权益型基金数量',
          content: '285',
        },
        {
          index: 4,
          name: '回收类基金数量',
          content: '111',
        },
        {
          index: 5,
          name: '货币类基金数量',
          content: '17',
        },
        {
          index: 6,
          name: '其他类基金数量',
          content: '58',
        },
        {
          index: 7,
          name: '基金总规模(亿元)',
          content: '10901.98',
        },
      ],
      tableHead: {
        'color': '#606266',
        'font-weight': 300,
      },
      managerData: [
        {
          name: '观富钦',
          rank1: 5,
          rank2: 5,
          rank3: 0,
          rank4: 5,
          rank5: 0,
          date: '2018-02-13',
          details: {
            src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            briefIntroduction: '个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息',
            career: []
          }
        },
        {
          name: '观富钦',
          rank1: 0,
          rank2: 5,
          rank3: 0,
          rank4: 5,
          rank5: 5,
          date: '2018-02-13',
          details: {
            src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            briefIntroduction: '个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息',
            career: []
          }
        },
        {
          name: '观富钦',
          rank1: 0,
          rank2: 5,
          rank3: 5,
          rank4: 5,
          rank5: 0,
          date: '2018-02-13',
          details: {
            src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            briefIntroduction: '个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息',
            career: []
          }
        },
        {
          name: '观富钦',
          rank1: 5,
          rank2: 0,
          rank3: 5,
          rank4: 0,
          rank5: 5,
          date: '2018-02-13',
          details: {
            src: 'https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg',
            briefIntroduction: '个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息个人信息',
            career: []
          }
        },
      ],
      productData: [
        {
          code: '000268',
          name: '广发集利一年定开债C',
          rank: 5,
          type: '债券基金',
          manager: '代宇',
          date: '2013-08-31',
          belong: '信用债',
          std: '银行一年期定期存款税后利率+0.5百分比',
        },
        {
          code: '000268',
          name: '广发集利一年定开债C',
          rank: 5,
          type: '债券基金',
          manager: '代宇',
          date: '2013-08-31',
          belong: '信用债',
          std: '银行一年期定期存款税后利率+0.5百分比',
        },
        {
          code: '000268',
          name: '广发集利一年定开债C',
          rank: 5,
          type: '债券基金',
          manager: '代宇',
          date: '2013-08-31',
          belong: '信用债',
          std: '银行一年期定期存款税后利率+0.5百分比',
        },
        {
          code: '000268',
          name: '广发集利一年定开债C',
          rank: 5,
          type: '债券基金',
          manager: '代宇',
          date: '2013-08-31',
          belong: '信用债',
          std: '银行一年期定期存款税后利率+0.5百分比',
        },
        {
          code: '000268',
          name: '广发集利一年定开债C',
          rank: 5,
          type: '债券基金',
          manager: '代宇',
          date: '2013-08-31',
          belong: '信用债',
          std: '银行一年期定期存款税后利率+0.5百分比',
        },
        {
          code: '000268',
          name: '广发集利一年定开债C',
          rank: 5,
          type: '债券基金',
          manager: '代宇',
          date: '2013-08-31',
          belong: '信用债',
          std: '银行一年期定期存款税后利率+0.5百分比',
        },
        {
          code: '000268',
          name: '广发集利一年定开债C',
          rank: 5,
          type: '债券基金',
          manager: '代宇',
          date: '2013-08-31',
          belong: '信用债',
          std: '银行一年期定期存款税后利率+0.5百分比',
        },
        {
          code: '000268',
          name: '广发集利一年定开债C',
          rank: 5,
          type: '债券基金',
          manager: '代宇',
          date: '2013-08-31',
          belong: '信用债',
          std: '银行一年期定期存款税后利率+0.5百分比',
        },
      ],
    }
  }
}
</script>

<style scoped>
.fund_company .updateTime{
  text-align: right;
  font-size: 0.8rem;
  line-height: 1.6rem;
}
.fund_company .btnGroups{
  background-color: white;
  padding: 0.5rem 0;
}
.fund_company .btnGroups .el-button{
  color: #303133;
}
.fund_company .companyName{
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 1rem;
}
.fund_company .companyName .title{
  font-size: 1.2rem;
  margin-right: 1rem;
}
.fund_company .companyName .rate{
  display: inline-block;
  margin-left: 0.5rem;
}
.fund_company .panels{
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
}
.fund_company .panels .panelItems{
  background-color: white;
  width: 10vw;
  padding-top: 1rem;
  padding-bottom: 0.5rem;
}
.fund_company .panels .panelItems:not(:last-child){
  margin-right: 1rem;
}
.fund_company .panels .panelItems .panelName{
  font-size: 1rem;
}
.fund_company .panels .panelItems .panelContent{
  font-size: 1.8rem;
  line-height: 3rem;
}
.fund_company .fundManager, .fund_company .fundProduct{
  padding: 1rem;
  background-color: white;
  margin-bottom: 1rem;
}
.fund_company .fundManager .el-collapse, .fund_company .fundProduct .el-collapse{
  border: none;
}
/*.fund_company .fundManager /deep/ .el-collapse-item__wrap{*/
/*  border: none;*/
/*}*/
.fund_company .fundManager .title, .fund_company .fundProduct .title{
  font-size: 1rem;
  margin-right: 1rem;
}
.fund_company .fundManager .input, .fund_company .fundProduct .input{
  width: 10vw;
  margin-left: auto;
  order: 3;
}
/deep/ .el-collapse-item__arrow{
  margin-left: 0;
}
/*表格相关*/
/*表头*/
/deep/ .el-table th.el-table__cell{
  background-color: #F2F6FC;
}
/deep/ .el-table__body tr.hover-row.current-row>td.el-table__cell,
/deep/ .el-table__body tr.hover-row.el-table__row--striped.current-row>td.el-table__cell,
/deep/ .el-table__body tr.hover-row.el-table__row--striped>td.el-table__cell,
/deep/ .el-table__body tr.hover-row>td.el-table__cell{
  background-color: #F2F6FC;
}
/deep/ .el-table--striped .el-table__body tr.el-table__row--striped td.el-table__cell{
  background-color: #F2F6FC;
}
/*隐藏横向滚动条*/
.fund_company /deep/ .el-scrollbar .el-scrollbar__wrap {
  overflow-x: hidden;
}
.fund_company .fundManager .expandTitle{
  font-size: 1rem;
  font-weight: 700;
}
.fund_company .fundManager .personalInfo{
  margin-bottom: 1rem;
}
/*左右按钮*/
.fund_company .backBtn{
  position: fixed;
  top: 45vh;
  left: 1rem;
  font-size: 1.5rem;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
.fund_company .forwardBtn{
  position: fixed;
  top: 45vh;
  right: 1rem;
  font-size: 1.5rem;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 10%);
}
</style>
