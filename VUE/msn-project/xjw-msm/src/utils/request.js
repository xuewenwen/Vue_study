import axios from 'axios'
// axios.get('/db.json').then(Response =>{

//  const data =  Response.data
//  console.log(data)
// })



const request = axios.create({
   // baseURL:'/dev-api', 基础路径
    baseURL:'/',
    timeout:5000 //请求超时5000ms
})

//http://localhost:8888/dev-api/db.json
// request.get('/db.json').then(response =>{

//  console.log(response.data)

// })

export default request // 导出 axios 对象