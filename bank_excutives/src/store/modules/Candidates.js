import axios from 'axios'
// import Vue from "vue";
// Vue.prototype.$axios = axios

const actions = {
    getCandidatesData(){
        return new Promise((resolve, reject) => {
            axios({
                url: 'http://localhost:3000/qualifiedCandidates',
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
}

export default {
    namespaced: true,
    actions
}
