const Mock = require('mockjs')


const data = Mock.mock({
    'memberList|4':[
        {
            'id':1,
            'name':'小锐'
        }
    ]
})

// console.log(data)
console.log( JSON.stringify(data,null,2))