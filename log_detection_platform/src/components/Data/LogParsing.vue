<template>
  <el-row>
    <el-col :span="24">
      <el-row>
        <el-col>
          <el-row type="flex" justify="start">
            <el-col :span="11">
              <label style="margin-right: 1rem">请选择要解析的数据集</label>
              <el-select v-model="datasetType" placeholder="请选择数据集" @change="getInitialLog">
                <el-option
                    v-for="item in options"
                    :key="item.label"
                    :label="item.label"
                    :value="item.label">
                </el-option>
              </el-select>
            </el-col>
          </el-row>
        </el-col>
        <el-col>
          <el-table :header-cell-style="headerClass" class="table" :data="initialLog">
            <el-table-column label="日志" prop="log"></el-table-column>
          </el-table>
        </el-col>
        <el-col style="margin-top: 1rem">
          <el-button @click="getParsedLog">解析</el-button>
        </el-col>
        <el-col>
          <el-table :header-cell-style="headerClass" class="table" :data="parsedLog">
            <el-table-column label="时间戳" prop="timeStamp" align="center"></el-table-column>
            <el-table-column label="状态" prop="state" align="center"></el-table-column>
            <el-table-column label="等级" prop="level" align="center"></el-table-column>
            <el-table-column label="内容" prop="content"></el-table-column>
            <el-table-column label="事件模板" prop="event_template"></el-table-column>
          </el-table>
        </el-col>
        <el-col style="margin-top: 1rem">
          <el-button>保存</el-button>
        </el-col>
      </el-row>
    </el-col>
<!--    <el-col :span="8">-->
<!--      <bar-chart></bar-chart>-->
<!--    </el-col>-->
  </el-row>
</template>

<script>
// import BarChart from "@/components/Chart/BarChart";

export default {
  name: "LogParsing",
  components: {
    // BarChart,
  },
  data() {
    return {
      options: [{
        label: 'BGL'
      }, {
        label: 'HDFS'
      }],
      datasetType: '',
      initialLog: [],
      parsedLog: [],
    }
  },
  methods: {
    //表头样式
    headerClass() {
      return 'background: #EBEEF5; text-align: center'
    },
    getInitialLog() {
      console.log(this.datasetType);
      this.initialLog = [
        {
          log: '- 1117840660 2005.06.03 R26-M0-NC-I:J18-U11 2005-06-03-16.17.40.190183 R26-M0-NC-I:J18-U11 RAS APP FATAL ciod: Error loading /p/gb2/stella/RAPTOR/65641/raptor: invalid or missing program image, No such file or directory',
        },
        {
          log: '- 1118796304 2005.06.14 R22-M0-NA-C:J15-U11 2005-06-14-17.45.04.980096 R22-M0-NA-C:J15-U11 RAS KERNEL INFO generating core.348',
        },
        {
          log: '- 1118796305 2005.06.14 R22-M0-NB-C:J15-U11 2005-06-14-17.45.05.132111 R22-M0-NB-C:J15-U11 RAS KERNEL INFO generating core.344',
        },
        {
          log: '- 1118796270 2005.06.14 R16-M1-N2-C:J17-U01 2005-06-14-17.44.30.614539 R16-M1-N2-C:J17-U01 RAS KERNEL INFO CE sym 2, at 0x0b85ea80, mask 0x08',
        },
        {
          log: '- 1118796270 2005.06.14 R13-M0-NA-C:J14-U01 2005-06-14-17.44.30.794559 R13-M0-NA-C:J14-U01 RAS KERNEL INFO 1546250 L3 EDRAM error(s) (dcr 0x0157) detected and corrected',
        },
      ]
    },
    getParsedLog() {
      this.parsedLog = [
        {
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
        }
      ]
    }
  }
}
</script>

<style scoped>
.table {
  margin-top: 1rem;
}
</style>
