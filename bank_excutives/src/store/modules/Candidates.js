import axios from 'axios'
// import Vue from "vue";
// Vue.prototype.$axios = axios

const actions = {
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
                url: 'http://localhost:3000/politicalStatusCategories',
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
                url: 'http://localhost:3000/academicDegreeCategories',
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
    }
}

export default {
    namespaced: true,
    actions
}
