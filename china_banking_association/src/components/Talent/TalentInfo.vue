<template>
<div>
  <el-col :span="18" class="main">
    <el-row ref="top">
      <el-col class="uploadBox">
        <el-upload
            class="avatar-uploader"
            action=""
            :http-request="httpRequestOfImage"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload"
            >
          <img v-if="imageUrl" :src="imageUrl" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <div class="upLoadText">
          <el-button  size="large" type="text">上传照片</el-button>
          <div>只支持上传jpg/png文件，且不超过600kb</div>
        </div>

      </el-col>
      <el-col style="text-align: left">
        <h3 >人才维护</h3>
        <p>人才类型</p>
        <el-select v-model="talentType" placeholder="请选择" size="small">
          <el-option
              v-for="item in candidateTypes"
              :label="item.label"
              :key="item.index"
              :value="item.index">
          </el-option>
        </el-select>
      </el-col>
    </el-row>

    <hr/>
    <el-form ref="form" :model="talentForm" label-position="top" :inline="true">

      <el-row ref="basicInformation">
        <h4 id="basicInformation">基本信息</h4>
        <div class="headLine"></div>
        <el-row>
          <el-col :span="12">
            <el-form-item label="姓名" prop="">
              <el-input v-model="talentForm.basicInfo.name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="性别" prop="">
              <el-radio-group v-model="talentForm.basicInfo.sex">
                <el-radio label="male">先生</el-radio>
                <el-radio label="female">女士</el-radio>
              </el-radio-group>
            </el-form-item>
          </el-col>
        </el-row>

        <el-col :span="12">
          <el-form-item label="出生日期" prop="" style="display: inline; white-space:nowrap">
            <el-date-picker
                v-model="talentForm.basicInfo.birth"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="政治面貌" prop="" style="display: inline; white-space:nowrap">
            <el-select v-model="talentForm.basicInfo.politicalStatus" placeholder="请选择">
              <el-option
                  v-for="item in politicalStatus"
                  :label="item.label"
                  :key="item.index"
                  :value="item.index">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="证件类型" prop="">
            <el-select v-model="talentForm.basicInfo.idCardType" placeholder="请选择">
              <el-option
                  v-for="item in idType"
                  :label="item.label"
                  :key="item.index"
                  :value="item.index">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="证件号码" prop="">
            <el-input v-model="talentForm.basicInfo.idCardNum"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="国籍" prop="">
            <el-select v-model="talentForm.basicInfo.nationality" placeholder="请选择">
              <el-option
                  v-for="item in nationality"
                  :label="item.label"
                  :key="item.index"
                  :value="item.index">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="民族" prop="">
            <el-select v-model="talentForm.basicInfo.ethnicGroup" placeholder="请选择">
              <el-option
                  v-for="item in ethnicGroup"
                  :label="item.label"
                  :key="item.index"
                  :value="item.index">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="籍贯" prop="">
