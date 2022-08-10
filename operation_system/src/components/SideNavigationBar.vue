<template>
<div class="board">
  <a :href="links">111111</a>
</div>
</template>

<script>
export default {
  name: "SideNavigationBar",
  data() {
    return {
      links: '#one'
    }
  }
}
</script>

<style scoped>
.board{
  background-color: white;
  margin-left: 10px;
  margin-top: 10px;
  margin-right: 10px;
}
</style>
