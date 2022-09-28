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
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-size: 14px;
}

@media screen and (min-width: 992px) {
  .view{
    margin-right: 10vw;
    margin-left: 10vw;
  }
}
@media all and (max-width: 992px){

}
.view{
  margin-top: 60px;
}
</style>
