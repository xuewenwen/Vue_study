(function (Vue) {//表示依赖了全局的VUE
	// Your starting point. Enjoy the ride!
	//const 表示申明的变量是不可变的，ES6
	const items = [
		{
			id: 1,               //主键id
			content: 'vue.js',   //输入的内容
			completed: false     //是否完成
		},
		{
			id: 2,               //主键id
			content: 'java',   //输入的内容
			completed: false     //是否完成
		},
		{
			id: 3,               //主键id
			content: 'python',   //输入的内容
			completed: false     //是否完成
		},

	]
	//全局定义自定义指令
	Vue.directive('app-focus', {
		inserted(el, binding) {
			el.focus()
		},
		update(el, binding) {
			el.focus()//全局的 下面那个是部分的
		},
	})
	var app = new Vue({
			el: '#todoapp',
			data: {
				//    title:'Hello!ToDoMvc!'
				items: items,//items 等价于  items:items  前者是简写，key和value一样就可以写一个
				currentItem: null,//表示点击的那个任务项
				filterStatus: 'all',
				
			},
			// //定义焦点局部指令
			//  directives : {
			// 	'todo-focus':{
			// 		update(el,binding) {
			// 		if(binding.value){
			// 			el.focus()
			// 		}


			// 		},
			// 	}
			// },

			methods: {
				add(event)// add:function() ES6写法没有function
				{
					console.log('add', event.target.value)
					//1. 获取文本框输入的数据
					const content = event.target.value.trim()
					//2. 判断数据如果为空，则什么都不做
					if (!content.length) {
						return
					}
					else {
						//3.如果不为空，则添加到数组中
						// 生成id值
						const id = this.items.length + 1 //获取数组的length相当于获取其下标index
						this.items.push(
							{
								id: id,               //主键id
								content: content,   //输入的内容
								completed: false,    //是否完成

							}
						)
						event.target.value = ''
					}


				},
				close(index) {
					this.items.splice(index, 1)//移除一条数据

				},
				//  removecomp(){
				//      this.items.filter((item)=>{
				//        return !item.completed

				// 	 })
				//  }
				removecomp() {
					this.items = this.items.filter((item) => !item.completed)
				},

				toEdit(i) {

					console.log(i)
					this.currentItem = i

				},
				cancelEdit() {
					//当item为空 editing样式就不起作用了
					this.currentItem = null
				},

				finishEdit(i, index, event) {
					//1.获取输入框的值 2.判断是否为空 为空 删除任务项 3.不为空  添加到任务项 4.移除.editing的样式 退出样式
					const content = event.target.value.trim()
					if (!content) {
						this.close(index)
						return
					}
					i.content = content
					this.currentItem = null
				},



			},

			computed: {
				filterItems(){
					  //判断 当filterStatus发生改变的时候，则过滤出不同的数据
					  switch (this.filterStatus) {
						  case 'active':
							  //过滤未完成数据
							  return this.items.filter(item => !item.completed)
							  break;
					   case 'completed':
							  //过滤未完成数据
							  return this.items.filter(item => item.completed)
							  break;
						  default:
							  return this.items
							  break;
					  }
				},
				toggleALL: {
					get() {
						console.log('获取到了')
						return this.remaining === 0
					},
					set(newStatus) {
						console.log('重新设置')
						//点击复选框 会触发set方法
						//迭代出所有的任务项
						this.items.forEach((item) => {

							item.completed = newStatus
						})
					},

				},

				remaining() {
					//剩余未完成任务数量
					//数组filter过滤出所有未完成的任务项目
					const unItems = this.items.filter(function (item) {
						return !item.completed
						//一旦更改 这个计算属性就会重新计算 使用该函数
					})
					return unItems.length

				}

			},


		})
		//监听hash值的改变
		window.onhashchange = function(){
			console.log('改变了',window.location.hash)
		const hash = window.location.hash.substr(2) || 'all'
		//状态改变把HASH值赋值给这个变量
		app.filterStatus = hash
		console.log(app.filterStatus)
		}

})(Vue);
