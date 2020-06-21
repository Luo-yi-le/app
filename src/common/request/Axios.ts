import axios from 'axios'; // 引入axios
import QS from 'qs'; // 引入qs模块，用来序列化post类型的数据，后面会提到
import { Toast } from 'vant';
import http from './http.config'

// 环境的切换
if (process.env.NODE_ENV == 'development') {
    axios.defaults.baseURL = http.url;
}
else if (process.env.NODE_ENV == 'debug') {
    axios.defaults.baseURL = http.url;
}
else if (process.env.NODE_ENV == 'production') {
    axios.defaults.baseURL = http.url;
}

/** 
 * 提示函数 
 * 禁止点击蒙层、显示一秒后关闭
 */
const Tip = (msg: any) => {    
    Toast({        
        message: msg,        
        duration: 1000,        
        forbidClick: true    
    });
}

/**
 * http配置
 */
const instance = axios.create({
    // baseURL: 'https://www.easy-mock.com/mock/5a4896ba62de717d44f2406e/api/v1',
    timeout: 10000,
    withCredentials: true, // 是否允许带cookie这些
    headers: {
        'X-Requested-With': 'XMLHttpRequest'
    }
})

// http request 拦截器
instance.interceptors.request.use(
    config => {
        // POST传参序列化
        if (config.method === 'POST') {
            config.data = QS.stringify(config.data)
        }
        let token = this.$store.state.token;
        console.log(token)
        if (token) {  // 判断是否存在token，如果存在的话，则每个http header都加上token
            config.headers.Authorization = token;
            console.log('interceptors config=',config)
        }
        // 若是有做鉴权token , 就给头部带上token
        if (window.localStorage.getItem('token')) {
            config.headers.Authorization = window.localStorage.getItem('token')
        }
        return config
    },
    error => {
        return Promise.reject(error)
    }
)

// http response 拦截器
instance.interceptors.response.use(
    response => {
        // token 过期或者其他情况的判断
        if (response.data.code === -1) {
          localStorage.removeItem('token')
          this.$router.replace({
            path: '/login',
            query: { redirect: this.$router.currentRoute.fullPath }
          })
        }else{
          return response
        }

        // 返回响应时做一些处理，我们这里直接返回
        return response
    },
    error => {
        if (error.response) {
          switch (error.response.status) {
            case 401:
              // 返回 401 清除token信息并跳转到登录页面
              localStorage.removeItem('token')
              this.$router.replace({
                path: '/login',
                query: { redirect: this.$router.currentRoute.fullPath }
              })
          }
        }
        // 当响应异常时做一些处理
        return Promise.reject(error)
    }
)
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url: string, params: object) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}

/**
* post方法，对应post请求 
* @param {String} url [请求的url地址] 
* @param {Object} params [请求时携带的参数] 
*/
export function post(url: string, params: object) {
    return new Promise((resolve, reject) => {
        axios.post(url, QS.stringify(params))
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

export default {
    install: function (Vue, Option) {
        Object.defineProperty(Vue.prototype, '$http', { value: instance })
    }
}