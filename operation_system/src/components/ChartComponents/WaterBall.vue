<template>
    <el-row>
      <el-col>
        <div class="outerBall">
          <div class="content">
            <p class="number">{{usageRate}}</p>
            <p class="percentage">{{usageNum}}/9999GB</p>
          </div>
          <div class="innerWater">
          </div>
        </div>
      </el-col>
    </el-row>
</template>

<script>
export default {
  name: "WaterBall",
  props:{
    usageRate: {
      type: Number,
      default: 0,
    },
    usageNum: {
      type: Number,
      default: 0,
    }
  }
}
</script>

<style scoped>
.content{
  position: absolute;
  top: 75px;
  left: 30px;
  width: 90px;
  color: black;
  z-index: 99;
}
.content .number{
  font-size: 20px;
  line-height: 20px;
  margin: 0;
}
.content .percentage{
  font-size: 16px;
  line-height: 16px;
  margin-top: 10px;
}
.outerBall{
  margin-top: 20px;
  position: relative;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 3px solid white;
  box-shadow: 0 0 0 2px #2d7ed5;
  color: black;
}
.innerWater{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(102, 177, 255);
  border-radius: 50%;
  overflow: hidden;
}
.innerWater:after{
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 150%;
  height: 150%;
  border-radius: 40%;
  border-color: white;
  background-color: white;
  animation: darkWave 4s linear infinite;
}
@keyframes darkWave{
  0%{
    transform: translate(-50%,-65%) rotate(0deg);
  }
  100%{
    transform: translate(-50%,-65%) rotate(360deg);
  }
}
.innerWater:before{
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 150%;
  height: 150%;
  border-radius: 42%;
  background-color: rgba(240, 228, 228, 0.4);
  animation: lightWave 6s linear infinite;
}
@keyframes lightWave{
  0%{
    transform: translate(-50%,-60%) rotate(0deg);
  }
  100%{
    transform: translate(-50%,-60%) rotate(360deg);
  }
}
</style>
