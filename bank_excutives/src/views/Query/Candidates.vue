<template>
  <div>
    <el-row>
      <el-col>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleCandidatesCategoryMenuSelect" active-text-color="#D3002C">
          <el-menu-item v-for="item in candidatesCategoryMenu" :index="item.index" :key="item.index">{{ item.text }}</el-menu-item>
        </el-menu>
      </el-col>
      <el-col>
        <el-form :model="candidateQueryForm" ref="candidateQueryForm" label-position="right" label-width="100px" size="small">
          <el-row>
            <el-col :span="8">
              <el-form-item label="姓名" prop="name">
                <el-input v-model="candidateQueryForm.name" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="性别" prop="sex">
                <el-radio-group size="small" v-model="candidateQueryForm.sex" class="radioButtonGroup">
                  <el-radio-button :label="null" class="radioBtn">全部</el-radio-button>
                  <el-radio-button label="男">男</el-radio-button>
                  <el-radio-button label="女">女</el-radio-button>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="政治面貌" prop="politicalStatus">
                <el-select v-model="candidateQueryForm.politicalStatus" placeholder="请选择">
                  <el-option v-for="item in politicalStatusCategories"
                             :key="item.index"
                             :label="item.label"
                             :value="item.label">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="学历" prop="academicDegree">
                <el-select v-model="candidateQueryForm.academicDegree" placeholder="请选择">
                  <el-option v-for="item in academicDegreeCategories"
                             :key="item.index"
                             :label="item.label"
                             :value="item.label">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="籍贯" prop="nativePlace">
                <el-input v-model="candidateQueryForm.nativePlace" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="出生日期" prop="birth">
                <el-date-picker
                    v-model="candidateQueryForm.birth"
                    type="date"
                    popper-class="test"
                    placeholder="选择日期"
                    format="yyyy 年 MM 月 dd 日"
                    value-format="yyyy-MM-dd">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="专业领域" prop="professionalField">
                <el-select v-model="candidateQueryForm.professionalField" placeholder="请选择">
                  <el-option v-for="item in professionalFieldCategories"
                             :key="item.index"
                             :label="item.label"
                             :value="item.label">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="所属地域" prop="belongingRegion">
                <el-input v-model="candidateQueryForm.belongingRegion" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="拟担任职位" prop="proposedPosition">
                <el-select v-model="candidateQueryForm.proposedPosition" placeholder="请选择">
                  <el-option v-for="item in proposedPositionCategories"
                             :key="item.index"
                             :label="item.label"
                             :value="item.label">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="所属机构" prop="affiliatedOrganization">
                <el-select v-model="candidateQueryForm.affiliatedOrganization" placeholder="请选择">
                  <el-option v-for="item in affiliatedOrganizationCategories"
                             :key="item.index"
                             :label="item.label"
                             :value="item.label">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="现任职级" prop="currentRank">
                <el-select v-model="candidateQueryForm.currentRank" placeholder="请选择">
                  <el-option v-for="item in currentRankCategories"
                             :key="item.index"
                             :label="item.label"
                             :value="item.label">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="出库状态" prop="outboundStatus">
                <el-select v-model="candidateQueryForm.outboundStatus" placeholder="请选择">
                  <el-option v-for="item in outboundStatusCategories"
                             :key="item.index"
                             :label="item.label"
                             :value="item.label">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
              <el-form-item style="display: flex; justify-content: flex-end; width: 85vw">
                <el-tooltip class="item" effect="dark" content="若无数据，可点击“重置”按钮" placement="left">
                  <i class="el-icon-warning-outline" style="margin-right: 10px"></i>
                </el-tooltip>
                <el-button type="primary" size="small" class="queryButton" @click="handleQueryForm">查询</el-button>
                <el-button size="small" class="resetButton" @click="resetForm('candidateQueryForm')">重置</el-button>
              </el-form-item>
          </el-row>
        </el-form>
      </el-col>
      <el-col style="width: 85vw;display: flex; justify-content: flex-end">
        <el-button size="small" style="margin-top: 1em">简历导出</el-button>
      </el-col>
      <el-col>
        <el-table :header-cell-style="header_cell_style" :data="queryDataByForm">
          <el-table-column prop="name" label="姓名"></el-table-column>
          <el-table-column prop="sex" label="性别"></el-table-column>
          <el-table-column prop="nationality" label="国籍"></el-table-column>
          <el-table-column prop="professionalField" label="专业领域"></el-table-column>
          <el-table-column prop="currentPosition" label="现任职位"></el-table-column>
          <el-table-column prop="affiliatedOrganization" label="所属机构"></el-table-column>
          <el-table-column label="匹配岗位数">
            <template slot-scope="scope">
              <div style="text-align: right">{{scope.row.numberOfMatchingPosts}}</div>
            </template>
          </el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                  size="mini"
                  type="text"
                  style="color: #D3002C"
                  @click="handleCheck(scope.row)">查看</el-button>
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
      <el-col>
        <el-menu :default-active="activeQueryModeIndex" class="el-menu-demo" mode="horizontal" @select="handleChartQueryModeSelect" active-text-color="#D3002C">
          <el-menu-item v-for="item in chartQueryMode" :index="item.index" :key="item.index">{{ item.label }}</el-menu-item>
        </el-menu>
      </el-col>
      <el-col style="width: 85vw;display: flex; justify-content: flex-end">
        <el-button size="small" style="margin-top: 1em;margin-bottom: 1em">图表导出</el-button>
      </el-col>
      <el-col :span="10">
        <el-scrollbar style="height: 500px">
          <el-table :header-cell-style="header_cell_style"
                    :summary-method="getSummaries"
                    show-summary
                    :data="chartQueryModeTableData"
                    >
            <el-table-column label="序号" type="index"></el-table-column>
            <el-table-column prop="item" :label="chartQueryModeName"></el-table-column>
            <el-table-column prop="num" label="人数" sortable></el-table-column>
            <el-table-column prop="percentage" label="占比%">
              <template slot-scope="scope">
                {{Math.round(scope.row.num / pageInfo.total * 10000 ) / 100}}
              </template>
            </el-table-column>
          </el-table>
        </el-scrollbar>
      </el-col>
      <el-col :span="14">
        <div class="chartCard">
          <el-scrollbar style="height: 500px">
            <bar-chart style="width: 100%" :chart-data="chartData" :chart-height="chartHeight"></bar-chart>
          </el-scrollbar>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import BarChart from '../../components/BarChart';
