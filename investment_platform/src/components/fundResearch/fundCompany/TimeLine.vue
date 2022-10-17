<template>
<div class="timeLine">
  <div class="timeLineItem">
    <div class="circle"></div>
    <div class="content">
      <el-tooltip class="item" effect="dark" content="广发电子信息传媒股票A广发电子信息传媒股票A广发电子信息传媒股票A" placement="bottom-start">
        <div>广发电子信息传媒股票A</div>
      </el-tooltip>
    </div>
  </div>
  <div class="timeLineItem">
    <div class="circle"></div>
    <div class="content">
      <el-tooltip class="item" effect="dark" content="tooltitooltiptooltiptooltip" placement="bottom-start">
        <div>广发品牌消费股票发起式A</div>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="tooltitooltiptooltiptooltip" placement="bottom-start">
        <div>广发高端制造股票A</div>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="tooltitooltiptooltiptooltip" placement="bottom-start">
        <div>广发资源优选股票A</div>
      </el-tooltip>
    </div>
  </div>
  <div class="timeLineItem">
    <div class="circle"></div>
    <div class="content">
      <el-tooltip class="item" effect="dark" content="tooltitooltiptooltiptooltip" placement="bottom-start">
        <div>广发电子信息传媒股票C</div>
      </el-tooltip>
    </div>
  </div>
  <div class="timeLineItem">
    <div class="circle"></div>
    <div class="lastCircle"></div>
    <div class="content">
      <el-tooltip class="item" effect="dark" content="tooltitooltiptooltiptooltip" placement="bottom-start">
        <div>广发价值优势混合</div>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="tooltitooltiptooltiptooltip" placement="bottom-start">
        <div>广发稳健回报混合A</div>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="tooltitooltiptooltiptooltip" placement="bottom-start">
        <div>广发稳健回报混合C</div>
      </el-tooltip>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "TimeLine",
}
</script>

<style scoped>
.timeLine{
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
}
.timeLine .timeLineItem{
  width: 25%;
  border-top: #409EFF 1px solid;
  position: relative;
}
.timeLine .timeLineItem .circle{
  border-radius: 50%;
  width: 6px;
  height: 6px;
  position: absolute;
  top: -3px;
  left: 0;
  background-color: #303133;
}
.timeLine .timeLineItem .lastCircle{
  border-radius: 50%;
  width: 8px;
  height: 8px;
  position: absolute;
  top: -4px;
  right: 0;
  background-color: #409EFF;
}
.timeLine .timeLineItem .content{
  margin-top: 0.5rem;
}
.timeLine .timeLineItem .content div{
  cursor: pointer;
}
</style>
