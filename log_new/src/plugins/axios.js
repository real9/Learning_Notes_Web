import axios from 'axios'
// import { Message } from 'element-ui';

axios.defaults.headers.post['Content-Type'] = 'application/json'

let config = {
    // baseURL: 'http://localhost:8090',
    timeout: 5000,
    headers: {
        //     token: localStorage.getItem('token'),
        //     // Authorization: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1aWQiOiIxN…pbiJ9.UKP4BfqJzJ4eVAPVaDPcKxKzyw-BUuIOplkRjqm_CHI',
        //     Authorization: localStorage.getItem('token'),
    }
}

export const _axios = axios.create(config)

_axios.interceptors.request.use(
    config => {
        // Do something before request is sent
        // config.headers.token = localStorage.getItem('token');
        // GLOBAL.debugMode ? console.log(config.url,config) : "";
        return config
    },
    error => {
        // Do something with request error
        return Promise.reject(error)
    }
)
