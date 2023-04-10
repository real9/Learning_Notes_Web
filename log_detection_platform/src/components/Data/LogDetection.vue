<template>
  <el-row>
    <el-col :span="24">
      <el-row>
        <el-col :span="12">
          <el-col>
            <el-select v-model="value" placeholder="请导入测试集">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
            <el-button style="margin-left: 1rem" type="primary">导入模型</el-button>
          </el-col>
          <el-col style="margin-top: 1rem">
            <el-table :header-cell-style="headerClass">
              <el-table-column label="模型名称"></el-table-column>
              <el-table-column label="训练集"></el-table-column>
              <el-table-column label="操作"></el-table-column>
            </el-table>
          </el-col>
        </el-col>
        <el-col :span="12">
          <radar-chart></radar-chart>
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

</style>
