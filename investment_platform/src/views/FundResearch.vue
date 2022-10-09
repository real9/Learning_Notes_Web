<template>
<el-row>
  <el-col class="second_nav">
    <el-menu class="el-menu-demo" mode="horizontal" :default-active="menuItems[0].index" router>
      <el-menu-item v-for="item in menuItems" :key="item.index" :index="item.index">
        {{item.title}}
      </el-menu-item>
    </el-menu>
  </el-col>
  <el-col>
<!--    <keep-alive>-->
<!--      <component :is="componentName"></component>-->
<!--    </keep-alive>-->
    <router-view class="second_view"></router-view>
  </el-col>
</el-row>
</template>

<script>
// import fundProduct from '../components/fundResearch/FundProduct'
export default {
  name: "FundResearch",
  // components: {
  //   fundProduct,
  // },
  data(){
    return{
      menuItems: [
        {
          title: '基金产品',
          index: '/fundResearch',
        },
        {
          title: '基金经理',
          index: '/fundResearch/fundManager',
        },
        {
          title: '基金公司',
          index: '3',
        },
        {
          title: '我的基金池',
          index: '4',
        },
        {
          title: '基金评价方案',
          index: '5',
        },
        {
          title: '选择评价方案（管理员）',
          index: '6',
        },
        {
          title: '情景管理方案（管理员）',
          index: '7',
        },
      ],
      // componentName: 'FundProduct',
    }
  },
  created() {
    // console.log(this.$route.matched[0].path);
  }
}
</script>

<style scoped>
.second_nav{
  position: fixed;
  top: 60px;
  z-index: 99;
}
.second_nav .el-menu--horizontal{
  display: flex;
  justify-content: center;
}
.second_nav .el-menu--horizontal>.el-menu-item{
  color: #303133;
  font-size: 1rem;
}
/deep/ .second_nav .el-menu--horizontal>.el-menu-item:hover{
  border-bottom: 2px solid #409EFF!important;
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal>.el-menu-item:not(.is-disabled):hover,
.el-menu-item.is-active{
  border-bottom: 2px solid #409EFF;
}
.second_view{
  top: 120px;
}
</style>
