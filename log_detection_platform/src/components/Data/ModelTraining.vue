<template>
  <el-row>
    <el-col>
<!--      <el-row style="margin-bottom: 1rem">-->
        <el-col :span="12">
          <el-col style="text-align: left;margin-bottom: 10px">
            <label style="margin-right: 10px">数据集选择</label>
            <el-select v-model="datasetSelector" placeholder="请选择数据集" >
              <el-option
                  v-for="item in options"
                  :key="item.label"
                  :label="item.label"
                  :value="item.label">
              </el-option>
            </el-select>
          </el-col>
          <el-col style="text-align: left;margin-bottom: 10px">
            <label style="margin-right: 25px">模型选择</label>
            <el-select v-model="modelSelector" placeholder="请选择模型">
              <el-option
                  v-for="item in modelList"
                  :key="item.label"
                  :label="item.label"
                  :value="item.label">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="2"><span style="line-height: 40px">训练集</span></el-col>
          <el-col :span="12">
            <el-slider v-model="percentBar"></el-slider>
          </el-col>
          <el-col :span="2"><span style="line-height: 40px">测试集</span></el-col>
          <el-col :span="8">
            <el-button type="primary" @click="addModelAndDataset">保存</el-button>
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
            <el-table-column label="训练日志占比" prop="logPercent" align="center"></el-table-column>
            <el-table-column label="预处理" prop="preOperation" align="center"></el-table-column>
<!--            <el-table-column label="F1 分数"></el-table-column>-->
            <el-table-column label="训练时间" prop="operationTime" align="center"></el-table-column>
            <el-table-column label="操作" align="center">
              <template slot-scope="scope">
                <el-button type="text" @click="getProcessTime(scope.$index)">开始运行</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>
    </el-col>
    <el-dialog :title="title" :visible.sync="visibility" width="750px">
      <el-table :header-cell-style="headerClass" class="table" :data="dialogData">
        <el-table-column label="时间戳" prop="timeStamp" align="center"></el-table-column>
        <el-table-column label="状态" prop="state" align="center"></el-table-column>
        <el-table-column label="等级" prop="level" align="center"></el-table-column>
        <el-table-column label="内容" prop="content"></el-table-column>
        <el-table-column label="事件模板" prop="event_template"></el-table-column>
      </el-table>
    </el-dialog>
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
      options: [{
        label: 'BGL'
      }, {
        label: 'HDFS'
      }],
      modelList: [
        {label: 'VLog'},
        {label: 'LogClass'},
        {label: 'LogGAN'},
      ],
      percentBar: 40,
      visibility: false,
      title: '',
      tableData: [],
      datasetSelector: '',
      modelSelector: '',
      dialogData: [{
        timeStamp: '1117840660',
        state: 'normal',
        level: 'Error',
        content: 'ciod: Error loading /p/gb2/stella/RAPTOR/65641/raptor: invalid or missing program image, No such file or directory',
        event_template: 'ciod: failed to read message prefix on control stream (CioStream socket to *',
      },
        {
          timeStamp: '1118796304',
          state: 'normal',
          level: 'INFO',
          content: 'generating core.348',
          event_template: 'generating *',
        },
        {
          timeStamp: '1118796305',
          state: 'normal',
          level: 'INFO',
          content: 'generating core.348',
          event_template: 'generating *',
        },
        {
          timeStamp: '1118796270',
          state: 'normal',
          level: 'INFO',
          content: 'CE sym 2, at 0x0b85ea80, mask 0x08',
          event_template: '',
        },
        {
          timeStamp: '1118796270',
          state: 'normal',
          level: 'INFO',
          content: '1546250 L3 EDRAM error(s) (dcr 0x0157) detected and corrected',
          event_template: 'CE sym * at * mask *',
        }],
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
    addModelAndDataset() {
      this.tableData.push({
        dataSet: this.datasetSelector,
        model: this.modelSelector,
        logPercent: this.percentBar + '%',
        preOperation: '有日志预解析',
        operationTime: '',
      });
      this.$refs.pie.trainDatasetNum = this.percentBar;
      this.$refs.pie.testDatasetNum = 100 - this.percentBar;
    },
    getProcessTime(index) {
      this.tableData[index].operationTime = '0.9s';
    }
  },
}
</script>

<style scoped>

</style>
