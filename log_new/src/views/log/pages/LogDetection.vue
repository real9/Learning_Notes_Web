<template>
  <div class="container-fluid">
    <div class="row d-flex flex-shrink-1">
      <div class="col-8 h-100">
        <div class="col-12 h-100">
          <div class="card shadow-lg">
            <div class="card-header">
              <h5 class="mb-0">添加模型和数据集</h5>
            </div>
            <div class="card-body pt-0">
              <div class="row">
                <div class="col-auto">选择测试集</div>
                <div class="col-auto me-4">
                  <div class="row">
                    <div class="col-6">
                      <ArgonRadio id="bgl" name="bgl" :checked="logType === 'bgl'"
                                  @click="getParsedLog('bgl')"
                      >BGL</ArgonRadio>
                    </div>
                    <div class="col-6">
                      <ArgonRadio id="hdfs" name="hdfs" :checked="logType === 'hdfs'"
                                  @click="getParsedLog('hdfs')"
                      >BGL</ArgonRadio>
                    </div>
                  </div>
                </div>
                <div class="col-auto">模型选择</div>
                <div class="col-auto me-4">
                  <div class="row">
                    <div class="col-4">
                      <ArgonRadio :id="modelList[0].label" :name="modelList[0].label"
                                  @click="modelType = modelList[0].label"
                                  :checked="modelType === modelList[0].label">
                        {{modelList[0].label}}
                      </ArgonRadio>
                    </div>
                    <div class="col-4">
                      <ArgonRadio :id="modelList[1].label" :name="modelList[1].label"
                                  @click="modelType = modelList[1].label"
                                  :checked="modelType === modelList[1].label">
                        {{modelList[1].label}}
                      </ArgonRadio>
                    </div>
                    <div class="col-4">
                      <ArgonRadio :id="modelList[2].label" :name="modelList[2].label"
                                  @click="modelType = modelList[2].label"
                                  :checked="modelType === modelList[2].label">
                        {{modelList[2].label}}
                      </ArgonRadio>
                    </div>
                  </div>
                </div>
                <div class="col-auto">
                  <ArgonButton variant="gradient" color="primary" size="sm"
                               @click="addModelAndDataset">添加</ArgonButton>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 mt-2 h-100">
          <div class="card shadow-lg">
            <div class="card-header">
              <h5 class="mb-0">测试对比表格</h5>
            </div>
            <div class="card-body pt-0">
              <el-table :data="tableData" :header-cell-style="headerClass" style="width: 100%">
                <el-table-column label="模型名称" prop="model" align="center"></el-table-column>
                <el-table-column label="训练集" prop="dataset" align="center"></el-table-column>
                <el-table-column label="操作" align="center">
                  <template #default="scope">
                    <el-button link type="primary"
                               @click="getTestDatasetResult(scope.row.model, scope.row.dataset)">开始测试</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-4 h-100">
        <div class="card shadow-lg">
          <div class="card-header">
            <h5 class="mb-0">维度对比</h5>
          </div>
          <div class="card-body py-0">
            <RadarChart></RadarChart>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12">
        <div class="card shadow-lg">
          <div class="card-header">
            <h5 class="mb-0">日志异常检测 (变分自编码机)</h5>
          </div>
          <div class="card-body pt-0"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArgonRadio from "../../../components/ArgonRadio";
import ArgonButton from "../../../components/ArgonButton";
import RadarChart from "../chats/RadarChart.vue"
export default {
  name: "LogDetection",
  components: {
    RadarChart,
    ArgonRadio,
    ArgonButton,
  },
  data() {
    return {
      logType: '',
      modelType: '',
      modelList: [
        {label: 'VLog'},
        {label: 'deepLog'},
        {label: 'LogGAN'},
      ],
      headerClass: {
        'background': '#f5f7fa',
        'text-align': 'center',
      },
      tableData: [],
    }
  },
  methods: {
    getParsedLog(val) {
      this.logType = val;
    },
    addModelAndDataset() {
      this.tableData.push({
        model: this.modelType,
        dataset: this.logType
      })
    },
    getTestDatasetResult(model, dataset){
      console.log(model, dataset);
      // let option = this.$refs.radar.myChart.getOption();
      // option.series[0].data.push({
      //   value: [
      //     Math.floor(Math.random() * 10 + 85),
      //     Math.floor(Math.random() * 10 + 85),
      //     Math.floor(Math.random() * 10 + 85)],
      //   name: model
      // })
      // this.$refs.radar.myChart.setOption(option);
    }
  }
}
</script>

<style scoped>

</style>
