<template>
<el-row class="fund_product">
  <el-col :span="20" :offset="2" class="updateTime">数据更新时间：2021-11-22</el-col>
  <el-col :span="20" :offset="2" class="filterGroup">
    <span>基金分类：</span>
<!--    <el-button v-for="item in buttons" :key="item.index" size="mini" :autofocus="item.index === 'all'">{{item.title}}</el-button>-->
    <el-button v-for="item in buttons" :key="item.index" size="mini" >{{item.title}}</el-button>
    <el-input
        placeholder="请输入搜索内容"
        suffix-icon="el-icon-search"
        v-model="input"
        size="mini">
    </el-input>
  </el-col>
  <keep-alive>
    <component :is="this.$store.state.componentName"></component>
  </keep-alive>
</el-row>
</template>

<script>
import fundTable from './fundProduct/FundTable'
import fundChart from './fundProduct/FundChart'
export default {
  name: "FundProduct",
  components:{
    fundTable,
    fundChart
  },
  computed:{
  },
  data(){
    return{
      buttons: [
        {
          title: '全部基金',
          index: 'all',
        },
        {
          title: '股票基金',
          index: 'equity',
        },
        {
          title: '债券基金',
          index: 'bond',
        },
        {
          title: '混合基金',
          index: 'mix',
        },
        {
          title: '股票指数基金',
          index: 'stockIndex',
        },
        {
          title: '债券指数基金',
          index: 'bondIndex',
        },
        {
          title: '货币基金',
          index: 'monetary',
        },
        {
          title: '境外基金',
          index: 'abroad',
        },
        {
          title: '其他基金',
          index: 'other',
        },
        {
          title: '香港互认基金',
          index: 'hk',
        },
      ],
      input: '',
      // autoFocus: 'all',
      // componentName: 'fundTable',
    }
  },
  created() {
    console.log(this.$route);
  }
}
</script>

<style scoped>
.fund_product .updateTime{
  text-align: right;
  font-size: 0.8rem;
  line-height: 1.6rem;
}
.fund_product .filterGroup{
  background-color: white;
  padding: 1rem 0;
}
.fund_product .filterGroup .el-button:focus,
.fund_product .filterGroup .el-button:hover{
  color: white;
  background-color: #409EFF;
  border-color: #409EFF;
}
.fund_product .filterGroup .el-input{
  width: 10%;
  margin-left: 10px;
}
/*.fund_product .tableBoard{*/
/*  background-color: white;*/
/*  margin-top: 5px;*/
/*  padding: 1rem 3rem;*/
/*}*/
</style>
