<template>
  <div ref="table1">
    <el-row >
      <el-col :span="4" class="title"><i class="el-icon-bell"></i> 报警事件</el-col>
      <el-col>
        <el-table :data="tableData" :header-cell-style="headerStyle" class="alertTable" >
          <el-table-column label="报警事件" prop="event"></el-table-column>
          <el-table-column label="报警时间" prop="time">
            <template slot-scope="scope">{{getDateFormat(scope.row.time)}}</template>
          </el-table-column>
          <el-table-column label="状态" prop="state" width="90px">
            <template slot-scope="scope">
              <div :class="getClassStyle(scope.row.state)">{{scope.row.state}}</div>
            </template>
          </el-table-column>
          <el-table-column label="通知方式" prop="notificationMethod"></el-table-column>
          <el-table-column label="通知对象" prop="notificationObject"></el-table-column>
          <el-table-column label="持续时间" prop="timeSequence"></el-table-column>
          <el-table-column label="报警级别" prop="level">
            <template slot-scope="scope" >
              <el-tag :type="scope.row.type" effect="plain" size="mini">{{scope.row.level}}</el-tag>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
      <el-col>
        <el-pagination
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="pageInfo.currentPage"
            :page-sizes="[5, 10, 15, 20]"
            :page-size="pageInfo.pageSize"
            layout="total, prev, pager, next, sizes, jumper"
            :total="pageInfo.total">
        </el-pagination>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "AlertEventTable",
  data(){
    return{
      pageInfo:{
        currentPage: 1,
        total: 0,
        pageSize: 5,
      },
      tableData:[],
      alertEventData:[
        {
          event:'CPU预警',
          time: 1660115767247,
          state: '持续',
          notificationMethod: '站内消息',
          notificationObject: '盖聂',
          timeSequence: '10min',
          level: '立即解决',
          type: 'danger',
        },
        {
          event:'CPU预警',
          time: 1650459600000,
          state: '关闭',
          notificationMethod: '站内消息',
          notificationObject: '卫庄',
          timeSequence: '20min',
          level: '稍后解决',
          type: 'warning',
        },
        {
          event:'CPU预警',
          time: 1650459600000,
          state: '关闭',
          notificationMethod: '站内消息',
          notificationObject: '荆天明',
          timeSequence: '30min',
          level: '持续关注',
          type: '',
        },
        {
          event:'CPU预警',
          time: 1650459600000,
          state: '持续',
          notificationMethod: '站内消息',
          notificationObject: '高月',
          timeSequence: '40min',
          level: '立即解决',
          type: 'danger',
        },
        {
          event:'CPU预警',
          time: 1650459600000,
          state: '关闭',
          notificationMethod: '站内消息',
          notificationObject: '项少羽',
          timeSequence: '50min',
          level: '持续关注',
          type: '',
        },
        {
          event:'CPU预警',
          time: 1650459600000,
          state: '关闭',
          notificationMethod: '站内消息',
          notificationObject: '韩非',
          timeSequence: '1h',
          level: '稍后解决',
          type: 'warning',
        },
      ],
      headerStyle: {'background':' #EBEEF5'},
      height: '',
    }
  },
  watch: {
    // height() {
    //   this.height = this.$refs.table1.$el.clientHeight;
    //   console.log('高度：',this.height)
    // }
  },
  mounted() {
    this.$nextTick(() =>{
      //你的代码部分
      this.height = this.$refs.table1;
      console.log('hhh',this.$refs.table1.clientHeight)
    })
  },
  created() {
    this.getTableData();
  },
  methods:{
    //日期格式化
    getDateFormat(time) {
      let newTime = new Date(time);
      let year = newTime.getFullYear();
      let month = newTime.getMonth() + 1;
      let day = newTime.getDate();
      newTime = newTime / 1000;
      let hour = parseInt(newTime / 60 / 60 % 24);
      hour = hour < 10 ? '0' + hour : hour;
      let minute = parseInt(newTime / 60 % 60);
      minute = minute < 10 ? '0' + minute : minute;
      let second = parseInt(newTime % 60);
      second = second < 10 ? '0' + second : second;
      let result = `${year}-${month}-${day} ${hour}:${minute}:${second}`;
      return result;
    },
    getClassStyle(state) {
      if(state === '持续'){
        return 'pointContinue';
      }else {
        return 'pointClose';
      }
    },
    getTableData(){
      this.tableData = [];
      this.pageInfo.total = this.alertEventData.length;
      let len = this.alertEventData.length;
      let startNum = 0;
      let endNum = len < this.pageInfo.currentPage * this.pageInfo.pageSize ? len : this.pageInfo.currentPage * this.pageInfo.pageSize;
      for(let i = startNum; i < endNum; i ++){
        this.tableData.push(this.alertEventData[i]);
      }
      console.log(startNum,endNum);
    },
    //页面尺寸
    handleSizeChange(val) {
      //回到第一页
      this.pageInfo.currentPage = 1;
      this.pageInfo.pageSize = val;
      this.getTableData();
      console.log(`每页 ${val} 条`);
      this.$nextTick(() =>{
        //你的代码部分
        this.height = this.$refs.table1.$el.clientHeight;
        console.log('hhh',this.height)
      })
    },
    //换页
    handleCurrentChange(val) {
      this.tableData = [];
      this.pageInfo.currentPage = val;
      let len = this.alertEventData.length;
      let startNum = (val - 1) * this.pageInfo.pageSize;
      let endNum = len < val * this.pageInfo.pageSize ? len : val * this.pageInfo.pageSize;
      for(let i = startNum; i < endNum; i ++){
        this.tableData.push(this.alertEventData[i]);
      }
      console.log(startNum,endNum);
      console.log(`当前页: ${val}`);
      this.$nextTick(() =>{
        //你的代码部分
        this.height = this.$refs.table1.$el.clientHeight;
        console.log('hhh',this.height)
      })
    }
  }
}
</script>

<style scoped>
.title{
  text-align: left;
}
.alertTable{
  margin-top: 20px;
}
/*伪元素实现小圆点*/
.pointContinue:before{
  content: '';
  display: inline-block;
  /*border: 1px solid royalblue;*/
  border-radius: 50%;
  margin-right: 10px;
  width: 8px;
  height: 8px;
  background: #4169E1FF;
}
.pointClose:before{
  content: '';
  display: inline-block;
  /*border: 1px solid royalblue;*/
  border-radius: 50%;
  margin-right: 10px;
  width: 8px;
  height: 8px;
  background: orange;
}
</style>
