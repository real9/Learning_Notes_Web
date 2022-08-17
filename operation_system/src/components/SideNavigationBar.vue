<template>
<div >
  <div class="board" ref="board">
    <a v-for="item in navigationName" :href="item.id" :key="item.id" @click="getLink($event)">{{item.name}}</a>
  </div>
</div>
</template>

<script>
import {mapState} from 'vuex'

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
      ],
    }
  },
  computed: {
    ...mapState(['tableHeight', 'panelHeight'])
  },
  //可以不需要监听，因为onscroll会一直刷新
  // watch: {
  //   tableHeight() {
  //     console.log('ttt',this.tableHeight);
  //   }
  // },
  mounted() {
    //页面滚动，右侧导航栏对应部分高亮
    this.$refs.board.children[0].className = 'active';
    window.onscroll = () => {
      let y = window.scrollY;
      let t = this.tableHeight + 10;
      let p = this.panelHeight + 10;
      if(y < t ){
        for(let i = 1; i < this.$refs.board.children.length; i ++){
          this.$refs.board.children[i].className = '';
        }
        this.$refs.board.children[0].className = 'active';
      }else{
        for(let i = 0; i < this.$refs.board.children.length; i ++){
          this.$refs.board.children[i].className = '';
        }
        let len = this.navigationName.length;
        for(let i = 1; i < len; i ++ ){
          if (y > t  + p * (i-1) && y < t + p * i){
            this.$refs.board.children[i].className = 'active';
          }
        }
      }
    }
  },
  methods: {
    //页面滚动高亮 和 点击直达 两个功能没有冲突
    //使用a进行对应位置的跳转，减少滚动事件的计算量
    getLink(e) {
      e.target.className = 'active';
      //根据排他思想，运用姐妹节点
      //需要链表的思想
      let pre = e.target.previousElementSibling;
      while (pre){
        pre.className = '';
        pre = pre.previousElementSibling;
      }
      let suf = e.target.nextElementSibling;
      while (suf){
        suf.className = '';
        suf = suf.nextElementSibling;
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
