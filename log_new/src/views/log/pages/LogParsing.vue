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
                    <ArgonRadio id="bgl" name="bgl" :checked="logType === 'Bgl'"
                                @click="getInitLog('Bgl')"
                    >BGL
                    </ArgonRadio>
                  </div>
                  <div class="col-6 cursor-pointer">
                    <ArgonRadio id="hdfs" name="hdfs" :checked="logType === 'Hdfs'"
                                @click="getInitLog('Hdfs')"
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
                <el-table-column prop="content" label="日志"/>
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
                <el-table-column label="模板字段" prop="template"></el-table-column>
              </el-table>
            </div>
          </div>
        </div>
      </div>
      <div class="col-3">
        <div class="card shadow-lg h-100">
          <div class="card-header">
            <h5 class="mb-0">词频</h5>
          </div>
          <div class="card-body pt-0">
            <div class="row">
              <div class="col-12 mb-1" v-for="item in output" :key="item.id">
                <span class="h5 fst-italic" :class="item.id < 4 ? 'text-danger' : ''">TOP {{item.id}}. </span>
                <span class="fw-bold">{{item.content}}</span>
              </div>
            </div>
          </div>
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
      output: [],
      headerClass: {
        'background': '#f5f7fa',
        'text-align': 'center',
      }
    }
  },
  methods: {
    getInitLog(val) {
      this.logType = val;
      this.$store.dispatch(`LogParsing/get${val}Logs`,)
          .then((res) => {
            console.log(res);
            this.initialLog = res.data.data;
          })
          .catch((err) => {
            console.log(err);
          })
    },
    getParsedLog() {
      this.$store.dispatch(`LogParsing/get${this.logType}Parsed`,)
          .then(res => {
            console.log(res);
            this.parsedLog = res.data.data;
          })
          .catch((err) => {
            console.log(err);
          })
      this.$store.dispatch(`LogParsing/get${this.logType}Output`,)
          .then(res => {
            console.log(res);
            this.output = res.data.data;
          })
          .catch(err => {
            console.log(err);
          })
    }
  }
}
</script>

<style scoped>

</style>
