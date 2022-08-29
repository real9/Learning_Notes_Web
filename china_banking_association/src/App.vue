<template>
  <div id="app">
    <top-nav></top-nav>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import topNav from './components/global/TopNav'
export default {
  name:'app',
  components: {
    topNav,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.view{
  margin-right: 20vw;
  margin-left: 20vw;
}
</style>
