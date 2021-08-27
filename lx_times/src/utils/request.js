//1.导入axios的依赖包
import axios from 'axios';
import { baseApi } from '../config/index';

//2.创建axios对象信息
const Server = axios.create({
    baseURL:baseApi,
    timeout:5000,
})




export default Server;