<template>
<el-row class="top_nav">
  <el-col :span="3" class="bank_img">
    <img src="../../assets/comlogo.png"/>
  </el-col>
  <el-col :span="3" class="bank_title">
    <p>见知智投平台</p>
  </el-col>
  <el-col :span="14" style="margin-left: 1rem">
<!--      <el-menu class="el-menu-demo" mode="horizontal" :default-active="$route.matched[0].path" router>-->
        <el-menu class="el-menu-demo" mode="horizontal" default-active="/basicData" router>
        <el-menu-item v-for="item in menuItems" :key="item.path" :index="item.path">
        <el-icon :class="item.icon"></el-icon>
        {{item.name}}
      </el-menu-item>
    </el-menu>
  </el-col>
  <el-col :span="4" class="user">
    <el-avatar icon="el-icon-user-solid" class="avatar_icon"></el-avatar>
    <el-dropdown>
      <span class="el-dropdown-link">管理员<i class="el-icon-arrow-down el-icon--right"></i></span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <el-button type="text">
      <el-icon class="el-icon-chat-dot-round"></el-icon>
    </el-button>
    <el-button type="text">
      <el-icon class="el-icon-switch-button"></el-icon>
    </el-button>
  </el-col>
</el-row>
</template>

<script>
export default {
  name: "TopNav",
  data(){
    return{
      menuItems:[
        {
          path: '/basicData',
          icon: 'el-icon-data-analysis',
          name: '基础数据',
        },
        {
          path: '/opinionOutput',
          icon: 'el-icon-s-opportunity',
          name: '观点输出',
        },
        {
          path: '/financialProducts',
          icon: 'el-icon-data-board',
          name: '理财产品',
        },
        {
          path: '/fundResearch',
          icon: 'el-icon-data-board',
          name: '基金研究',
        },
        {
          path: '/assetAllocation',
          icon: 'el-icon-data-line',
          name: '资产配置',
        },
        {
          path: '/riskControlCenter',
          icon: 'el-icon-service',
          name: '风控中心',
        },
        {
          path: '/userManagement',
          icon: 'el-icon-user',
          name: '用户管理',
        },
      ]
    }
  },
  created() {
    this.$nextTick(() => {
      console.log('999',this.$route);
    })
  }
}
</script>

<style scoped>
.top_nav{
  height: 60px;
  background-color: rgb(0,21,41);
  color: white;
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
}
.top_nav .bank_img{
  height: 60px;
  width: auto;
  text-align: left;
}
.top_nav .bank_img img{
  height: 60px;
  margin-left: 20px;
  margin-right: 10px;
}
.top_nav .bank_title{
  font-size: 1.2rem;
  width: auto;
  padding-left: 10px;
  margin-top: 10px;
  margin-bottom: 10px;
  cursor: default;
  border-left: white 1px solid;
}
.top_nav .bank_title p{
  margin: unset;
  line-height: 40px;
}
.el-menu.el-menu--horizontal{
  border-bottom: none;
  background-color: #001529;
  width: 100%;
}
.el-menu--horizontal>.el-menu-item{
  border-bottom: none;
  color: white;
  text-align: center;
  font-size: 1rem;
  padding: 0 1rem;
}
.el-menu-item [class^=el-icon-]{
  color: white;
  margin-right: unset;
}
.el-menu--horizontal>.el-menu-item:not(.is-disabled):focus,
.el-menu--horizontal>.el-menu-item:not(.is-disabled):hover,
.el-menu--horizontal>.el-submenu .el-submenu__title:hover,
.el-menu--horizontal>.el-menu-item.is-active {
  background-color: #409EFF;
  color: white;
  border-bottom: none;
}
.top_nav .user{
  float: right;
  height: inherit;
  display: flex;
  align-items: baseline;
}
.top_nav .user .avatar_icon{
  margin-top: 10px;
}
.top_nav .user .el-dropdown{
  color: white;
  font-size: 1rem;
  line-height: 60px;
  margin-left: 1rem;
  margin-right: 1rem;
}
.top_nav .user .el-button--text{
  color: white;
  font-size: 1rem;
}
.top_nav .user .el-button--text:focus, .top_nav .user .el-button--text:hover{
  color: #409EFF;
}
</style>
