import axios from 'axios'
import { baseApi } from '@/config'
const Server = axios.create({
    baseURL:baseApi,
    timeout:5000,
})

export default Server;