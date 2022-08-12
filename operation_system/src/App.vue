<template>
  <div id="app">
    <top-nav></top-nav>
    <el-row>
      <el-col :span="20" >
<!--        <div style="border: 1px solid black;margin: 20px;background-color: white">hhh</div>-->
        <alert-event-table class="alertEventTable"></alert-event-table>
        <service-panel></service-panel>
      </el-col>
      <el-col :span="4"><side-navigation-bar class="navigationBar"></side-navigation-bar></el-col>
    </el-row>
  </div>
</template>

<script>

import topNav from './components/TopNav'
import alertEventTable from './components/AlertEventTable'
import servicePanel from './components/ServicePanel'
import sideNavigationBar from './components/SideNavigationBar'
export default {
  name: 'App',
  components: {
    topNav,
    alertEventTable,
    servicePanel,
    sideNavigationBar,
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
.alertEventTable{
  background-color: white;
  margin-left: 10px;
  margin-top: 10px;
  padding: 20px;
}
.navigationBar{
  background-color: white;
  margin-left: 10px;
  margin-top: 10px;
  padding: 20px;
  position: fixed;
  right: 10px;
  width: 10vw;
}
</style>