<!--                        <el-cascader-->
<!--                            v-model="talentForm.basicInfo.nativePlace"-->
<!--                            :options="nativePlace"-->
<!--                            @change="handleChange"></el-cascader>-->
            <el-cascader
                v-model="talentForm.basicInfo.nativePlace"
                :options="nativePlace"
                :popper-append-to-body="false"
                separator=""
            ></el-cascader>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="婚姻状况" prop="">
            <el-select v-model="talentForm.basicInfo.maritalStatus" placeholder="请选择">
              <el-option
                  v-for="item in maritalStatus"
                  :label="item.label"
                  :key="item.index"
                  :value="item.index">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <div>
          <el-col :span="12">
            <el-form-item label="联系方式" prop="">
              <el-input v-model="talentForm.basicInfo.telephoneNum"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="参加工作时间" prop="">
              <el-date-picker
                  v-model="talentForm.basicInfo.joinWorkTime"
                  type="date"
                  placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
        </div>
        <el-col :span="12">
          <el-form-item label="现任单位" prop="">
            <el-input v-model="talentForm.basicInfo.currentUnit"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="所在部门" prop="">
            <el-input v-model="talentForm.basicInfo.department"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="职务" prop="">
            <el-input v-model="talentForm.basicInfo.job"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="职称" prop="">
            <el-input v-model="talentForm.basicInfo.professionalTitle"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="学历" prop="">
            <el-select v-model="talentForm.basicInfo.academicDegree" placeholder="请选择">
              <el-option
                  v-for="item in academicDegree"
                  :label="item.label"
                  :key="item.index"
                  :value="item.index">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="学位" prop="">
            <el-select v-model="talentForm.basicInfo.diploma" placeholder="请选择">
              <el-option
                  v-for="item in diploma"
                  :label="item.label"
                  :key="item.index"
                  :value="item.index">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="专业" prop="">
            <el-input v-model="talentForm.basicInfo.subject"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="银行独董累计任职年限" prop="">
            <el-input v-model="talentForm.basicInfo.termLength"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="目前担任独董的银行数量" prop="">
            <el-input v-model="talentForm.basicInfo.bankNum"></el-input>
          </el-form-item>
        </el-col>
      </el-row>


      <el-row ref="educationExperience">
        <h4 id="educationExperience">教育经历</h4>
        <div class="headLine"></div>
        <div v-for="(item, index) in talentForm.educationExperience" :key="index">
          <el-col>
            <el-form-item label="学校名称" prop="">
              <el-input v-model="item.schoolName" class="wholeLine"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="学历" prop="">
              <el-select v-model="item.degree" placeholder="请选择">
                <el-option
                    label="1"
                    value="1">
                </el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="专业名称" prop="">
              <el-input v-model="item.subject"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="开始时间" prop="">
              <el-date-picker
                  v-model="item.startTime"
                  type="date"
                  placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <!--        <el-col class="line" :span="2">-</el-col>-->
          <el-col :span="12">
            <el-form-item label="结束时间" prop="">
              <el-date-picker
                  v-model="item.endTime"
                  type="date"
                  placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="" prop="">
              <el-button type="text" @click="addEduExp">
                <el-icon class="el-icon-plus"></el-icon>
                增加教育经历
              </el-button>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="" prop="" style="text-align: right">
              <el-button type="text" @click="deleteEduExp(index)">
                <el-icon class="el-icon-delete"></el-icon>
              </el-button>
            </el-form-item>
          </el-col>
        </div>
      </el-row>


      <el-row ref="jobExperience">
        <h4 id="jobExperience">工作履历</h4>
        <div class="headLine"></div>
        <div v-for="(item, index) in talentForm.trackRecord" :key="index">
          <el-col>
            <el-form-item label="公司名称" prop="" class="wholeLine">
              <el-input v-model="item.companyName"></el-input>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="职位名称" prop="" class="wholeLine">
              <el-input v-model="item.job"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="开始时间" prop="">
              <el-date-picker
                  v-model="item.startTime"
                  type="date"
                  placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="结束时间" prop="">
              <el-date-picker
                  v-model="item.endTime"
                  type="date"
                  placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col>
            <el-form-item label="工作内容" prop="">
              <el-input
                  type="textarea"
                  autosize
                  maxlength="1500"
                  show-word-limit
                  placeholder="请输入内容"
                  v-model="item.jobResponsibility"
              >
              </el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="" prop="">
              <el-button type="text" @click="addJobExp">
                <el-icon class="el-icon-plus"></el-icon>
                增加工作履历
              </el-button>
            </el-form-item>
          </el-col>
        </div>
      </el-row>


      <el-row ref="certification">
        <h4 id="certification">资格证书</h4>
        <div class="headLine"></div>
        <div v-for="(item, index) in talentForm.certificates" :key="index">
          <el-col>
            <el-form-item label="证书名称" prop="">
              <el-input v-model="item.certificateName" class="wholeLine"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="证书号" prop="">
              <el-input v-model="item.certificateNumber"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="获得时间" prop="">
              <el-date-picker
                  v-model="item.getTime"
                  type="date"
                  placeholder="选择日期">
              </el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="" prop="">
              <el-button type="text" @click="addCertificate">
                <el-icon class="el-icon-plus"></el-icon>
                增加资格证书
              </el-button>
            </el-form-item>
          </el-col>
        </div>

      </el-row>


      <el-row ref="evaluation">
        <h4 id="evaluation">履职评价</h4>
        <div class="headLine"></div>
        <el-col>
          <el-form-item label="参加董事会情况" prop="">
            <el-input
                type="textarea"
                autosize
                placeholder="请输入"
                v-model="talentForm.performanceEvaluation.attendance"
                maxlength="1500"
                show-word-limit
            >
            </el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="任职机构年度履职评价" prop=""></el-form-item>
        </el-col>
      </el-row>

      <el-row ref="rewardOrPunishmentInformation">
        <h4 id="rewardOrPunishmentInformation">奖惩信息</h4>
        <div class="headLine"></div>
        <el-col :span="12">
          <el-form-item label="奖惩类型" prop="">
            <el-select v-model="talentForm.rewardOrPunishment.type" placeholder="请选择">
              <el-option
                  v-for="item in rewardOrPunishment"
                  :label="item.label"
                  :key="item.index"
                  :value="item.index">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="奖惩名称" prop="">
            <el-input v-model="talentForm.rewardOrPunishment.name"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="奖惩时间" prop="">
            <el-date-picker
                v-model="talentForm.rewardOrPunishment.time"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="奖惩原因" prop="">
            <el-input
                type="textarea"
                autosize
                placeholder="请输入"
                v-model="talentForm.rewardOrPunishment.reason"
                maxlength="1500"
                show-word-limit
            >
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

    </el-form>

  </el-col>
  <el-col :span="4">
    <div class="rightBar">
      <div class="board">
        <div class="rightNavBar" ref="rightNavBar">
          <a href="#basicInformation" @click="getLink($event)" class="active">基本信息</a>
          <a href="#educationExperience" @click="getLink($event)">教育经历</a>
          <a href="#jobExperience" @click="getLink($event)">工作履历</a>
          <a href="#certification" @click="getLink($event)">资格证书</a>
          <a href="#evaluation" @click="getLink($event)">履职评价</a>
          <a href="#rewardOrPunishmentInformation" @click="getLink($event)">奖惩信息</a>
        </div>
      </div>
      <div class="btnGroup">
        <el-button type="primary" class="submit btn">提交</el-button>
        <el-button class="save btn">保存</el-button>
        <el-button class="cancel btn">取消</el-button>
      </div>
    </div>
  </el-col>
