<template>
  <el-row id="topNav">
    <el-col :span="8" class="topNav_title">
      <p>房地产行业信贷结构优化评价模型</p>
    </el-col>
    <el-col :span="12" class="topNav_tabs">
      <div :key="tabs[0].id" class="" v-bind:class="{activeTab: isActiveTab0}" @click="gpToPage(tabs[0])">
        <span>{{ tabs[0].name }}</span>
      </div>
      <div :key="tabs[1].id" class="" v-bind:class="{activeTab: isActiveTab1}" @click="gpToPage(tabs[1])">
        <span>{{ tabs[1].name }}</span>
      </div>
      <div :key="tabs[2].id" class="" v-bind:class="{activeTab: isActiveTab2}" @click="gpToPage(tabs[2])">
        <span>{{ tabs[2].name }}</span>
      </div>
      <div :key="tabs[3].id" class="" v-bind:class="{activeTab: isActiveTab3}" @click="gpToPage(tabs[3])">
        <span>{{ tabs[3].name }}</span>
      </div>
      <div :key="tabs[4].id" class="" v-bind:class="{activeTab: isActiveTab4}" @click="gpToPage(tabs[4])">
        <span>{{ tabs[4].name }}</span>
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
      isActiveTab0: false,
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
  border-bottom: 2px solid rgb(15,95,154);
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
  /*position: relative;*/
}

.topNav_tabs > div {
  text-align: center;
  cursor: pointer;
  border-bottom: 2px solid rgb(15,95,154);
  width: 90px;
  font-weight: bold;
  color: rgb(26,57,86);
  background-color: rgba(255, 255, 255, 0.1) !important; /*针对不支持渐变的浏览器*/
  background-image: radial-gradient(farthest-corner at 50% 5%, rgb(12, 46, 83), #01031C);
}

.topNav_icon {
  font-size: 20px;
  line-height: 70px;
  text-align: right;
  color: rgb(67, 177, 227);
}

.topNav_icon > div {
  margin-right: 20px;
  cursor: pointer;
}

.activeTab {
  color: rgb(67, 177, 227);
  background-color: rgba(255, 255, 255, 0.2) !important; /*针对不支持渐变的浏览器*/
  background-image: radial-gradient(farthest-corner at 50% 5%, rgb(8, 47, 114), #01031C);
  position: relative;
}
.activeTab span{
  background-image: -webkit-gradient(linear,0 top, 0 bottom, from(white), to(rgb(67, 177, 227)));
  /*必需加前缀 -webkit- 才支持这个text值 */
  -webkit-background-clip: text;
  /*text-fill-color会覆盖color所定义的字体颜色： */
  -webkit-text-fill-color: transparent;
}
.activeTab:after{
  content: '';
  position: absolute;
  bottom: -2px;
  left: 34px;
  z-index: 99;
  width: 22px;
  height: 10px;
  border: 2px solid rgb(15, 95, 154);
  border-bottom: 2px solid #01031C;
  transform: perspective(8px) rotateX(15deg);
  transform-origin: bottom;
}
</style>
