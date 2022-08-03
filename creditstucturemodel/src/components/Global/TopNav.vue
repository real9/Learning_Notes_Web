<template>
  <el-row id="topNav">
    <el-col :span="8" class="topNav_title">
      <p>房地产行业信贷结构优化评价模型</p>
    </el-col>
    <el-col :span="12" class="topNav_tabs">
      <div :key="tabs[0].id" class="" v-bind:class="{activeTab: isActiveTab0}" @click="gpToPage(tabs[0])">
        {{ tabs[0].name }}
      </div>
      <div :key="tabs[1].id" class="" v-bind:class="{activeTab: isActiveTab1}" @click="gpToPage(tabs[1])">
        {{ tabs[1].name }}
      </div>
      <div :key="tabs[2].id" class="" v-bind:class="{activeTab: isActiveTab2}" @click="gpToPage(tabs[2])">
        {{ tabs[2].name }}
      </div>
      <div :key="tabs[3].id" class="" v-bind:class="{activeTab: isActiveTab3}" @click="gpToPage(tabs[3])">
        {{ tabs[3].name }}
      </div>
      <div :key="tabs[4].id" class="" v-bind:class="{activeTab: isActiveTab4}" @click="gpToPage(tabs[4])">
        {{ tabs[4].name }}
      </div>
    </el-col>
    <el-col :span="4" class="topNav_icon">
      <div class="el-icon-search"></div>
      <div class="el-icon-setting"></div>
      <div class="el-icon-right"></div>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "TopNav",
  data() {
    return {
      isActiveTab0: true,
      isActiveTab1: false,
      isActiveTab2: false,
      isActiveTab3: false,
      isActiveTab4: false,
      tabs: [
        {
          name: '项目列表',
          id: 'ProjectList'
        },
        {
          name: '评价结果',
          id: 'EvaluationResult'
        },
        {
          name: '统计分析',
          id: 'StatisticsAnalysis'
        },
        {
          name: '模型管理',
          id: 'ModelManagement'
        },
        {
          name: '附录列表',
          id: 'AppendixList'
        },
      ]
    }
  },
  created() {
    // console.log(this.$route);
  },
  methods: {
    gpToPage(tab){
      let index = this.tabs.indexOf(tab);
      let path = tab.id;
      // v-bind:class的变量只能和data绑定
      if(index === 0 ){
        path = '';
        this.isActiveTab0 = true;
        this.isActiveTab1 = false;
        this.isActiveTab2 = false;
        this.isActiveTab3 = false;
        this.isActiveTab4 = false;
      }else if(index === 1){
        this.isActiveTab0 = false;
        this.isActiveTab1 = true;
        this.isActiveTab2 = false;
        this.isActiveTab3 = false;
        this.isActiveTab4 = false;
      }else if (index === 2){
        this.isActiveTab0 = false;
        this.isActiveTab1 = false;
        this.isActiveTab2 = true;
        this.isActiveTab3 = false;
        this.isActiveTab4 = false;
      }else if (index === 3){
        this.isActiveTab0 = false;
        this.isActiveTab1 = false;
        this.isActiveTab2 = false;
        this.isActiveTab3 = true;
        this.isActiveTab4 = false;
      }else if (index === 4){
        this.isActiveTab0 = false;
        this.isActiveTab1 = false;
        this.isActiveTab2 = false;
        this.isActiveTab3 = false;
        this.isActiveTab4 = true;
      }
      this.$router.push('/' + path);
    }
  },
}
</script>

<style scoped>
* {
  font-family: PingFangSC-Medium, PingFang SC;
}
#topNav {
  font-size: 16px;
  height: 70px;
  border-bottom: 2px solid #eee;
}
.topNav_title{
  font-size: 20px;
}
.topNav_title p {
  text-align: left;
  padding-left: 20px;
  font-weight: bold;
  background-image: -webkit-gradient(linear,0 top, 0 bottom, from(white), to(rgb(67, 177, 227)));
  /*必需加前缀 -webkit- 才支持这个text值 */
  -webkit-background-clip: text;
  /*text-fill-color会覆盖color所定义的字体颜色： */
  -webkit-text-fill-color: transparent;
}

.topNav_tabs {
  line-height: 70px;
  display: flex;
  height: 70px;
}

.topNav_tabs > div {
  text-align: center;
  cursor: pointer;
  width: 90px;
  font-weight: bold;
  background-image: -webkit-gradient(linear,0 top, 0 bottom, from(white), to(rgb(67, 177, 227)));
  /*必需加前缀 -webkit- 才支持这个text值 */
  -webkit-background-clip: text;
  /*text-fill-color会覆盖color所定义的字体颜色： */
  -webkit-text-fill-color: transparent;
}

.topNav_icon {
  font-size: 20px;
  line-height: 70px;
  text-align: right;
}

.topNav_icon > div {
  margin-right: 20px;
  cursor: pointer;
}

.activeTab {
  background-color: rgba(255, 255, 255, 0.18);
  border-bottom: 5px solid #eee;
}
</style>
