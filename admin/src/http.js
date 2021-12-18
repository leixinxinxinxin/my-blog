import axios from 'axios'

const http = axios.create({
    baseURL:process.env.VUE_APP_API_URL ||'admin/api'
    // baseURL:'http://localhost:4000/admin/api'
})

http.interceptors.request.use(config=>{
    if(localStorage.token){
        config.headers.Authorization = 'Bearer '+localStorage.token
        
    }
    return config
},error=>{
    return Promise.reject(error)
})

http.interceptors.response.use(res=>{
    return res
},error=>{
    return Promise.reject(error)
})

export default http