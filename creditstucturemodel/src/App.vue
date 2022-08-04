<template>
  <div id="app">
    <top-nav></top-nav>

    <el-scrollbar :style="{height: innerHeight,}" class="routerview_scrollbar">
      <router-view style="margin-top: 10px;"></router-view>
    </el-scrollbar>

  </div>
</template>

<script>
import topNav from "./components/Global/TopNav.vue";

export default {
  name: 'app',
  components: {
    topNav
  },
  data() {
    return{
      clientHeight: "", // 浏览器可视高度
      innerHeight: "", // router-view可视高度
    }
  },
  watch: {
    clientHeight() {
      this.updateInnerHeight(this.clientHeight);
    },
  },
  mounted() {
    // 根据浏览器高度自动条件routerview高度，控制scrollbar效果
    this.clientHeight = document.documentElement.clientHeight; // 获取浏览器可视区域高度
    let that = this;
    window.onresize = function () {
      this.clientHeight = document.documentElement.clientHeight;
      that.updateInnerHeight(this.clientHeight);
    };
  },
  methods:{
    // 更新可视区域高度
    updateInnerHeight(clientHeight) {
      this.innerHeight = clientHeight - 70 + "px";
    },
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /*background-color: #01031C;*/
  color: white;
  margin-right: 5px;
  margin-left: 5px;
}
.routerview_scrollbar{
  height: 100%;
}
/*隐藏水平滚动条*/
.routerview_scrollbar .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
