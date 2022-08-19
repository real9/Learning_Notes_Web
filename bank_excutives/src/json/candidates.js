// 批量产生数据
const familyName = ['李', '王', '张', '刘', '陈', '杨', '赵', '黄', '周', '吴',
    '徐', '孙', '胡', '朱', '高', '林', '何', '郭', '马', '罗',
    '梁', '宋', '郑', '谢', '韩', '唐', '冯', '于', '董', '萧',
    '程', '曹', '袁', '邓', '许', '傅', '沈', '曾', '彭', '吕']; // 40
const midName = ['愿', '逐', '月', '华', '流', '照', '君', '鱼', '龙', '潜', '跃', '水', '成', '文',
    '鸿', '雁', '长', '飞', '光', '不', '度', '舜', '世', '兆', '灼', '其', '之', '小', '大', '一', '文']; // 30
const lastName = ['一', '九', '川', '流', '不', '息', '阳', '春', '白', '雪', '言', '出', '法', '随',
    '少', '年', '游', '满', '江', '红']; // 20
const bankName = ['中国工商银行', '招商银行', '中国农业银行', '中国建设银行', '中国银行', '中国民生银行',
    '中国光大银行', '中信银行', '交通银行', '兴业银行', '上海浦东发展银行', '中国人民银行', '华夏银行',
    '深圳发展银行', '广东发展银行', '国家开发银行', '中国邮政储蓄银行', '中国进出口银行', '中国农业发展银行',
    '中国银行香港分行', '北京银行', '北京农村商业银行', '天津银行', '上海银行', '上海农村商业银行', '南京银行', '宁波银行',
    '杭州市商业银行', '深圳平安银行', '深圳农村商业银行']; // 30
const gender = ['男','女'];
const politicalStatus = ['中共党员', '中共预备党员', '共青团员', '民革党员', '民盟盟员', '民建会员', '民进会员', '农工党党员',
    '致公党党员', '九三学社社员', '台盟盟员', '无党派人士', '群众']; // 13
const cities = ['北京', '天津', '河北', '山西', '内蒙古', '宁夏', '青海', '陕西', '甘肃', '新疆', '辽宁', '吉林', '黑龙江',
        '山东', '江苏', '上海', '浙江', '安徽', '福建', '江西', '河南', '湖南', '湖北', '四川', '贵州', '云南', '重庆', '西藏',
        '广东', '广西', '海南', '香港', '澳门', '台湾']; // 34
module.exports = () => {
    const data = { qualifiedCandidates: [] };
    for (let i = 0; i < 100; i ++){
        let rn1 = Math.floor(Math.random()*40);
        let rn2 = Math.floor(Math.random()*30);
        let rn3 = Math.floor(Math.random()*20);
        let rn4 = Math.floor(Math.random()*30);
        let rn9 = Math.floor(Math.random()*34)

        let rn5 = Math.floor(Math.random()*40);
        let rn6 = Math.floor(Math.random()*20);
        let rn7 = Math.floor(Math.random()*30);
        let rn10 = Math.floor(Math.random()*34)

        let rn8 = Math.floor(Math.random()*13)

        data.qualifiedCandidates.push({
            id: i + 100,
            name: familyName[rn1] + midName[rn2] + lastName[rn3],
            sex: gender[rn1 % 2],
            politicalStatus: politicalStatus[rn8],
            academicDegree: '本科',
            nativePlace: cities[rn9],
            birth: '1977-09-10',
            professionalField: '科' + rn1 % 8,
            belongingRegion: cities[rn9],
            proposedPosition: '职位' + rn2 % 10,
            affiliatedOrganization: bankName[rn4],
            currentRank: '现任职级' + rn9 % 10,
            outboundStatus: '状态2',
            nationality: '中国',
            numberOfMatchingPosts: rn8,
            currentPosition: '职位' + rn3 % 2,
            ageStructure: '年龄段' + rn1 % 10,
            type: rn1 % 4,
        });
        data.qualifiedCandidates.push({
            id: i + 200,
            name: familyName[rn5] + lastName[rn6],
            sex: gender[rn2 % 2],
            politicalStatus: politicalStatus[rn8],
            academicDegree: '硕士',
            nativePlace: cities[rn10],
            birth: '1991-08-01',
            professionalField: '科' + rn5 % 8,
            belongingRegion: cities[rn10],
            proposedPosition: '职位' + rn6 % 10,
            affiliatedOrganization: bankName[rn7],
            currentRank: '现任职级' + rn10 % 10,
            outboundStatus: '状态0',
            nationality: '中国',
            numberOfMatchingPosts: rn8,
            currentPosition: '职位' + rn4 % 2,
            ageStructure: '年龄段' + rn5 % 10,
            type: rn5 % 4,
        })
    }
    return data;
}