</div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: "TalentInfo",
  computed: {
    ...mapState(['candidateTypes', 'politicalStatus', 'idType', 'nationality', 'ethnicGroup', 'nativePlace', 'maritalStatus', 'academicDegree', 'diploma', 'rewardOrPunishment'])
  },
  data(){
    return{
      imageUrl: '',
      talentType: '',
      talentForm:{
        basicInfo:{
          name: '',
          sex: '',
          birth: '',
          politicalStatus: '',
          idCardType: '',
          idCardNum: '',
          nationality: '',
          ethnicGroup: '',
          nativePlace: '',
          maritalStatus: '',
          telephoneNum: '',
          joinWorkTime: '',
          currentUnit: '',
          department: '',
          job: '',
          professionalTitle: '',
          academicDegree: '',
          diploma: '',
          subject: '',
          termLength: '',
          bankNum: '',
        },

        educationExperience:[
          {
            schoolName: '',
            degree: '',
            subject: '',
            startTime: '',
            endTime: '',
          }
        ],

        trackRecord: [
          {
            companyName: '',
            job: '',
            startTime: '',
            endTime: '',
            jobResponsibility: '',
          }
        ],

        certificates:[
          {
            certificateName: '',
            certificateNumber: '',
            getTime: '',
          }],

        performanceEvaluation:{
          attendance: '',
          evaluationFile: '',
        },

        rewardOrPunishment:{
          type: '',
          name: '',
          time: '',
          reason: '',
        }
      },
    }
  },
  mounted() {
    let heights = [];
    this.$nextTick(() => {
      heights.push(this.$refs.top.$el.clientHeight);
      heights.push(this.$refs.basicInformation.$el.clientHeight + heights[0]);
      heights.push(this.$refs.educationExperience.$el.clientHeight + heights[1]);
      heights.push(this.$refs.jobExperience.$el.clientHeight + heights[2]);
      heights.push(this.$refs.certification.$el.clientHeight + heights[3]);
      heights.push(this.$refs.evaluation.$el.clientHeight + heights[4]);
      heights.push(this.$refs.rewardOrPunishmentInformation.$el.clientHeight + heights[5]);
    })
    window.onscroll = () => {
      let y = window.scrollY;
      for(let i = 0; i < this.$refs.rightNavBar.children.length; i ++){
        this.$refs.rightNavBar.children[i].className = '';
      }
      if (y <= heights[0]){
        this.$refs.rightNavBar.children[0].className = 'active';
      }else {
        for(let i = 1; i < heights.length; i ++){
          if(y > heights[i-1] && y < heights[i]){
            this.$refs.rightNavBar.children[i-1].className = 'active';
          }
        }
      }
    }
  },
  methods: {
    httpRequestOfImage(param){
      let fileObj = param.file; // 相当于input里取得的files
      let formData = new FormData(); // FormData 对象
      formData.append("file", fileObj); // 文件对象
      console.log(fileObj);
      this.imageUrl = 'https://www.docker.com/wp-content/uploads/2022/03/vertical-logo-monochromatic.png';
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = (file.type === 'image/jpeg' || file.type === 'image/png');
      const isLt2M = file.size / 1024 < 600;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG/PNG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 600KB!');
      }
      return isJPG && isLt2M;
    },
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
    },
    addEduExp(){
      this.talentForm.educationExperience.push({
        schoolName: '',
        degree: '',
        subject: '',
        startTime: '',
        endTime: '',
      })
    },
    deleteEduExp(index){
      if(this.talentForm.educationExperience.length === 1){
        this.$confirm('教育经历至少有一个')
      }else {
        this.talentForm.educationExperience.splice(index, 1)
      }
    },
    addJobExp(){
      this.talentForm.trackRecord.push({
        companyName: '',
        job: '',
        startTime: '',
        endTime: '',
        jobResponsibility: '',
      })
    },
    addCertificate(){
      this.talentForm.certificates.push({
        certificateName: '',
        certificateNumber: '',
        getTime: '',
      })
    }
  }
}
</script>

