<template>
<div>
  <el-row class="top_nav">
    <el-col :span="6" class="web_title">
      <p >中 国 银 行 业 协 会</p>
      <p class="english">CHINA BANK ASSOCIATION</p>
    </el-col>
    <el-col :span="14">
      <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect"
               active-text-color="white" text-color="white" background-color="#AD002B" :router="true">
        <el-menu-item index="1">首页</el-menu-item>
        <el-menu-item index="/talentEntry">人才录入</el-menu-item>
        <el-submenu index="3">
          <template slot="title">公共信息</template>
          <el-menu-item index="3-1">1</el-menu-item>
          <el-menu-item index="3-2">2</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">综合服务</template>
          <el-menu-item index="4-1">1</el-menu-item>
          <el-menu-item index="4-2">2</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
    <el-col :span="4" class="user">
      <el-row >
        <el-col :span="4" :offset="6">
          <i class="el-icon-chat-dot-square info_icon"></i>
        </el-col>
        <el-col :span="4">
          <el-avatar icon="el-icon-user-solid" class="avatar_icon"></el-avatar>
        </el-col>
        <el-col :span="10">
          <el-dropdown>
            <span class="el-dropdown-link">用户名<i class="el-icon-arrow-down el-icon--right"></i></span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>黄金糕</el-dropdown-item>
              <el-dropdown-item>狮子头</el-dropdown-item>
              <el-dropdown-item>螺蛳粉</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-row>
    </el-col>
  </el-row>
</div>
</template>

<script>
export default {
  name: "TopNav",
  data() {
    return {
      activeIndex: '2'
    }
  },
  methods: {
    handleSelect(key){
      console.log(key);
    }
  }
}
</script>

<style scoped>
.top_nav{
  background-color: #AD002B;
  height: 60px;
}
.top_nav p{
  color: white;
  margin: unset;
}
.top_nav .web_title{
  margin-top: 15px;
  color: white;
  font-size: 14px;
  cursor: default;
}
.top_nav .web_title .english{
  font-size: 4px;
}
.top_nav .user{
  /*padding-right: 3vw;*/
  color: white;
}
.top_nav .user .info_icon{
  line-height: 60px;
  font-size: 18px;
}
.top_nav .user .avatar_icon{
  margin-top: 10px;
  /*line-height: 60px;*/
}
.el-dropdown-link{
  color: white;
  line-height: 60px;
}
.el-menu.el-menu--horizontal{
  border: none;
  width: 40vw;
  margin-right: 10vw;
  margin-left: 10vw;
}
/deep/ .el-submenu__title i{
  color: white;
}

</style>
