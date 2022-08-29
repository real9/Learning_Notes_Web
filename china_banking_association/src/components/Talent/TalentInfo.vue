<template>
<el-row>
  <el-col :span="18" class="main">
    <p>照片</p>
    <p>类别</p>
<!--      <el-form-item label="照片" prop=""></el-form-item>-->
<!--      <el-form-item label="类别" prop=""></el-form-item>-->
      <hr/>
      <el-form ref="form" :model="talentForm" size="small" label-position="top" :inline="true">
      <p>基本信息</p>
      <el-row>
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
                  label="1"
                  value="1">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>

        <el-col :span="12">
          <el-form-item label="证件类型" prop="">
            <el-select v-model="talentForm.basicInfo.idCardType" placeholder="请选择">
              <el-option
                  label="1"
                  value="1">
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
                  label="1"
                  value="1">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="民族" prop="">
            <el-select v-model="talentForm.basicInfo.ethnicGroup" placeholder="请选择">
              <el-option
                  label="1"
                  value="1">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="籍贯" prop="">
            <!--            <el-cascader-->
            <!--                v-model="talentForm.basicInfo.nativePlace"-->
            <!--                :options="options"-->
            <!--                @change="handleChange"></el-cascader>-->
            <el-cascader
                v-model="talentForm.basicInfo.nativePlace"
                ></el-cascader>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="婚姻状况" prop="">
            <el-select v-model="talentForm.basicInfo.maritalStatus" placeholder="请选择">
              <el-option
                  label="1"
                  value="1">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
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
                  label="1"
                  value="1">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="学位" prop="">
            <el-select v-model="talentForm.basicInfo.diploma" placeholder="请选择">
              <el-option
                  label="1"
                  value="1">
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

      <p>教育经历</p>
      <el-row>
        <el-col>
          <el-form-item label="学校名称" prop="" >
            <el-input v-model="talentForm.educationExperience[0].schoolName" class="wholeLine"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="学历" prop="">
            <el-select v-model="talentForm.educationExperience[0].degree" placeholder="请选择">
              <el-option
                  label="1"
                  value="1">
              </el-option>
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="专业名称" prop="">
            <el-input v-model="talentForm.educationExperience[0].subject"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="开始时间" prop="">
            <el-date-picker
                v-model="talentForm.educationExperience[0].startTime"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
<!--        <el-col class="line" :span="2">-</el-col>-->
        <el-col :span="12">
          <el-form-item label="结束时间" prop="">
            <el-date-picker
                v-model="talentForm.educationExperience[0].endTime"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="" prop="">+增加教育经历</el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="" prop="">垃圾桶</el-form-item>
        </el-col>
      </el-row>

      <p>工作履历</p>
      <el-row>
        <el-col>
          <el-form-item label="公司名称" prop="" class="wholeLine">
            <el-input v-model="talentForm.trackRecord[0].companyName"></el-input>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="职位名称" prop="" class="wholeLine">
            <el-input v-model="talentForm.trackRecord[0].job"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="开始时间" prop="">
            <el-date-picker
                v-model="talentForm.trackRecord[0].startTime"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="结束时间" prop="">
            <el-date-picker
                v-model="talentForm.trackRecord[0].endTime"
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
                v-model="talentForm.trackRecord[0].jobResponsibility"
                >
            </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <p>资格证书</p>
      <el-row>
        <el-col>
          <el-form-item label="证书名称" prop="" >
            <el-input v-model="talentForm.certificates[0].certificateName" class="wholeLine"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="证书号" prop="">
            <el-input v-model="talentForm.certificates[0].certificateNumber"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="12">
          <el-form-item label="获得时间" prop="">
            <el-date-picker
                v-model="talentForm.trackRecord[0].getTime"
                type="date"
                placeholder="选择日期">
            </el-date-picker>
          </el-form-item>
        </el-col>
        <el-col>
          <el-form-item label="" prop="">按钮</el-form-item>
        </el-col>
      </el-row>

      <p>履职评价</p>
      <el-row>
        <el-col>
          <el-form-item label="参加董事会情况" prop="" >
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

        <p>奖惩信息</p>
        <el-col :span="12">
          <el-form-item label="奖惩类型" prop="">
            <el-select v-model="talentForm.rewardOrPunishment.type" placeholder="请选择">
              <el-option
                  label="1"
                  value="1">
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
          <el-form-item label="奖惩原因" prop="" >
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
  <el-col :span="6"></el-col>
</el-row>
</template>

<script>
export default {
  name: "TalentInfo",
  data(){
    return{
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
}
/*表单项*/
.el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{
  width: 16vw;
}
/deep/ .el-input--small .el-input__inner{
  width: 16vw;
}
/*整行*/
/deep/ .wholeLine .el-input__inner{
  width: 33.5vw;
}
/*文本域*/
/deep/ .el-textarea .el-input__count{
  background: none;
  position: absolute;
  bottom: 0em;
  right: -24em;
}
/deep/ .el-textarea__inner:focus{
  border-color: #AD002B;
}
/deep/ .el-textarea__inner{
  width: 33.5vw!important;
}
/*输入框获取焦点后边框变色*/
/deep/.el-input__inner:focus{
  border-color: #AD002B;
}
/*选择框获取焦点时*/
/deep/ .el-select .el-input.is-focus .el-input__inner{
  border:1px solid #AD002B;
}
/*选择框选中选项的高亮*/
.el-select-dropdown__item.selected{
  color: #AD002B;
}
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
</style>
