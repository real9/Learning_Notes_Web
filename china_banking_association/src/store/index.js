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
    nativePlace: [
      {
        value: '11',
        label: '北京市',
        children: [
          {
            value: '110101',
            label: '东城区',
          },
          {
            value: '110102',
            label: '西城区',
          },
          {
            value: '110105',
            label: '朝阳区',
          },
          {
            value: '110106',
            label: '丰台区',
          },
          {
            value: '110107',
            label: '石景山区',
          },
          {
            value: '110108',
            label: '海淀区',
          },
          {
            value: '110109',
            label: '门头沟区',
          },
          {
            value: '110111',
            label: '房山区',
          },
          {
            value: '110112',
            label: '通州区',
          },
          {
            value: '110113',
            label: '顺义区',
          },
          {
            value: '110114',
            label: '昌平区',
          },
          {
            value: '110115',
            label: '大兴区',
          },
          {
            value: '110116',
            label: '怀柔区',
          },
          {
            value: '110117',
            label: '平谷区',
          },
          {
            value: '110228',
            label: '密云县',
          },
          {
            value: '110229',
            label: '延庆县',
          },
        ]
      },
      {
        value: '31',
        label: '上海',
        children: [
          {
            value: '310101',
            label: '黄浦区',
          },
          {
            value: '310104',
            label: '徐汇区',
          },
          {
            value: ' 310105',
            label: '长宁区',
          },
          {
            value: '310106',
            label: '静安区',
          },
          {
            value: '310107',
            label: '普陀区',
          },
          {
            value: '310108',
            label: '闸北区',
          },
          {
            value: '310109',
            label: '虹口区',
          },
          {
            value: '310110',
            label: '杨浦区',
          },
          {
            value: '310112',
            label: '闵行区',
          },
          {
            value: '310113',
            label: '宝山区',
          },
          {
            value: '310114',
            label: '嘉定区',
          },
          {
            value: '310115',
            label: '浦东新区',
          },
          {
            value: '310116',
            label: '金山区',
          },
          {
            value: '310117',
            label: '松江区',
          },
          {
            value: ' 310118',
            label: '青浦区',
          },
          {
            value: '310230',
            label: '崇明县',
          },
        ]
      },
      {
        value: '32',
        label: '江苏',
        children: [
          {
            value: '3201',
            label: '南京市',
          },
          {
            value: '3202',
            label: '无锡市',
          },
          {
            value: '3203',
            label: '徐州市',
          },
          {
            value: '3204',
            label: '常熟市',
          },
          {
            value: '3205',
            label: '苏州市',
          },
          {
            value: '3206',
            label: '南通市',
          },
          {
            value: '3207',
            label: '连云港市',
          },
          {
            value: '3208',
            label: '淮安市',
          },
          {
            value: '3209',
            label: '盐城市',
          },
          {
            value: '3210',
            label: '扬州市',
          },
          {
            value: '3211',
            label: '镇江市',
          },
          {
            value: '3212',
            label: '泰州市',
          },
          {
            value: '3213',
            label: '宿迁市',
          },
        ]
      },
    ],
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
