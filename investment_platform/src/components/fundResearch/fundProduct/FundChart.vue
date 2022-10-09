<template>
  <el-row >
    <el-col :span="6" :offset="2" class="generalTable">
      <el-table :data="generalData" :header-row-style="tableHead" stripe :cell-style="cellStyle">
        <el-table-column type="selection"></el-table-column>
        <el-table-column prop="code" label="基金代码" sortable width="100" align="left"></el-table-column>
        <el-table-column prop="id" label="登记编号" sortable align="center"></el-table-column>
      </el-table>
      <el-pagination layout="prev, next, jumper">
      </el-pagination>
    </el-col>
    <el-col :span="2" class="">
      <el-button type="primary" class="exchangeBtn" @click="goBack">
        <el-icon class="el-icon-sort exchange"></el-icon>
        返回
      </el-button>
    </el-col>
    <el-col :span="12" class="detailBoard">
      <el-col class="btns">
        <el-button v-for="item in buttons" :key="item.index" size="mini" >{{item.title}}</el-button>
      </el-col>
      <el-col class="detailTable" >
        <el-scrollbar >
          <el-table :data="detailData" :header-row-style="tableHead" stripe style="width: 100%">
            <el-table-column sortable prop="code" label="基金代码" width="100"></el-table-column>
            <el-table-column sortable prop="name" label="基金名称" width="100" show-overflow-tooltip align="center"></el-table-column>
            <el-table-column sortable prop="manager" label="基金经理" width="100" align="center"></el-table-column>
            <el-table-column sortable prop="productRank" label="产品综合评级" width="140" align="center">
              <template slot-scope="scope">
                <el-rate
                    v-model="scope.row.productRank"
                    disabled
                    text-color="#ff9900">
                </el-rate>
              </template>
            </el-table-column>
            <el-table-column sortable prop="managerRank" label="基金经理评级" width="140" align="center">
              <template slot-scope="scope">
                <el-rate
                    v-model="scope.row.managerRank"
                    disabled
                    text-color="#ff9900">
                </el-rate>
              </template>
            </el-table-column>
            <el-table-column sortable prop="companyRank" label="基金公司评级" width="140" align="center">
              <template slot-scope="scope">
                <el-rate
                    v-model="scope.row.companyRank"
                    disabled
                    text-color="#ff9900">
                </el-rate>
              </template>
            </el-table-column>
            <el-table-column sortable prop="profit" label="收益率" width="100" align="center"></el-table-column>
            <el-table-column sortable prop="volatility" label="波动率" width="100" align="center"></el-table-column>
            <el-table-column sortable prop="sharpe" label="夏普比率" width="100" align="center"></el-table-column>
            <el-table-column sortable prop="maxRollback" label="最大回撤" width="100" align="center"></el-table-column>
          </el-table>
        </el-scrollbar>
      </el-col>
      <el-col class="chartBoard">
        <div class="head">
          <div style="display: inline-block;float: left" class="chartName">
            <el-icon class="el-icon-edit"></el-icon>
            <span> 基金收益率对比</span>
          </div>
          <div class="operation">
            <el-button type="text" ><el-icon class="el-icon-zoom-in"></el-icon></el-button>
            <el-button type="text" ><el-icon class="el-icon-zoom-out"></el-icon></el-button>
            <el-button type="text" ><el-icon class="el-icon-refresh"></el-icon></el-button>
            <el-button type="text" ><el-icon class="el-icon-download"></el-icon></el-button>
          </div>
        </div>
        <div id="lineChart"></div>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "FundChart",
  data(){
    return {
      generalData: [
        {
          code: '000729',
          id: '建信中小盘先锋股票',
        },
        {
          code: '000729',
          id: '建信中小盘先锋股票',
        },
        {
          code: '000729',
          id: '建信中小盘先锋股票',
        },
        {
          code: '000729',
          id: '建信中小盘先锋股票',
        },
        {
          code: '000729',
          id: '建信中小盘先锋股票',
        },
        {
          code: '000729',
          id: '建信中小盘先锋股票',
        },
        {
          code: '000729',
          id: '建信中小盘先锋股票',
        },
        {
          code: '000729',
          id: '建信中小盘先锋股票',
        },
        {
          code: '000729',
          id: '建信中小盘先锋股票',
        },
        {
          code: '000729',
          id: '建信中小盘先锋股票',
        },
        {
          code: '000729',
          id: '建信中小盘先锋股票',
        },
        {
          code: '000729',
          id: '建信中小盘先锋股票',
        },
      ],
      tableHead: {
        'color': '#606266',
        'font-weight': 300,
        'background-color': '#F2F6FC',
      },
      cellStyle: {
        'color': '#409EFF',
      },
      buttons: [
        {
          title: '近1个月',
          index: '1',
        },
        {
          title: '近3个月',
          index: '3',
        },
        {
          title: '近6个月',
          index: '6',
        },
        {
          title: '近1年',
          index: '12',
        },
      ],
      detailData: [
        {
          code: '000524',
          name: '上投摩根民生基金',
          manager: '杨景喻',
          productRank: 5,
          managerRank: 5,
          companyRank: 5,
          profit: '0%',
          volatility: '0%',
          sharpe: '0',
          maxRollback: '0%',
        },
        {
          code: '000524',
          name: '上投摩根民生基金',
          manager: '杨景喻',
          productRank: 5,
          managerRank: 5,
          companyRank: 5,
          profit: '0%',
          volatility: '0%',
          sharpe: '0',
          maxRollback: '0%',
        },
      ]
    }
  },
  mounted() {
    this.initLineChart();
  },
  methods: {
    initLineChart(){
      let myChart = this.$echarts.init(document.getElementById('lineChart'), null, {
        width:500,
        height: 400
      });
      let options;
      options = {
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
          axisLabel: {
            interval: 5,
            color: '#909399'
          },
          axisTick: {
            show: false,
          },
          axisLine: {
            lineStyle: {
              color: '#DCDFE6',
            }
          }
        },
        yAxis: {
          type: 'value',
          axisLine: {
            show: true,
            lineStyle: {
              color: '#DCDFE6',
            }
          },
          axisLabel: {
            color: '#909399',
          },
          splitLine: {
            lineStyle: {
              color: '#DCDFE6',
            }
        },
        },
        legend: {
          data: ['行业涨跌幅（%）', '业绩基准（%）（沪深300）'],
          left: 10,
        },
        series: [
          {
            name: '行业涨跌幅（%）',
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: 'line',
            smooth: true,
            symbol: 'none',
            color: 'pink',
          },
          {
            name: '业绩基准（%）（沪深300）',
            data: [520, 952, 931, 634, 1190, 1530, 320],
            type: 'line',
            smooth: true,
            showSymbol: false,
            symbol: 'none',
            color: '#409EFF',
          },
        ]
      };
      myChart.setOption(options);
    },
    goBack(){
      this.$store.commit('goBack');
    }
  }
}
</script>

