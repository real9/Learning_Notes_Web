import axios from 'axios'
// import Vue from "vue";
// Vue.prototype.$axios = axios

const actions = {
    //候选人（页面上半部分）
    getCandidatesData( _, data ){
        return new Promise((resolve, reject) => {
            axios({
                url: 'http://localhost:3000/qualifiedCandidates',
                method: 'get',
                params: {
                    _page: data.currentPage,
                    _limit: data.pageSize,
                    type: data.type,
                    _sort: 'numberOfMatchingPosts',
                    _order: 'desc',
                    //姓名是模糊搜索
                    name_like: data.name,
                    sex: data.sex,
                    politicalStatus: data.politicalStatus,
                    academicDegree: data.academicDegree,
                    nativePlace: data.nativePlace,
                    birth: data.birth,
                    professionalField: data.professionalField,
                    belongingRegion: data.belongingRegion,
                    proposedPosition: data.proposedPosition,
                    affiliatedOrganization: data.affiliatedOrganization,
                    currentRank: data.currentRank,
                    outboundStatus: data.outboundStatus,
                }
            })
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    getPoliticalStatusCategories() {
        return new Promise((resolve, reject) => {
            axios({
                url: 'http://localhost:3000/politicalStatus',
                method: 'get'
            })
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    getAcademicDegreeCategories(){
        return new Promise((resolve, reject) => {
            axios({
                url: 'http://localhost:3000/academicDegree',
                method: 'get'
            })
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    getProfessionalFieldCategories(){
        return new Promise((resolve, reject) => {
            axios({
                url: 'http://localhost:3000/professionalField',
                method: 'get'
            })
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    getProposedPositionCategories(){
        return new Promise((resolve, reject) => {
            axios({
                url: 'http://localhost:3000/proposedPosition',
                method: 'get'
            })
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    getAffiliatedOrganizationCategories(){
        return new Promise((resolve, reject) => {
            axios({
                url: 'http://localhost:3000/affiliatedOrganization',
                method: 'get'
            })
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    getCurrentRankCategories(){
        return new Promise((resolve, reject) => {
            axios({
                url: 'http://localhost:3000/currentRank',
                method: 'get'
            })
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },

//    页面下半部分
    async getChartQueryModeTableData(_, data) {
        let res = [];
        if (data.division === 'affiliatedOrganization'){
            for (let i = 0; i < 30; i++) {
                await axios({
                    url: `http://localhost:3000/${data.division}/${i}/qualifiedCandidates?type=${data.type}`,
                    method: 'get'
                })
                    .then((response) => {
                        if (response.data.length !== 0){
                            res[res.length] = {
                                item: response.data[0].affiliatedOrganization,
                                num: response.data.length
                            }
                        }
                    })
            }
        } else if(data.division === 'politicalStatus'){
            for (let i = 0; i < 13; i++) {
                await axios({
                    url: `http://localhost:3000/${data.division}/${i}/qualifiedCandidates?type=${data.type}`,
                    method: 'get'
                })
                    .then((response) => {
                        if (response.data.length !== 0){
                            res.push({
                                item: response.data[0].politicalStatus,
                                num: response.data.length
                            })
                        }
                    })
            }
        } else if (data.division === 'currentPosition'){
            for (let i = 0; i < 2; i++) {
                await axios({
                    url: `http://localhost:3000/${data.division}/${i}/qualifiedCandidates?type=${data.type}`,
                    method: 'get'
                })
                    .then((response) => {
                        if (response.data.length !== 0){
                            res.push({
                                item: response.data[0].currentPosition,
                                num: response.data.length
                            })
                        }
                    })
            }
        } else if (data.division === 'belongingRegion'){
            for (let i = 0; i < 34; i++) {
                await axios({
                    url: `http://localhost:3000/${data.division}/${i}/qualifiedCandidates?type=${data.type}`,
                    method: 'get'
                })
                    .then((response) => {
                        if (response.data.length !== 0){
                            res.push({
                                item: response.data[0].belongingRegion,
                                num: response.data.length
                            })
                        }
                    })
            }
        } else if( data.division ==='proposedPosition'){
            for (let i = 0; i < 10; i++) {
                await axios({
                    url: `http://localhost:3000/${data.division}/${i}/qualifiedCandidates?type=${data.type}`,
                    method: 'get'
                })
                    .then((response) => {
                        if (response.data.length !== 0){
                            res.push({
                                item: response.data[0].proposedPosition,
                                num: response.data.length
                            })
                        }
                    })
            }
        }else if( data.division ==='currentRank'){
            for (let i = 0; i < 10; i++) {
                await axios({
                    url: `http://localhost:3000/${data.division}/${i}/qualifiedCandidates?type=${data.type}`,
                    method: 'get'
                })
                    .then((response) => {
                        if (response.data.length !== 0){
                            res.push({
                                item: response.data[0].currentRank,
                                num: response.data.length
                            })
                        }
                    })
            }
        }else if( data.division ==='professionalField'){
            for (let i = 0; i < 8; i++) {
                await axios({
                    url: `http://localhost:3000/${data.division}/${i}/qualifiedCandidates?type=${data.type}`,
                    method: 'get'
                })
                    .then((response) => {
                        if (response.data.length !== 0){
                            res.push({
                                item: response.data[0].professionalField,
                                num: response.data.length
                            })
                        }
                    })
            }
        }else if( data.division ==='ageStructure'){
            for (let i = 0; i < 10; i++) {
                await axios({
                    url: `http://localhost:3000/${data.division}/${i}/qualifiedCandidates?type=${data.type}`,
                    method: 'get'
                })
                    .then((response) => {
                        if (response.data.length !== 0){
                            res.push({
                                item: response.data[0].ageStructure,
                                num: response.data.length
                            })
                        }
                    })
            }
        }
        return res;
    },
    getDetailInformation( _, data ){
        return new Promise((resolve, reject) => {
            axios({
                url: `http://localhost:3000/qualifiedCandidates/${data}`,
                method: 'get'
            })
                .then((response) => {
                    resolve(response)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    // getMapData(){
    //     return new Promise((resolve, reject) => {
    //         axios({
    //             // url: 'http://localhost:3000/mapData',
    //             url: 'https://cdn.jsdelivr.net/npm/echarts/map/js/china.js?_v_=1597075010563',
    //             method: 'get'
    //         })
    //             .then((res) => {
    //                 resolve(res)
    //             })
    //             .catch((error) => {
    //                 reject(error)
    //             })
    //     })
    // }
}

export default {
    namespaced: true,
    actions
}
