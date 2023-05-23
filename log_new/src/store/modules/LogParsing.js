import axios from "axios";

const actions  = {
    getBglLogs(){
        return new Promise((resolve, reject) => {
            axios({
                url: 'http://localhost:8090/getBglLogs',
                method: 'get',
            })
                .then((value) => {
                    resolve(value)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    getHdfsLogs(){
        return new Promise((resolve, reject) => {
            axios({
                url: 'http://localhost:8090/getHdfsLogs',
                method: 'get',
            })
                .then((value) => {
                    resolve(value)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    getBglParsed() {
        return new Promise((resolve, reject) => {
            axios({
                url: 'http://localhost:8090/getParsedLogBgl',
                method: 'get',
            })
                .then((value) => {
                    resolve(value)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    getHdfsParsed() {
        return new Promise((resolve, reject) => {
            axios({
                url: 'http://localhost:8090/getParsedLogHdfs',
                method: 'get',
            })
                .then((value) => {
                    resolve(value)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    getBglOutput() {
        return new Promise((resolve, reject) => {
            axios({
                url: 'http://localhost:8090/getBglOutput',
                method: 'get',
            })
                .then((value) => {
                    resolve(value)
                })
                .catch((error) => {
                    reject(error)
                })
        })
    },
    getHdfsOutput() {
        return new Promise((resolve, reject) => {
            axios({
                url: 'http://localhost:8090/getHdfsOutput',
                method: 'get',
            })
                .then((value) => {
                    resolve(value)
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
