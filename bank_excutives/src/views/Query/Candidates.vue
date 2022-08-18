<template>
  <div>
    <el-row>
      <el-col>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#D3002C">
          <el-menu-item v-for="item in candidatesCategoryMenu" :index="item.index" :key="item.index">{{ item.text }}</el-menu-item>
        </el-menu>
      </el-col>
      <el-col>
        <el-form :model="candidateQueryForm" ref="candidateQueryForm" label-position="right" label-width="100px" size="small">
          <el-row>
            <el-col :span="8">
              <el-form-item label="姓名">
                <el-input v-model="candidateQueryForm.name" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="性别">
                <el-radio-group size="small" v-model="candidateQueryForm.sex">
                  <el-radio-button label="全部">全部</el-radio-button>
                  <el-radio-button label="男">男</el-radio-button>
                  <el-radio-button label="女">女</el-radio-button>
                </el-radio-group>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="政治面貌">
                <el-select v-model="candidateQueryForm.politicalStatus" placeholder="请选择">
                  <el-option v-for="item in politicalStatusCategories"
                             :key="item.index"
                             :label="item.label"
                             :value="item.index">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="学历">
                <el-select v-model="candidateQueryForm.academicDegree" placeholder="请选择">
                  <el-option v-for="item in academicDegreeCategories"
                             :key="item.index"
                             :label="item.label"
                             :value="item.index">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="籍贯">
                <el-input v-model="candidateQueryForm.nativePlace" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="出生日期">
                <el-date-picker
                    v-model="candidateQueryForm.birth"
                    type="date"
                    popper-class="test"
                    placeholder="选择日期">
                </el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="专业领域">
                <el-select v-model="candidateQueryForm.professionalField" placeholder="请选择">
                  <el-option v-for="item in professionalFieldCategories"
                             :key="item.index"
                             :label="item.label"
                             :value="item.index">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="所属地域">
                <el-input v-model="candidateQueryForm.belongingRegion" placeholder="请输入"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="拟担任职位">
                <el-select v-model="candidateQueryForm.proposedPosition" placeholder="请选择">
                  <el-option v-for="item in proposedPositionCategories"
                             :key="item.index"
                             :label="item.label"
                             :value="item.index">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="所属机构">
                <el-select v-model="candidateQueryForm.affiliatedOrganization" placeholder="请选择">
                  <el-option v-for="item in affiliatedOrganizationCategories"
                             :key="item.index"
                             :label="item.label"
                             :value="item.index">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="现任职级">
                <el-select v-model="candidateQueryForm.currentRank" placeholder="请选择">
                  <el-option v-for="item in currentRankCategories"
                             :key="item.index"
                             :label="item.label"
                             :value="item.index">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="出库状态">
                <el-select v-model="candidateQueryForm.outboundStatus" placeholder="请选择">
                  <el-option v-for="item in outboundStatusCategories"
                             :key="item.index"
                             :label="item.label"
                             :value="item.index">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
<!--            <el-col :span="8" :offset="16">-->
              <el-form-item style="display: flex; justify-content: flex-end; width: 85vw">
                <el-button type="primary" size="small" class="queryButton">查询</el-button>
                <el-button size="small" class="resetButton">重置</el-button>
              </el-form-item>
<!--            </el-col>-->
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
        <el-menu :default-active="activeQueryModeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect" active-text-color="#D3002C">
          <el-menu-item v-for="item in queryMode" :index="item.index" :key="item.index">{{ item.label }}</el-menu-item>
        </el-menu>
      </el-col>
      <el-col style="width: 85vw;display: flex; justify-content: flex-end">
        <el-button size="small" style="margin-top: 1em">图表导出</el-button>
      </el-col>
      <el-col :span="10">
        <el-table :header-cell-style="header_cell_style">
          <el-table-column prop="" label="序号"></el-table-column>
          <el-table-column prop="" label="机构"></el-table-column>
          <el-table-column prop="" label="人数"></el-table-column>
          <el-table-column prop="" label="占比"></el-table-column>
        </el-table>
      </el-col>
      <el-col :span="14">
        <div class="chartCard">
