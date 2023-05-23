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
    }
}

export default {
    namespaced: true,
    actions
}
