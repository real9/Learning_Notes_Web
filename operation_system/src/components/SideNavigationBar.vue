<template>
<div >
  <div class="board">
    <a v-for="item in navigationName" :href="item.id" :key="item.id" @click="getLink($event)">{{item.name}}</a>
  </div>
</div>
</template>

<script>
export default {
  name: "SideNavigationBar",
  data() {
    return {
      links: '#one',
      navigationName:[
        {
          name: '报警事件',
          id: '#',
        },
        {
          name: '服务器#1',
          id: '#0',
        },
        {
          name: '服务器#2',
          id: '#1',
        },
        {
          name: '服务器#3',
          id: '#2',
        },
        {
          name: '服务器#4',
          id: '#3',
        },
        {
          name: '服务器#5',
          id: '#4',
        }
      ]
    }
  },
  methods: {
    getLink(e) {
      e.target.className = 'active';
      //根据排他思想，运用姐妹节点
      //需要链表的思想
      let pre = e.target.nextElementSibling;
      while (pre){
        pre.className = '';
        pre = pre.nextElementSibling;
      }
      let  suf = e.target.previousElementSibling;
      while (suf){
        suf.className = '';
        suf = suf.previousElementSibling;
      }
    }
  }
}
</script>

<style scoped>
.board{
  width: 80%;
  border-left: 3px solid #DCDFE6;
}
a{
  display: block;
  height: 2em;
  border-left: 5px solid transparent;
  color: #606266;
 }
a:link {
  text-decoration: none;
  border-left: 5px solid transparent;
}
a:visited {
  text-decoration: none;
  border-left: 5px solid transparent;
}
a:hover {
  color: red;
  text-decoration: none;
  border-left: 5px solid red;
}
.active{
    color: red;
    text-decoration: none;
    border-left: 5px solid red !important;
}
</style>
