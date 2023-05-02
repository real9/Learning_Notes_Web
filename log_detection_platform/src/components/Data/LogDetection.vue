<template>
  <el-row>
    <el-col :span="24">
      <el-row>
        <el-col :span="12">
          <el-col :span="10">
            <el-select v-model="datasetSelector" placeholder="请导入测试集">
              <el-option
                  v-for="item in options"
                  :key="item.label"
                  :label="item.label"
                  :value="item.label">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="10">
            <el-select v-model="modelSelector" placeholder="请选择模型">
              <el-option
                  v-for="item in modelList"
                  :key="item.label"
                  :label="item.label"
                  :value="item.label">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="4">
            <el-button @click="addModelAndDataset">添加</el-button>
          </el-col>
          <el-col style="margin-top: 1rem">
            <el-table :header-cell-style="headerClass" :data="tableData">
              <el-table-column label="模型名称" prop="model" align="center"></el-table-column>
              <el-table-column label="训练集" prop="dataset" align="center"></el-table-column>
              <el-table-column label="操作" align="center">
                <template slot-scope="scope">
                  <el-button type="text" @click="getTestDatasetResult(scope.row.model, scope.row.dataset)">开始测试</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-col>
        </el-col>
        <el-col :span="12">
          <radar-chart ref="radar"></radar-chart>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="24">
      <line-chart></line-chart>
    </el-col>
  </el-row>
</template>

<script>
import RadarChart from "@/components/Chart/RadarChart";
import LineChart from "@/components/Chart/LineChart";

export default {
  name: "LogDetection",
  components: {
    RadarChart,
    LineChart,
  },
  data() {
    return {
      options: [{
        label: 'BGL'
      }, {
        label: 'HDFS'
      }],
      datasetSelector: '',
      modelSelector: '',
      modelList: [
        {label: 'VLog'},
        {label: 'deepLog'},
        {label: 'LogGAN'},
      ],
      tableData: [],
    }
  },
  methods: {
    //表头样式
    headerClass() {
      return 'background: #EBEEF5; text-align: center'
    },
    addModelAndDataset() {
      this.tableData.push({
        model: this.modelSelector,
        dataset: this.datasetSelector
      })
    },
    getTestDatasetResult(model, dataset){
      console.log(model, dataset);
      let option = this.$refs.radar.myChart.getOption();
      option.series[0].data.push({
        value: [
          Math.floor(Math.random() * 10 + 85),
          Math.floor(Math.random() * 10 + 85),
          Math.floor(Math.random() * 10 + 85)],
        name: model
      })
      this.$refs.radar.myChart.setOption(option);
    }
  }
}
</script>

<style scoped>

</style>
