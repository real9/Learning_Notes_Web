<template>
<el-row>
  <el-col :span="3">
    <el-menu
        router :default-active="$route.path"
        class="el-menu-vertical-demo"
        >
      <el-menu-item v-for="item in menuItem" :key="item.index" :index="item.index">
        {{item.title}}
      </el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="21">
    <router-view class="page"></router-view>
  </el-col>
</el-row>
</template>

<script>
export default {
  name: "DataPage",
  data() {
    return {
      menuItem: [
        {
          index: '/LogParsing',
          title: '日志解析'
        },
        {
          index: '/ModelTraining',
          title: '模型训练'
        },
        {
          index: '/LogDetection',
          title: '异常检测'
        },
      ]
    }
  }
}
</script>

<style scoped>
.page{
  padding: 10px;
}
</style>
