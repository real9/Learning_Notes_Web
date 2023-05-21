<template>
  <div id="sidenav-collapse-main" class="collapse navbar-collapse w-auto h-auto h-100">
    <ul class="navbar-nav">
      <li class="nav-item" v-for="(item, index) in sidenavMenu" :key="index">
        <sidenav-collapse
            :nav-text="item.text"
            :collapse="false"
            url="#"
            :aria-controls="''"
            :collapse-ref="item.collapseRef"
            :class="getRoute() === item.collapseRef ? 'active' : ''"
        >
          <template #icon>
            <component v-bind:is="item.icon"></component>
          </template>
        </sidenav-collapse>
      </li>
    </ul>
  </div>
</template>
<script>
import SidenavItem from "./SidenavItem.vue";
import SidenavCollapse from "./SidenavCollapse.vue";
import SidenavCard from "./SidenavCard.vue";
import SidenavCollapseItem from "./SidenavCollapseItem.vue";

import Box3d from "../../components/Icons/Box3d.vue";
import Spaceship from "../../components/Icons/Spaceship.vue";
import Basket from "../../components/Icons/Basket";

export default {
  name: "SidenavList",
  components: {
    SidenavItem,
    SidenavCollapse,
    SidenavCard,
    SidenavCollapseItem,
    Box3d,
    Spaceship,
    Basket
  },
  data() {
    return {
      sidenavMenu: [
        {
          // text: this.$t('messages.LogParsing'),
          text: "日志解析",
          collapseRef: "/LogParsing",
          icon: "Box3d",
        },
        {
          // text: this.$t('messages.ModelTraining'),
          text: "模型训练",
          collapseRef: "/ModelTraining",
          icon: "Basket",
        },
        {
          // text: this.$t('messages.LogDetection'),
          text: "异常检测",
          collapseRef: "/LogDetection",
          icon: "Spaceship",
        },
      ]
    }
  },
  methods: {
    // getRoute() {
    //   const routeArr = this.$route.path.split("/");
    //   return routeArr[1];
    // },
    //导航栏样式激活
    getRoute() {
      return this.$route.path;
    }
  }
};
</script>
