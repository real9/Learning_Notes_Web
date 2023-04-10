<template>
  <el-row>
    <el-col :span="16">
      <el-row>
        <el-col>
          <el-select v-model="value" placeholder="请选择数据集">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col>
          <el-table :header-cell-style="headerClass" class="table">
            <el-table-column label="时间戳"></el-table-column>
            <el-table-column label="日志类型"></el-table-column>
            <el-table-column label="描述细节"></el-table-column>
            <el-table-column label="是否异常"></el-table-column>
          </el-table>
        </el-col>
        <el-col>
          <el-table :header-cell-style="headerClass" class="table">
            <el-table-column label="时间戳"></el-table-column>
            <el-table-column label="日志类型"></el-table-column>
            <el-table-column label="描述细节"></el-table-column>
            <el-table-column label="是否异常"></el-table-column>
          </el-table>
        </el-col>
        <el-col style="margin-top: 1rem">
          <el-button>保存</el-button>
        </el-col>
      </el-row>
    </el-col>
    <el-col :span="8">
      <bar-chart></bar-chart>
    </el-col>
  </el-row>
</template>

<script>
import BarChart from "@/components/Chart/BarChart";

export default {
  name: "LogParsing",
  components: {
    BarChart,
  },
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      value: ''
    }
  },
  methods: {
    //表头样式
    headerClass() {
      return 'background: #EBEEF5; text-align: center'
    },
  }
}
</script>

<style scoped>
.table {
  margin-top: 1rem;
}
</style>
