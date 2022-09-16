import {_axios} from '../../plugins/axios'
import {Message} from "element-ui";

const userData = {"username": "testAdmin", "password": "123456"}

const actions = {
    getToken() {
        return new Promise((resolve, reject) => {
            _axios({
                url:'/account/sign-in',
                method: 'post',
                data: userData,
            })
                .then((value) => {
                    localStorage.setItem("token", value.data.data);
                    Message({
                        message: value.data.msg,
                        type:'success'
                    })
                    resolve(value);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    },
    getCompanyInfo(_,data){
        return new Promise((resolve, reject) => {
            _axios({
                url:'/base/evalu/getCompanyInfo',
                method: 'post',
                data: data,
            })
                .then((value) => {
                    resolve(value);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    },
    getCompanyScore(_, data){
        return new Promise((resolve, reject) => {
            _axios({
                url:'/base/evalu/getCompanyScore',
                method: 'post',
                data: data,
            })
                .then((value) => {
                    resolve(value);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    },
    getScoreDetail(_,data){return new Promise((resolve, reject) => {
            _axios({
                url:'/base/evalu/getScoreDetail',
                method: 'post',
                data: data,
            })
                .then((value) => {
                    resolve(value);
                })
                .catch((error) => {
                    reject(error);
                })
        })
    },
}

export default {
    namespaced: true,
    actions,
};
