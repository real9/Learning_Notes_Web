<template>
  <el-row>
    <el-col>
<!--      <el-row style="margin-bottom: 1rem">-->
        <el-col :span="12">
          <el-col style="text-align: left;margin-bottom: 10px">
            <label style="margin-right: 10px">数据集选择</label>
<!--            <el-select></el-select>-->
          </el-col>
          <el-col style="text-align: left;margin-bottom: 10px">
            <label style="margin-right: 10px">模型选择</label>
<!--            <el-select></el-select>-->
          </el-col>
          <el-col :span="2"><span style="line-height: 40px">训练集</span></el-col>
          <el-col :span="12">
            <el-slider v-model="value2"></el-slider>
          </el-col>
          <el-col :span="2"><span style="line-height: 40px">测试集</span></el-col>
          <el-col :span="8">
            <el-button type="primary">保存</el-button>
          </el-col>
        </el-col>
        <el-col :span="12">
          <pie-chart ref="pie"></pie-chart>
        </el-col>
<!--      </el-row>-->
<!--      <el-row>-->
<!--        <el-col>-->
<!--          <el-table :header-cell-style="headerClass">-->
<!--            <el-table-column label="数据集选择"></el-table-column>-->
<!--            <el-table-column label="模型选择"></el-table-column>-->
<!--            <el-table-column label="操作"></el-table-column>-->
<!--          </el-table>-->
<!--        </el-col>-->
<!--      </el-row>-->
    </el-col>
    <el-col>
      <el-row>
        <el-col>
          <el-table :header-cell-style="headerClass" :data="tableData">
            <el-table-column label="数据集选择" prop="dataSet" align="center"></el-table-column>
            <el-table-column label="模型选择" prop="model" align="center"></el-table-column>
            <el-table-column label="日志占比" prop="logPercent" align="center"></el-table-column>
            <el-table-column label="预处理" prop="preOperation" align="center"></el-table-column>
<!--            <el-table-column label="F1 分数"></el-table-column>-->
            <el-table-column label="训练时间" prop="operationTime" align="center"></el-table-column>
            <el-table-column label="操作"></el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-col>
    <el-dialog :title="title" :visible.sync="visibility" width="750px"></el-dialog>
  </el-row>
</template>

<script>
import PieChart from "@/components/Chart/PieChart";

export default {
  name: "ModelTraining",
  components: {
    PieChart,
  },
  data() {
    return {
      value2: 40,
      visibility: false,
      title: '',
      tableData: [
        {
          dataSet: '数据集1',
          model: '模型2',
          logPercent: '30%',
          preOperation: '有预处理',
          operationTime: '0.1s',
        },
        {
          dataSet: '数据集2',
          model: '模型1',
          logPercent: '30%',
          preOperation: '有预处理',
          operationTime: '0.1s',
        },
        {
          dataSet: '数据集3',
          model: '模型3',
          logPercent: '30%',
          preOperation: '有预处理',
          operationTime: '0.09s',
        },
      ],
    }
  },
  mounted() {
    let that = this;
    this.$refs.pie.myChart.on('click', function (p){
      // console.log(p.name);
      that.title = p.name;
      that.visibility = true;
      // console.log(p.name);
      // console.log(this.visibility);
    })
  },
  methods: {
    //表头样式
    headerClass() {
      return 'background: #EBEEF5; text-align: center'
    },
  },
  // watch: {
  //   visibility: function (val){
  //     console.log(val);
  //   }
  // },
}
</script>

<style scoped>

</style>
