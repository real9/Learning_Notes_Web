<template>
  <div id="app">
    <top-nav></top-nav>
  </div>
</template>

<script>
import topNav from './components/global/TopNav'
export default {
  components:{
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
</style>