<!--          <div class="chartTitle">menu1|menu2</div>-->
          <bar-chart style="width: 100%"></bar-chart>
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
      activeIndex: '1',
      candidatesCategoryMenu:[
        {
          index: '1',
          text:'大中型银行高管合格人选',
        },
        {
          index: '2',
          text:'外资银行高管人员合格人选',
        },
        {
          index: '3',
          text:'独立董事合格人选',
        },
        {
          index: '4',
          text:'外部监事合格人选',
        },
      ],
      candidateQueryForm:{
        name: '',
        sex: '全部',
        politicalStatus: '',
        academicDegree: '',
        nativePlace: '',
        birth: '',
        professionalField: '',
        belongingRegion: '',
        proposedPosition: '',
        affiliatedOrganization: '',
        currentRank: '',
        outboundStatus: '',
      },
      politicalStatusCategories:[
        {
          index: '0',
          label: '中共党员',
        },
        {
          index: '1',
          label: '中共预备党员',
        },
        {
          index: '2',
          label: '共青团员',
        },
        {
          index: '3',
          label: '民革党员',
        },
        {
          index: '4',
          label: '民盟盟员',
        },
        {
          index: '5',
          label: '民建会员',
        },
        {
          index: '6',
          label: '民进会员',
        },
        {
          index: '7',
          label: '农工党党员',
        },
        {
          index: '8',
          label: '致公党党员',
        },
        {
          index: '9',
          label: '九三学社社员',
        },
        {
          index: '10',
          label: '台盟盟员',
        },
        {
          index: '11',
          label: '无党派人士',
        },
        {
          index: '12',
          label: '群众',
        },
      ],
      academicDegreeCategories:[
        {
          index: '0',
          label: '小学',
        },
        {
          index: '1',
          label: '初中',
        },
        {
          index: '2',
          label: '高中',
        },
        {
          index: '3',
          label: '大专',
        },
        {
          index: '4',
          label: '本科',
        },
        {
          index: '5',
          label: '硕士',
        },
        {
          index: '6',
          label: '博士',
        },
      ],
      professionalFieldCategories:[
        {
          index: '0',
          label: '理科',
        },
        {
          index: '1',
          label: '工科',
        },
        {
          index: '2',
          label: '文科',
        },
      ],
      proposedPositionCategories:[
        {
          index: '0',
          label: '职位0',
        },
        {
          index: '1',
          label: '职位1',
        },
        {
          index: '2',
          label: '职位2',
        },
      ],
      affiliatedOrganizationCategories:[
        {
          index: '0',
          label: '机构0',
        },
        {
          index: '1',
          label: '机构1',
        },
        {
          index: '2',
          label: '机构2',
        },
      ],
      currentRankCategories:[
        {
          index: '0',
          label: '现任职级0',
        },
        {
          index: '1',
          label: '现任职级1',
        },
        {
          index: '2',
          label: '现任职级2',
        },
      ],
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
      header_cell_style:{
        'background-color': '#F4F4F5',
        color: '#303133',
    },
      queryDataByForm: [
        {
          name:'张三',
          sex: '',
          nationality: '',
          professionalField: '',
          currentPosition: '',
          affiliatedOrganization: '',
          numberOfMatchingPosts: 3,
        }
      ],
      pageInfo:{
        currentPage: 1,
        total: 0,
        pageSize: 5,
      },
      activeQueryModeIndex: 'affiliatedOrganizationCategories',
      queryMode: [
        {
          index: 'affiliatedOrganizationCategories',
          label: '按机构',
        },
        {
          index: 'politicalStatusCategories',
          label: '按政治面貌',
        },
        {
          index: 'proposedPositionCategories',
          label: '按拟任职位',
        },
        {
          index: 'currentRankCategories',
          label: '按现任职级',
        },
        {
          index: 'currentPosition',
          label: '按历任职位',
        },
        {
          index: 'professionalFieldCategories',
          label: '按专业领域',
        },
        {
          index: 'age',
          label: '按年龄结构',
        },
        {
          index: 'region',
          label: '按地域',
        },
      ]
    }
  },
  methods: {
    handleSelect(key){
      console.log(key);
    },
    handleCheck(row){
      console.log(row);
    },
    //页面尺寸
    handleSizeChange(val) {
      //回到第一页
      // this.pageInfo.currentPage = 1;
      // this.pageInfo.pageSize = val;
      console.log(`每页 ${val} 条`);
    },
    //换页
    handleCurrentChange(val) {
      // this.tableData = [];
      // this.pageInfo.currentPage = val;
      // // let len = this.alertEventData.length;
      // let startNum = (val - 1) * this.pageInfo.pageSize;
      // let endNum = len < val * this.pageInfo.pageSize ? len : val * this.pageInfo.pageSize;
      // for(let i = startNum; i < endNum; i ++){
      //   this.tableData.push(this.alertEventData[i]);
      // }
      // console.log(startNum,endNum);
      console.log(`当前页: ${val}`);
    }
  }
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
.el-form-item--mini.el-form-item, .el-form-item--small.el-form-item{
  width: 25vw;
}
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
.el-table{
  margin-top: 1em;
  margin-bottom: 1em;
}
.el-pagination{
  margin-bottom: 2em;
}
/deep/ .el-pager li.active{
  color: white;
  background: black;
  border-color: black;
  width: 28px;
}
.chartCard{
  margin-top: 1em;
  margin-left: 2em;
  border: solid 1px #e6e6e6;
  border-radius: 3px;
  height: 500px;
}
</style>
