(function (Vue) {//表示依赖了全局的VUE
	// Your starting point. Enjoy the ride!
//const 表示申明的变量是不可变的，ES6
  const items=[
	{
		id:1,               //主键id
		content:'vue.js',   //输入的内容
		completed:false     //是否完成
	   },
	   {
		  id:2,               //主键id
		  content:'java',   //输入的内容
		  completed:false     //是否完成
		 },
		 {
		  id:3,               //主键id
		  content:'python',   //输入的内容
		  completed:false     //是否完成
		 },

  ]
	 new Vue({
		 el:'#todoapp',
		 data:{
        //    title:'Hello!ToDoMvc!'
              items:items  //items 等价于  items:items  前者是简写，key和value一样就可以写一个
		 },

		 methods: {
			add(event)// add:function() ES6写法没有function
                {
                 console.log('add',event.target.value)
                  //1. 获取文本框输入的数据
			      const content = event.target.value.trim()
			      //2. 判断数据如果为空，则什么都不做
			     if(!content.length){
					 return
				 }
				 else{
					 //3.如果不为空，则添加到数组中
					       // 生成id值
				 const id=this.items.length + 1 //获取数组的length相当于获取其下标index
				 this.items.push(		
					{
						   id:id,               //主键id
						   content:content,   //输入的内容
						   completed:false     //是否完成
					}
				 )
				 event.target.value=''
				}
				 
				 
			 },
			 close(index){
                this.items.splice(index,1)//移除一条数据

			 }
		 },

		 computed: {
			   toggleALL:{
						get(){
						  console.log('获取到了')
						  return this.remaining === 0
						},
						set(newStatus){
							console.log('重新设置')
							//点击复选框 会触发set方法
							//迭代出所有的任务项
							this.items.forEach((item)=>{

								item.completed = newStatus
							})
						},

			   },

                remaining(){
					 //剩余未完成任务数量
					 //数组filter过滤出所有未完成的任务项目
					const unItems= this.items.filter(function (item){
                        return !item.completed
                        //一旦更改 这个计算属性就会重新计算 使用该函数
					 })
					 return unItems.length

					}

		 },


	 })
})(Vue);
