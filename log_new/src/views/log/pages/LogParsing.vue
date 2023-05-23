<template>
  <div class="container-fluid">
    <div class="row d-flex flex-shrink-1">
      <div class="col-12">
        <div class="card shadow-lg">
          <div class="card-body py-3">
            <div class="row">
              <div class="col-auto">
                <h5 class="mb-0">请选择要解析的数据集</h5>
              </div>
              <div class="col-auto">
                <div class="row">
                  <div class="col-6 cursor-pointer">
                    <ArgonRadio id="bgl" name="bgl" :checked="logType === 'bgl'"
                                @click="getInitLog('bgl')"
                    >BGL
                    </ArgonRadio>
                  </div>
                  <div class="col-6 cursor-pointer">
                    <ArgonRadio id="hdfs" name="hdfs" :checked="logType === 'hdfs'"
                                @click="getInitLog('hdfs')"
                    >HDFS
                    </ArgonRadio>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-9">
        <div class="col-12">
          <div class="card shadow-lg">
            <div class="card-header pb-2">
              <div class="row">
                <div class="col-6">
                  <h5 class="mb-0">未解析的日志</h5>
                </div>
                <div class="col-6 text-end">
                  <ArgonButton color="primary" variant="gradient" @click="getParsedLog">解析</ArgonButton>
                </div>
              </div>
            </div>
            <div class="card-body pt-0">
              <el-table :data="initialLog" style="width: 100%" :header-cell-style="headerClass" height="155">
                <el-table-column prop="log" label="日志"/>
              </el-table>
            </div>
          </div>
        </div>
        <div class="col-12 mt-3">
          <div class="card shadow-lg">
            <div class="card-header pb-2">
              <div class="row">
                <div class="col-6">
                  <h5 class="mb-0">解析结果</h5>
                </div>
                <div class="col-6 text-end">
                  <ArgonButton color="primary" variant="gradient">保存</ArgonButton>
                </div>
              </div>
            </div>
            <div class="card-body pt-0">
              <el-table :header-cell-style="headerClass" :data="parsedLog" style="width: 100%" height="155">
                <el-table-column label="时间戳" prop="timeStamp" align="center"></el-table-column>
                <el-table-column label="状态" prop="state" align="center"></el-table-column>
                <el-table-column label="等级" prop="level" align="center"></el-table-column>
                <el-table-column label="内容" prop="content"></el-table-column>
                <el-table-column label="事件模板" prop="event_template"></el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card shadow-lg h-100">
          <div class="card-header">
            <h5>词频</h5>
          </div>
          <div class="card-body">1</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArgonRadio from "@/components/ArgonRadio.vue";
import ArgonButton from "../../../components/ArgonButton";

export default {
  name: "LogParsing",
  components: {
    ArgonRadio,
    ArgonButton
  },
  data() {
    return {
      logType: '',
      initialLog: [],
      parsedLog: [],
      headerClass: {
        'background': '#f5f7fa',
        'text-align': 'center',
      }
    }
  },
  methods: {
    //表头样式
    // headerClass() {
    //   return 'background: #EBEEF5; text-align: center'
    // },
    getInitLog(val) {
      this.logType = val;
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
      ];
      this.$store.dispatch('LogParsing/getBglLogs',)
          .then((res) => {
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
          })
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

</style>
