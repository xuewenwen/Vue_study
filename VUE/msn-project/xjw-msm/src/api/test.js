import request from '@/utils/request'
const BASE_URL = '/dev-api'
// request.get('/db.json').then(response =>{
//     console.log(response.data)
// })


//以对象配置的方式请求
request({
    methods: 'get',
    url: BASE_URL + '/db.json'

}).then(response =>{
    console.log('get2',response.data)
})


request({
    methods: 'post',
    url:'http://localhost:8001/db.json'

})

export default{
    getList(){
     const req =   request({
            methods: 'post',
            url: BASE_URL + '/db.json'
        })
        return req
    }
}