<style scoped>
.main{
  background-color: white;
  margin-left: 1em;
  margin-right: 1em;
  padding: 2em;
}
hr{
  border: none;
  border-bottom: 1px solid #e6e6e6;
  margin-right: 2em;
  margin-top: 1em;
}
h4{
  margin-bottom: unset;
}
.headLine{
  border-top: 2px solid #D3002C;
  width: 2em;
  margin-bottom: 1.33em;
  margin-top: 0.33em;
}
/*表单项*/
.el-form-item{
  width: 16vw;
}
/deep/ .el-input .el-input__inner{
  width: 16vw;
  height: 5vh;
}
/*整行*/
/deep/ .wholeLine .el-input__inner{
  width: 33.5vw;
}
/*文本域*/
/deep/ .el-textarea .el-input__count{
  background: none;
  position: absolute;
  bottom: 0;
  right: -17vw;
}
/deep/ .el-textarea__inner:focus{
  border-color: #AD002B;
}
/deep/ .el-textarea__inner{
  width: 33.5vw!important;
}
/*输入框获取焦点后边框变色*/
/deep/.el-input__inner:focus{
  border-color: #AD002B!important;
}
/*选择框获取焦点时*/
/deep/ .el-select .el-input.is-focus .el-input__inner{
  border:1px solid #AD002B;
}
/*选择框选中选项的高亮*/
.el-select-dropdown__item.selected{
  color: #AD002B;
}
/*级联选择器*/
/deep/ .el-cascader .el-input .el-input__inner:focus, .el-cascader .is-focus .el-input__inner{
  border-color: #AD002B!important;
}
.el-cascader .is-focus .el-input__inner{
  border-color: #AD002B!important;
}
/*/deep/ .el-select-small .el-input__inner {*/
/*  vertical-align: bottom !important;*/
/*}*/
/*radio*/
/deep/ .el-radio__inner:hover {
  border-color: #AD002B;
}
/deep/ .el-radio__input.is-checked .el-radio__inner{
  background-color: #D3002C;
  border-color: #D3002C;
}
/deep/ .el-radio__input.is-checked+.el-radio__label{
  color: #AD002B;
}
/*标签*/
/deep/ .el-form--label-top .el-form-item__label{
  padding-bottom: unset;
}
form{
  text-align: left;
  padding-right: 10vw;
}
/*照片上传*/
/*部分在全局样式中*/
.uploadBox{
  display: flex;
  align-items: flex-end;
}
.uploadBox .upLoadText{
  text-align: left;
  margin-left: 1em;
  margin-bottom: 1em;
}
.rightBar{
  background-color: transparent;
  position: fixed;
}
.rightBar .btnGroup{
  margin-top: 1em;
}
.rightBar .board{
  background-color: white;
  /*padding-left: 1em;*/
  padding-top: 2em;
  padding-bottom: 2em;
  width: 10vw;
}
.rightBar .board .rightNavBar{
  border-left: solid 1px #e6e6e6;
  margin-left: 1em;
  padding-top: 0.5em;
  padding-bottom: 0.5em;
}
.rightBar .board .rightNavBar a{
  text-align: left;
  padding-left: 1em;
  line-height: 2em;
  margin-bottom: 1em;
  color: #303133;
  display: block;
  text-decoration: unset;
  border-left: 2px solid transparent;
}
.rightBar .board .rightNavBar a:last-child{
  margin-bottom: 0!important;
}
.rightBar .board .rightNavBar a:link {
  text-decoration: none;
  border-left: 2px solid transparent;
}
.rightBar .board .rightNavBar a:visited {
  text-decoration: none;
  border-left: 2px solid transparent;
}
.rightBar .board .rightNavBar a:hover {
  color: #D3002C;
  text-decoration: none;
  border-left: 2px solid #D3002C;
  transition: border-left .3s,color .3s;
}
.rightBar .board .rightNavBar .active{
  border-left: 2px solid #D3002C!important;
  color: #D3002C;
  text-decoration: none;
  transition: border-left .3s,color .3s;
}

.rightBar .btnGroup .btn{
  width: 10vw;
  display: block;
  margin-bottom: 1em;
  margin-left: 0;
}
.rightBar .btnGroup .submit{
  background-color: #AD002B;
  border-color: #AD002B;
}
.rightBar .btnGroup .submit:hover{
  background-color: #D3002C;
  border-color: #D3002C;
  transition: border-color .3s,background-color .3s;
}
.rightBar .btnGroup .save{
  color: #AD002B;
  border-color: #AD002B;
  background-color: transparent;
}
.rightBar .btnGroup .save:hover{
  color: #D3002C;
  border-color: #D3002C;
  transition: border-color .3s,color .3s;
}
.rightBar .btnGroup .cancel{
  background-color: transparent;
  border-color: #8c939d;
}
.rightBar .btnGroup .cancel:hover{
  color: #D3002C;
  border-color: #D3002C;
  transition: border-color .3s,color .3s;
}
</style>
