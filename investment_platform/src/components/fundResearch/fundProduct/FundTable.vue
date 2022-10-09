<template>
<el-row>
  <el-col :span="20" :offset="2" class="tableBoard">
    <el-scrollbar>
      <el-table :data="tableData" stripe style="width: 100%" :header-row-style="tableHead" :cell-style="getCellStyle">
        <el-table-column type="selection" width="50"></el-table-column>
        <el-table-column prop="code" label="基金代码" sortable width="100"></el-table-column>
        <el-table-column prop="id" label="登记编号" sortable width="200"></el-table-column>
        <el-table-column prop="rank" label="综合评级" sortable width="200">
          <template slot-scope="scope">
            <el-rate
                v-model="scope.row.rank"
                disabled
                text-color="#ff9900">
            </el-rate>
          </template>
        </el-table-column>
        <el-table-column prop="type" label="资产类型" sortable width="100"></el-table-column>
        <el-table-column prop="manager" label="基金经理" sortable width="100"></el-table-column>
        <el-table-column prop="date" label="成立日期" sortable width="100"></el-table-column>
        <el-table-column prop="company" label="基金公司" sortable width="100"></el-table-column>
        <el-table-column prop="risk" label="风险等级" sortable width="100"></el-table-column>
        <el-table-column prop="tag" label="基金标签" sortable width="100"></el-table-column>
        <el-table-column prop="range" label="日跌涨幅" sortable width="100"></el-table-column>
        <el-table-column prop="week" label="近一周" sortable width="100"></el-table-column>
        <el-table-column prop="month" label="近一月" sortable width="100"></el-table-column>
        <el-table-column prop="sixMonths" label="近半年" sortable width="100"></el-table-column>
        <el-table-column prop="year" label="近一年" sortable width="100"></el-table-column>
        <el-table-column prop="threeYears" label="近三年" sortable width="100"></el-table-column>
      </el-table>
    </el-scrollbar>
    <el-pagination
        layout="total, prev, pager, next, jumper, sizes"
        :total="400"
    >
    </el-pagination>
  </el-col>
<!--  <el-col :span="2">-->
    <el-button type="primary" class="exchangeBtn" @click="goToFundComparison">
      <el-icon class="el-icon-sort exchange"></el-icon>
      基金比较
    </el-button>
<!--  </el-col>-->
</el-row>
</template>

<script>
export default {
  name: "FundTable",
  data() {
    return{
      tableData: [
        {
          code: '000729',
          id: '建信中小盘先锋股票',
          rank: 5,
          type: '股票基金',
          manager: '邵卓',
          date: '2014-08-20',
          company: '建信基金',
          risk: '高',
          tag: '材料行业',
          range: '1.45%',
          week: '4.52%',
          month: '13.07%',
          sixMonths: '20%',
          year: '30%',
          threeYears: '40%',
        },
        {
          code: '000729',
          id: '建信中小盘先锋股票',
          rank: 5,
          type: '股票基金',
          manager: '邵卓',
          date: '2014-08-20',
          company: '建信基金',
          risk: '高',
          tag: '材料行业',
          range: '1.45%',
          week: '4.52%',
          month: '13.07%',
          sixMonths: '20%',
          year: '30%',
          threeYears: '40%',
        },
        {
          code: '000729',
          id: '建信中小盘先锋股票',
          rank: 5,
          type: '股票基金',
          manager: '邵卓',
          date: '2014-08-20',
          company: '建信基金',
          risk: '高',
          tag: '材料行业',
          range: '1.45%',
          week: '4.52%',
          month: '13.07%',
          sixMonths: '20%',
          year: '30%',
          threeYears: '40%',
        },
        {
          code: '000729',
          id: '建信中小盘先锋股票',
          rank: 5,
          type: '股票基金',
          manager: '邵卓',
          date: '2014-08-20',
          company: '建信基金',
          risk: '高',
          tag: '材料行业',
          range: '1.45%',
          week: '4.52%',
          month: '13.07%',
          sixMonths: '20%',
          year: '30%',
          threeYears: '40%',
        },
        {
          code: '000729',
          id: '建信中小盘先锋股票',
          rank: 5,
          type: '股票基金',
          manager: '邵卓',
          date: '2014-08-20',
          company: '建信基金',
          risk: '高',
          tag: '材料行业',
          range: '1.45%',
          week: '4.52%',
          month: '13.07%',
          sixMonths: '20%',
          year: '30%',
          threeYears: '40%',
        },
        {
          code: '000729',
          id: '建信中小盘先锋股票',
          rank: 5,
          type: '股票基金',
          manager: '邵卓',
          date: '2014-08-20',
          company: '建信基金',
          risk: '高',
          tag: '材料行业',
          range: '1.45%',
          week: '4.52%',
          month: '13.07%',
          sixMonths: '20%',
          year: '30%',
          threeYears: '40%',
        },
        {
          code: '000729',
          id: '建信中小盘先锋股票',
          rank: 5,
          type: '股票基金',
          manager: '邵卓',
          date: '2014-08-20',
          company: '建信基金',
          risk: '高',
          tag: '材料行业',
          range: '1.45%',
          week: '4.52%',
          month: '13.07%',
          sixMonths: '20%',
          year: '30%',
          threeYears: '40%',
        },
        {
          code: '1',
          id: '1',
          rank: 5,
          type: '1',
          manager: '1',
          date: '1',
          company: '1',
          risk: '1',
          tag: '1',
          range: '1',
          week: '1',
          month: '1',
          sixMonths: '1',
          year: '1',
          threeYears: '1',
        },
        {
          code: '000729',
          id: '建信中小盘先锋股票',
          rank: 5,
          type: '股票基金',
          manager: '邵卓',
          date: '2014-08-20',
          company: '建信基金',
          risk: '高',
          tag: '材料行业',
          range: '1.45%',
          week: '4.52%',
          month: '13.07%',
          sixMonths: '20%',
          year: '30%',
          threeYears: '40%',
        },
        {
          code: '000729',
          id: '建信中小盘先锋股票',
          rank: 5,
          type: '股票基金',
          manager: '邵卓',
          date: '2014-08-20',
          company: '建信基金',
          risk: '高',
          tag: '材料行业',
          range: '1.45%',
          week: '4.52%',
          month: '13.07%',
          sixMonths: '20%',
          year: '30%',
          threeYears: '40%',
        },
      ],
      tableHead: {
        'color': '#606266',
        'font-weight': 300,
      }
    }
  },
  methods:{
    getCellStyle({columnIndex}){
      if(columnIndex === 1 || columnIndex === 2 || columnIndex === 5 || columnIndex === 7){
        return 'color: #409EFF';
      }else if(columnIndex > 9){
        return 'color: red'
      }
    },
    goToFundComparison() {
      this.$store.commit('goToFundComparison');
    }
  }
}
</script>

<style scoped>
.tableBoard{
  background-color: white;
  margin-top: 5px;
  padding: 1rem 3rem;
}
.tableBoard /deep/ .el-table th.el-table__cell{
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
.el-pagination{
  margin-top: 1rem;
  padding: unset;
}
/deep/ .el-pagination .el-pagination__total{
  float: left;
}
/deep/ .el-pagination__sizes{
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
.exchangeBtn{
  position: fixed;
  top: 50vh;
  right: 1rem;
}
.exchange{
  font-size: 1.5rem;
  display: block;
  transform: rotate(90deg);
  margin-bottom: 0.5rem;
}
/*横向滚动条*/
.tableBoard /deep/ .el-scrollbar .el-scrollbar__wrap .el-scrollbar__view{
  white-space: nowrap;
  display: inline-block;
}
</style>
