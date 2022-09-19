<template>
<div class="detailBoard">
  <el-descriptions direction="vertical"
                   :colon="false"
                   :label-style="danger ? labelStyle_danger : labelStyle"
                   :content-style="danger ? contentStyle_danger : contentStyle">
    <el-descriptions-item label="评价指标">{{ evaluation.quantFeatureName }}</el-descriptions-item>
    <el-descriptions-item label="取值">
      {{ evaluation.mapDesc }}
    </el-descriptions-item>
    <el-descriptions-item label="得分/满分">
      <el-progress :percentage="percentage" :format="format" :stroke-width="10"></el-progress>
    </el-descriptions-item>
  </el-descriptions>
</div>
</template>

<script>
export default {
  name: "DetailBoard",
  computed:{
    percentage: function (){
      return (this.evaluation.quantValue / this.evaluation.quantMaxValue).toFixed(2) * 100;
    }
  },
  data(){
    return{
      labelStyle:{
        'text-align': 'center',
        'font-size': '14px',
        'font-weight': 600,
      },
      contentStyle:{
        'text-align': 'center',
        'padding-top': '12px'
      },
      labelStyle_danger:{
        'text-align': 'center',
        'font-size': '14px',
        'font-weight': 600,
        'color': 'rgb(255,103,84)',
      },
      contentStyle_danger:{
        'text-align': 'center',
        'padding-top': '12px',
        'color': 'rgb(255,103,84)',
      },
    }
  },
  props:{
    danger:{
      type: Boolean,
      default: false,
    },
    mode:{
      type: String,
      default: 'common',
    },
    evaluation:{
      // quantFeatureName: '',
      // mapDesc: '',
      // quantMaxValue: 100,
      // quantValue: 0
    }
  },
  methods:{
    format() {
      if(this.mode === 'plus'){
        return '+7';
      }else if(this.mode === 'minus'){
        return '-3'
      }
      return this.evaluation.quantValue + '/' + this.evaluation.quantMaxValue;
    }
  },
}
</script>

<style scoped>
.detailBoard{
  border: 1px solid #EBEEF5;
  padding: 5px 0;
  height: 100%;
}
.detailBoard /deep/ .el-descriptions-row:first-child{
  border-bottom: 1px solid #EBEEF5;
}
.detailBoard /deep/ .el-descriptions-row:last-child{
  padding-top: 12px;
}
.danger /deep/ .el-progress__text{
  color: rgb(255,103,84)!important;
}
/*两种进度条，不要用elementui的自带颜色了，直接css写渐变*/
/deep/.el-progress-bar__inner{
  background-image: linear-gradient(to right, rgb(0,161,255), rgb(0,207,255));
}
.danger /deep/ .el-progress-bar__inner{
  background-image: linear-gradient(to right, rgb(255,96,78), rgb(255,175,148));
}
</style>
