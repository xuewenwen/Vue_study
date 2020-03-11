import request from '@/utils/request'

// request.get('/db.json').then(response =>{
//     console.log(response.data)
// })


//以对象配置的方式请求
request({
    methods: 'get',
    url:'/db.json'

}).then(response =>{
    console.log('get2',response.data)
})


request({
    methods: 'post',
    url:'/db.json'

})

export default{
    getList(){
     const req =   request({
            methods: 'post',
            url:'/db.json'
        })
        return req
    }
}