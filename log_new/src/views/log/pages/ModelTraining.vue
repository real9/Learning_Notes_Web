<template>
  <div class="container-fluid">
    <div class="row d-flex flex-shrink-1">
      <div class="col-6">
        <div class="card shadow-lg h-100">
          <div class="card-header">
            <div class="row">
              <div class="col-6">
                <h5 class="mb-0">参数配置</h5>
              </div>
              <div class="col-6 text-end">
                <ArgonButton color="primary" variant="gradient" size="sm" @click="addModelAndDataset">保存</ArgonButton>
              </div>
            </div>
          </div>
          <div class="card-body">
            <div class="row">
              <div class="col-auto">请选择数据集</div>
              <div class="col-auto">
                <div class="row">
                  <div class="col-6">
                    <ArgonRadio id="bgl" name="bgl" :checked="logType === 'bgl'"
                                @click="getParsedLog('bgl')"
                    >BGL
                    </ArgonRadio>
                  </div>
                  <div class="col-6">
                    <ArgonRadio id="bgl" name="bgl" :checked="logType === 'hdfs'"
                                @click="getParsedLog('hdfs')"
                    >HDFS
                    </ArgonRadio>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-auto">请选择模型</div>
              <div class="col-auto">
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
            </div>
            <div class="row">
              <div class="col-2">训练集</div>
              <div class="col-8">
                <el-slider v-model="percentBar"/>
              </div>
              <div class="col-2">测试集</div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-6">
        <div class="card shadow-lg">
          <div class="card-header pb-1">
            <h5 class="mb-0">数据集占比展示</h5>
          </div>
          <div class="card-body py-0">
            <PieChart ref="pie" :train-dataset-num="percentBar" :test-dataset-num="100 - percentBar"></PieChart>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-12">
        <div class="card shadow-lg">
          <div class="card-header pb-2">
            <h5 class="mb-0">训练结果</h5>
          </div>
          <div class="card-body pt-0">
            <el-table style="width: 100%" :header-cell-style="headerClass" :data="tableData" height="249">
              <el-table-column label="数据集选择" prop="dataSet" align="center"></el-table-column>
              <el-table-column label="模型选择" prop="model" align="center"></el-table-column>
              <el-table-column label="训练日志占比" prop="logPercent" align="center"></el-table-column>
              <el-table-column label="预处理" prop="preOperation" align="center"></el-table-column>
              <el-table-column label="训练时间" prop="operationTime" align="center"></el-table-column>
              <el-table-column label="操作" align="center">
                <template #default="scope">
                  <el-button @click="getProcessTime(scope.$index)" link type="primary">开始运行</el-button>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
  <el-dialog :title="title" v-model="visibility" width="750px" style="border-radius: 1rem">
    <el-table :header-cell-style="headerClass" class="table" :data="dialogData">
      <el-table-column label="时间戳" prop="timeStamp" align="center"></el-table-column>
      <el-table-column label="状态" prop="state" align="center"></el-table-column>
      <el-table-column label="等级" prop="level" align="center"></el-table-column>
      <el-table-column label="内容" prop="content"></el-table-column>
      <el-table-column label="事件模板" prop="event_template"></el-table-column>
    </el-table>
  </el-dialog>
</template>

<script>
import ArgonButton from "../../../components/ArgonButton";
import ArgonRadio from "../../../components/ArgonRadio";
import PieChart from "../chats/PieChart.vue";

export default {
  name: "ModelTraining",
  components: {
    ArgonButton,
    ArgonRadio,
    PieChart,
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
      percentBar: 40,
      headerClass: {
        'background': '#f5f7fa',
        'text-align': 'center',
      },
      tableData: [],
    //  弹窗
      title: '',
      visibility: false,
      dialogData: [],
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
    getParsedLog(val) {
      this.logType = val;
    },
    getModelChecked(val) {
      this.modelType = val;
      console.log(this.modelType);
    },
    addModelAndDataset() {
      this.tableData.push({
        dataSet: this.logType,
        model: this.modelType,
        logPercent: this.percentBar + '%',
        preOperation: '有日志预解析',
        operationTime: '',
      });
      // this.$refs.pie.trainDatasetNum = this.percentBar;
      // this.$refs.pie.testDatasetNum = 100 - this.percentBar;
    },
    getProcessTime(index) {
      this.tableData[index].operationTime = '0.9s';
    }
  }
}
</script>

<style scoped>

</style>
