<template>
<div>
  <el-row class="top_nav">
    <el-col :md="6" class="web_title" :xs="18" :sm="18">
      <p >中 国 银 行 业 协 会</p>
      <p class="english">CHINA BANK ASSOCIATION</p>
    </el-col>
    <el-col :md="14" class="pc_menu">
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
    <el-col :md="4" class="user pc_user">
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
    <el-col class="mobile_more" :xs="6" :sm="6">
      <el-button type="text" @click="getMobileContent"><i class="el-icon-more"></i></el-button>
    </el-col>
  </el-row>
  <mobile-content v-if="isMobileMoreFlag" class="mobile_menu-user" v-loading="loading" element-loading-text="加载中"></mobile-content>
</div>
</template>

<script>
import mobileContent from '../mobile/MoreContent'
import {mapState} from 'vuex'
export default {
  name: "TopNav",
  data() {
    return {
      activeIndex: '2',
    }
  },
  computed: {
    ...mapState(['isMobileMoreFlag','loading'])
  },
  components: {
    mobileContent
  },
  methods: {
    handleSelect(key){
      console.log(key);
    },
    getMobileContent(){
      // this.isMobileMoreFlag = !this.isMobileMoreFlag;
      this.$store.commit('updateMobileFlag');
    }
  }
}
</script>

<style scoped>
@media all and (max-width: 992px){
  .pc_menu{
    display: none;
  }
  .pc_user{
    display: none;
  }
  .mobile_more{
    height: inherit;
    text-align: right;
    padding-right: 1em;
    position: relative;
  }
  .mobile_more .el-button--text{
    color: white;
    height: inherit;
  }
  .mobile_menu-user{
    /*不能用绝对定位，不然在滑动窗口时，该页面不会直接显示*/
    position: fixed;
    width: 100%;
    border-bottom: #d9d9d9 solid 1px;
    z-index: 99;
    background-color: white;
    padding-top: 40px;
    animation: fadeInAnimation ease 1s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  @keyframes fadeInAnimation {
    0% {
      top: 0px;
      height: 40%;
    }
    100% {
      top: 60px;
      height: 100%;
    }
  }
}
@media all and (min-width: 992px){
  .mobile_more{
    display: none;
  }
}
.top_nav{
  background-color: #AD002B;
  height: 60px;
  position: fixed;
  top: 0;
  z-index: 99;
  width: 100%;
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