<style scoped>
.generalTable{
  background-color: white;
  margin-top: 5px;
  padding: 1rem 2rem;
}
.generalTable /deep/ .el-table th.el-table__cell{
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
.exchangeBtn{
  margin-top: 30vh;
  width: 4rem;
}
.exchangeBtn .exchange{
  font-size: 1.5rem;
  display: block;
  transform: rotate(90deg);
  margin-bottom: 0.5rem;
}
.detailBoard{
  margin-top: 5px;
}
.detailBoard .btns{
  padding: 0.5rem;
}
.detailBoard .detailTable{
  padding: 1rem 2rem;
  background-color: white;
}
.detailBoard .chartBoard{
  background-color: white;
  margin-top: 5px;
  padding: 1rem 2rem;
}
.detailBoard .chartBoard .head .chartName{
  font-size: 1.2rem;
  float: left;
}
.detailBoard .chartBoard .head .chartName i{
  color: #409EFF;
}
.detailBoard .chartBoard .head .operation{
  display: inline-block;
  float: right;
}
.detailBoard .chartBoard .head .operation .el-button{
  padding: unset;
  font-size: 1.5rem;
}
.detailBoard .chartBoard #lineChart{
  margin-top: 2rem;
}
/*分页*/
.el-pagination{
  margin-top: 1rem;
  padding: unset;
}
.el-pagination /deep/ .btn-prev{
  float: left;
}
.el-pagination /deep/ .el-pagination__jump{
  float: right;
}
/deep/ .el-pagination button, /deep/ .el-pager li{
  border: 1px solid #DCDFE6;
  border-radius: 4px;
  margin-right: 4px;
  margin-left: 4px;
}
/deep/ .el-pager li.active, /deep/ .el-pager li:hover,
/deep/ .el-pager li.active+li:hover,
/deep/ .el-pagination button:hover{
  border: 1px solid #409EFF;
}
/deep/ .el-pager li.active+li{
  border-left: 1px solid #DCDFE6;
}
/*table的横向滚动条*/
.detailBoard .detailTable /deep/ .el-scrollbar .el-scrollbar__wrap .el-scrollbar__view{
  white-space: nowrap;
  display: inline-block;
}
</style>
