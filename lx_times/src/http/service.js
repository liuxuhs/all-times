//1.导入axios的依赖包
import axios from 'axios';
import { baseApi } from '../config/index';
import {Toast} from 'vant'
import store from "../store/index"


//2.创建axios对象信息
let service = axios.create({
    baseURL:baseApi,
    timeout:5000
})

let loading
//请求拦截
service.interceptors.request.use(config=>{
    //loding动画开启
    loading = Toast.loading({
        duration:10000,
        message:'加载中...',
        forbidClick:true  //背景禁用
    })
    config.headers.Authorization= ' Bearer '+store.state.token
    
    return config
},error=>{
    console.log(error)
    return Promise.reject(error)
})



//响应拦截器
service.interceptors.response.use(res=>{
    loading.clear()
    return Promise.resolve(res)
},error=>{
    loading.clear()
    console.log('err'+error);
    return Promise.reject(error)
})



export default service;