export default {
  name: "QualifiedCandidates",
  components: {
    BarChart,
  },
  data() {
    return{
      //合格人选类别
      activeIndex: '0',
      candidatesCategoryMenu:[
        {
          index: '0',
          text:'大中型银行高管合格人选',
        },
        {
          index: '1',
          text:'外资银行高管人员合格人选',
        },
        {
          index: '2',
          text:'独立董事合格人选',
        },
        {
          index: '3',
          text:'外部监事合格人选',
        },
      ],
      //查询表单
      candidateQueryForm:{
        name: null,
        sex: null,
        politicalStatus: null,
        academicDegree: null,
        nativePlace: null,
        birth: null,
        professionalField: null,
        belongingRegion: null,
        proposedPosition: null,
        affiliatedOrganization: null,
        currentRank: null,
        outboundStatus: null,
      },
      //选择器下拉菜单内容
      politicalStatusCategories:[],
      academicDegreeCategories:[],
      professionalFieldCategories:[],
      proposedPositionCategories:[],
      affiliatedOrganizationCategories:[],
      currentRankCategories:[],
      outboundStatusCategories:[
        {
          index: '0',
          label: '状态0',
        },
        {
          index: '1',
          label: '状态1',
        },
        {
          index: '2',
          label: '状态2',
        },
      ],
      //样式
      header_cell_style:{
        'background-color': '#F4F4F5',
        color: '#303133',
    },
      //表格数据
      queryDataByForm: [],
      //分页
      pageInfo:{
        currentPage: 1,
        total: 0,
        pageSize: 5,
      },
      //按xx查询渲染表格和chart
      activeQueryModeIndex: 'affiliatedOrganization',
      chartQueryMode: [
        {
          index: 'affiliatedOrganization',
          label: '按机构',
        },
        {
          index: 'politicalStatus',
          label: '按政治面貌',
        },
        {
          index: 'proposedPosition',
          label: '按拟任职位',
        },
        {
          index: 'currentRank',
          label: '按现任职级',
        },
        {
          index: 'currentPosition',
          label: '按历任职位',
        },
        {
          index: 'professionalField',
          label: '按专业领域',
        },
        {
          index: 'ageStructure',
          label: '按年龄结构',
        },
        {
          index: 'belongingRegion',
          label: '按地域',
        },
      ],
      //第二个表格
      chartQueryModeName: '机构',
      chartQueryModeTableData:[],
      //请求参数
      queryParams: {},
    //  第二个表格的请求参数
      modeParams: {},
    //  chart数据
      chartData: [[],[]],
      chartHeight: '500px',
    }
  },
  methods: {
    //第一个菜单选择，合格人选的类别
    handleCandidatesCategoryMenuSelect(key){
      this.activeIndex = key;
      this.getCandidatesData();
      console.log(key);
    },
    //第二个菜单选择，按xx划分
    handleChartQueryModeSelect(key){
      this.activeQueryModeIndex = key;
      //处理表头名称
      this.chartQueryMode.forEach((item) => {
        if(item.index === key){
          this.chartQueryModeName = item.label.slice(1);
        }
      })
      this.getChartQueryModeTableData();
    },
    //查询
    handleQueryForm(){
      this.getCandidatesData();
      console.log(this.candidateQueryForm);
    },
    //重置
    resetForm(formName){
      this.$refs[formName].resetFields();
      this.getCandidatesData();
    },
    //“查看"按钮
    handleCheck(row){
      console.log(row);
    },
    //页面尺寸
    handleSizeChange(val) {
      //回到第一页
      this.pageInfo.currentPage = 1;
      this.pageInfo.pageSize = val;
      this.getCandidatesData();
    },
    //换页
    handleCurrentChange(val) {
      this.pageInfo.currentPage = val;
      this.getCandidatesData();
    },
    //获取“政治面貌”选项列表
    getPoliticalStatusCategories() {
      this.$store.dispatch('Candidates/getPoliticalStatusCategories')
      .then( (res) => {
        this.politicalStatusCategories = res.data;
      })
    },
    //学历
    getAcademicDegreeCategories() {
      this.$store.dispatch('Candidates/getAcademicDegreeCategories')
      .then( (res) => {
        this.academicDegreeCategories = res.data;
      })
    },
    //专业领域
    getProfessionalFieldCategories() {
      this.$store.dispatch('Candidates/getProfessionalFieldCategories')
          .then( (res) => {
            this.professionalFieldCategories = res.data;
          })
    },
    //拟任职位
    getProposedPositionCategories(){
      this.$store.dispatch('Candidates/getProposedPositionCategories')
          .then( (res) => {
            this.proposedPositionCategories = res.data;
          })
    },
    //所属机构
    getAffiliatedOrganizationCategories(){
      this.$store.dispatch('Candidates/getAffiliatedOrganizationCategories')
          .then( (res) => {
            this.affiliatedOrganizationCategories = res.data;
          })
    },
    //现任职级
    getCurrentRankCategories(){
      this.$store.dispatch('Candidates/getCurrentRankCategories')
          .then( (res) => {
            this.currentRankCategories = res.data;
          })
    },
    getCandidatesData(){
      this.queryParams = {
        ...this.pageInfo,
        ...this.candidateQueryForm,
        type: this.activeIndex
      };
      this.$store.dispatch('Candidates/getCandidatesData', this.queryParams)
          .then( (res) => {
            this.queryDataByForm = res.data;
            this.pageInfo.total = parseInt(res.headers["x-total-count"]);
          })
    },
    //总计
    getSummaries(param){
      const { columns } = param;
      const sums = [];
      columns.forEach((column, index) => {
        if (index === 0) {
          sums[index] = '总计';
          return;
        } else if (index === 1) {
          sums[index] = this.chartQueryModeTableData.length;
          // this.chartData[0].push(column.item);
          // this.chartData[1].push(column.num);
        } else if (index === 2) {
          sums[index] = this.pageInfo.total;
        }
      })
      // console.log(this.chartData);
      return sums;
    },
    getChartQueryModeTableData(){
      this.chartData = [[],[]];
      this.modeParams.type = this.activeIndex;
      this.modeParams.division = this.activeQueryModeIndex;
      this.$store.dispatch('Candidates/getChartQueryModeTableData', this.modeParams)
          .then((res) => {
            this.chartQueryModeTableData = res;
            // console.log('res:',typeof res);
            // console.dir(this.chartQueryModeTableData.length)
            for(let i = 0; i < res.length; i ++){
              this.chartData[0].push(this.chartQueryModeTableData[i].item);
              this.chartData[1].push(this.chartQueryModeTableData[i].num);
            }
            this.chartHeight = this.chartData[0].length * 50 > 600 ? this.chartData[0].length * 50 + 'px' : '600px';
            // console.log(this.chartData.length)
          })
    },
  },
  created() {
    //选择器下拉菜单数据
    this.getPoliticalStatusCategories();
    this.getAcademicDegreeCategories();
    this.getProfessionalFieldCategories();
    this.getProposedPositionCategories();
    this.getAffiliatedOrganizationCategories();
    this.getCurrentRankCategories();
    //第一个表格数据
    this.getCandidatesData();
  //  第二个表格数据
    this.getChartQueryModeTableData();

  },
}
</script>

