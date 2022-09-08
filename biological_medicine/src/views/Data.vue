<template>
<el-row class="leftMenu">
  <el-col :span="3">
    <el-menu class="el-menu-vertical-demo" router :default-active="$route.path">
      <template v-for="(item,index) in menus">
        <el-menu-item v-if="item.subMenu.length === 0" :key="index" :index="item.path">
          <i :class="item.icon"></i>{{ item.title }}
        </el-menu-item>
        <el-submenu v-else :key="index" :index="item.path">
          <template slot="title">
            <i :class="item.icon"></i>
            {{ item.title }}</template>
          <el-menu-item v-for="(i,idx) in item.subMenu" :key="idx" :index="i.path">
            {{ i.title }}
          </el-menu-item>
        </el-submenu>
      </template>
    </el-menu>
  </el-col>
  <el-col :span="21">
    <router-view></router-view>
  </el-col>
</el-row>
</template>

<script>
export default {
  name: "DataPage",
  data(){
    return{
      menus: [
        {
          icon:'el-icon-odometer',
          path: '/EvaluationResults',
          title: '评估结果',
          subMenu: [],
        },
        {
          icon:'el-icon-notebook-2',
          path: '/EvaluationHistory',
          title: '评估记录',
          subMenu: [],
        },
        {
          icon:'el-icon-data-analysis',
          path: '',
          title: '模型管理',
          subMenu: [
            {
              path: '/OriginalIndex',
              title: '原始指标'
            },
            {
              path: '/QuantitativeIndex',
              title: '量化指标'
            },
            {
              path: '/EvaluationModel',
              title: '评价模型'
            },
            {
              path: '/EvaluationSubject',
              title: '评价主体'
            },
          ],
        },
      ]
    }
  },
  created(){
    // console.log(this.$route.path);
  },
}
</script>

<style scoped>
.el-menu-vertical-demo{
  background-color: white;
  height: 500px;
}
.el-menu{
  border-right: none;
}
/deep/ .el-submenu .el-menu{
  background-color: rgb(244,252,255);
}
</style>
