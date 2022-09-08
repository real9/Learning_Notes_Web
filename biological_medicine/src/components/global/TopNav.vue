<template>
<div>
<el-row class="top_nav">
  <el-col :span="4" class="bank_img">
    <img src="../../assets/bankname.png"/>
  </el-col>
  <el-col :span="6" class="web_title">
    <p >生物医药风控模型系统</p>
    <p class="english">Biology Company Risk Control Model</p>
  </el-col>
  <el-col :offset="10" :span="4" style="text-align: right;" class="right">
    <el-row>
      <el-col :span="10">
        <el-avatar icon="el-icon-user-solid" class="avatar_icon"></el-avatar>
      </el-col>
      <el-col :span="8">
        <el-dropdown>
          <span class="el-dropdown-link">管理员<i class="el-icon-arrow-down el-icon--right"></i></span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-col>
      <el-col :span="4">
        <el-badge is-dot class="item">
          <el-button class="share-button" icon="el-icon-bell" type="text"></el-button>
        </el-badge>
      </el-col>
    </el-row>
  </el-col>
</el-row>
</div>
</template>

<script>
export default {
  name: "TopNav"
}
</script>

<style scoped>
.top_nav{
  background-color: rgb(0,21,42);
  color: white;
  height: 60px;
  position: relative;
}
.top_nav .bank_img{
  width: 160px;
  height: 60px;
}
.top_nav .bank_img img{
  height: 60px;
}
.top_nav p{
  color: white;
  margin: unset;
  text-align: left;
}
.top_nav .web_title{
  margin-top: 12px;
  color: white;
  font-size: 20px;
  cursor: default;
  border-left: white 1px solid;
  padding-left: 8px;
}
.top_nav .web_title .english{
  font-size: 4px;
}
.top_nav .right{
  position: absolute;
  right: 10px;
}
.top_nav .right .avatar_icon{
  margin-top: 10px;
}
.top_nav .right .el-dropdown{
  color: white;
  font-size: 16px;
  line-height: 60px;
}
.top_nav .right .item{
  line-height: 60px;

}
.top_nav .right .item .share-button{
  font-size: 20px;
}
.el-button{
  color: white;
}
/deep/ .el-badge__content.is-fixed.is-dot{
  top: 20px;
  right: 8px;
  z-index: 99;
}
/deep/ .el-badge__content.is-dot{
  height: 4px;
  width: 4px;
}
</style>