<style scoped>
.el-menu--horizontal>.el-menu-item{
  color: black;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
}
.el-menu-item{
  padding: 0;
  margin-right: 40px;
}
form{
  margin-top: 1em;
  border-bottom: solid 1px #e6e6e6;
}
/*表单项*/
.el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{
  width: 25vw;
}
/*输入框*/
/deep/ .el-input--small .el-input__inner{
  width: 16vw;
}
/*按钮组*/
/deep/ .el-radio-button__orig-radio:checked+.el-radio-button__inner{
  background-color: #D3002C;
  border-color: #D3002C;
  width: 6vw !important;
  box-shadow: -1px 0 0 0 #D3002C;
}
/deep/ .el-radio-button__orig-radio:checked+.el-radio-button__inner:hover{
  color: white;
  background-color: rgba(211, 0, 44, 0.8);
}
/deep/ .el-radio-button--small .el-radio-button__inner{
  width: 5vw;
}
/deep/ .el-radio-button__inner:hover{
  color: #D3002C;
}
.el-button--primary{
  background-color: #D3002C;
  border-color: #D3002C;
}
/deep/ .el-button--text,.el-button--text:hover{
  border: unset;
  background: transparent!important;
}
/*表单里面的两个按钮*/
.queryButton:focus, .queryButton:hover{
  background-color: rgba(211, 0, 44, 0.8) !important;
  border-color: rgba(211, 0, 44, 0.8) !important;
  color: white !important;
}
.resetButton:focus, .resetButton:hover{
  background-color: #EECAD2CC;
  border-color: #D3002C;
  color: #D3002C;
}
/*简历导出，图表导出两个按钮*/
.el-button:focus, .el-button:hover{
  background-color: #EECAD2CC;
  border-color: #D3002C;
  color: #D3002C;
}
/*输入框获取焦点后边框变色*/
/deep/.el-input__inner:focus{
  border-color: #D3002C;
}
/*选择框获取焦点时*/
/deep/ .el-select .el-input.is-focus .el-input__inner{
  border:1px solid #D3002C;
}
/*选择框选中选项的高亮*/
.el-select-dropdown__item.selected{
  color: #D3002C;
}
/*日期选择器的长度改变*/
.el-date-editor.el-input, .el-date-editor.el-input__inner{
  width: inherit;
}
/*分页*/
.el-pagination{
  margin-bottom: 2em;
}
/deep/ .el-pager li.active{
  color: white;
  background: black;
  border-color: black;
  width: 28px;
}
/deep/ .el-pager li:hover{
  color: #D3002C;
}
/deep/ .el-pagination button:hover{
  color: #D3002C;
}
/deep/ .el-pagination__sizes .el-input .el-input__inner:hover{
  border-color: #D3002C;
}
/*charts*/
.chartCard{
  /*margin-top: 1em;*/
  margin-left: 2em;
  border: solid 1px #e6e6e6;
  border-radius: 3px;
  height: 500px;
}
/*表格底行*/
/deep/ .el-table__footer-wrapper tbody td.el-table__cell{
  background-color: #F4F4F5;
}
/*隐藏水平滚动条*/
/deep/ .el-scrollbar__wrap {
  overflow-x: hidden;
}
</style>
