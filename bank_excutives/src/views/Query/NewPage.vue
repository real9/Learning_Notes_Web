<template>
<div>
  <el-descriptions title="候选人信息"
                   style="background-color: white; margin: 5vh 5vw;padding: 2em; border-radius: 5px"
                   :labelStyle="{'font-weight': 700}">
    <el-descriptions-item label="姓名">{{detailData.name}}</el-descriptions-item>
    <el-descriptions-item label="性别">{{detailData.sex}}</el-descriptions-item>
    <el-descriptions-item label="出生日期">{{detailData.birth}}</el-descriptions-item>
    <el-descriptions-item label="政治面貌">{{detailData.politicalStatus}}</el-descriptions-item>
    <el-descriptions-item label="学历" span="2">{{detailData.academicDegree}}</el-descriptions-item>

    <el-descriptions-item label="国籍">{{detailData.nationality}}</el-descriptions-item>
    <el-descriptions-item label="籍贯">{{detailData.nativePlace}}</el-descriptions-item>
    <el-descriptions-item label="所属地域" span="2">{{detailData.belongingRegion}}</el-descriptions-item>
    <el-descriptions-item label="所属机构" span="3">{{detailData.affiliatedOrganization}}</el-descriptions-item>

    <el-descriptions-item label="专业领域">{{detailData.professionalField}}</el-descriptions-item>
    <el-descriptions-item label="匹配职位数">{{detailData.numberOfMatchingPosts}}</el-descriptions-item>
    <el-descriptions-item label="拟任职位">{{detailData.proposedPosition}}</el-descriptions-item>
    <el-descriptions-item label="现任职级">{{detailData.currentRank}}</el-descriptions-item>
    <el-descriptions-item label="现任职位">{{detailData.currentPosition}}</el-descriptions-item>
    <br/>
  </el-descriptions>
</div>
</template>

<script>
export default {
  name: "NewPage",
  data() {
    return{
      detailData: {},
    }
  },
  created() {
    // console.dir(this.$route.query);
    this.getDetailData();
  },
  methods: {
    async getDetailData(){
      // console.log(this.$route.query);
      let id = this.$route.query.candidateId;
      await this.$store.dispatch('Candidates/getDetailInformation', id)
      .then((res) => {
        this.detailData = { ...res.data };
        // console.log(res.data)
        // console.log(this.detailData);
      })
    }
  }
}
</script>

<style scoped>

</style>
