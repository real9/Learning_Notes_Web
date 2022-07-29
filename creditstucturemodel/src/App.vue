<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view style="margin-top: 10px"></router-view>
  </div>
</template>

<script>
import topNav from "./components/Global/TopNav.vue";

export default {
  name: 'app',
  components: {
    topNav
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
</style>
