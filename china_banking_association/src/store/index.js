import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    candidateTypes: [
      {
        index: '1',
        label: '大中型银行高管人员合格人选'
      },
      {
        index: '2',
        label: '外资银行高管人员合格人选'
      },
      {
        index: '3',
        label: '独立董事合格人选'
      },
      {
        index: '4',
        label: '外部监事合格人选'
      },
    ],
    politicalStatus: [
      {
        index: "0",
        label: "中共党员"
      },
      {
        index: "1",
        label: "中共预备党员"
      },
      {
        index: "2",
        label: "共青团员"
      },
      {
        index: "3",
        label: "民革党员"
      },
      {
        index: "4",
        label: "民盟盟员"
      },
      {
        index: "5",
        label: "民建会员"
      },
      {
        index: "6",
        label: "民进会员"
      },
      {
        index: "7",
        label: "农工党党员"
      },
      {
        index: "8",
        label: "致公党党员"
      },
      {
        index: "9",
        label: "九三学社社员"
      },
      {
        index: "10",
        label: "台盟盟员"
      },
      {
        index: "11",
        label: "无党派人士"
      },
      {
        index: "12",
        label: "群众"
      }
    ],
    idType: [
      {
        index: "1",
        label: "居民身份证"
      },
      {
        index: "2",
        label: "护照"
      }
    ],
    nationality: [
      {
        index: "1",
        label: "中国"
      },
      {
        index: "2",
        label: "韩国"
      },
      {
        index: "3",
        label: "日本"
      },
      {
        index: "4",
        label: "俄罗斯"
      },
    ],
    ethnicGroup: [
      {
        index: "1",
        label: "汉族"
      },
      {
        index: "2",
        label: "傣族"
      },
      {
        index: "3",
        label: "苗族"
      },
      {
        index: "4",
        label: "维吾尔族"
      },
    ],
  //  籍贯先空着

    maritalStatus:[
      {
        index: "1",
        label: "未婚"
      },
      {
        index: "2",
        label: "已婚"
      },
    ],

    academicDegree: [
      {
        index: "1",
        label: "本科"
      },
      {
        index: "2",
        label: "硕士"
      },
      {
        index: "3",
        label: "博士"
      },
    ],
    diploma: [
      {
        index: "1",
        label: "学士"
      },
      {
        index: "2",
        label: "硕士"
      },
      {
        index: "3",
        label: "博士"
      },
    ],
    rewardOrPunishment: [
      {
        index: "1",
        label: "奖励"
      },
      {
        index: "2",
        label: "惩罚"
      },
    ]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
