import request from '@/utils/request'
const BASE_URL = '/dev-api'
const SERVER_URL = process.env.VUE_APP_BASE_API

// request.get('/db.json').then(response =>{
//     console.log(response.data)
// })


//以对象配置的方式请求
request({
    methods: 'get',
    url:  '  /db.json'

}).then(response =>{
    console.log('get2',response.data)
})


// request({
//     methods: 'get',
//     url:'/db.json'

// })

export default{
    getList(){
     const req =   request({
            methods: 'get',
            url:  '/db.json'
        })
        console.log(req) // Promise.then()
        return req
    }
}