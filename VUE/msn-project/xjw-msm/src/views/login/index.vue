<template>
  <div class="login-container">
          <div class="logo"></div>
    <el-form class="login-form" :rules="rules" ref="form" :model="form" label-width="80px">
      <h2 class="login-title">疫情防护管理系统</h2>
      <el-form-item label="帐号" prop="username">
        <el-input v-model="form.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('form')">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { login,getUserInfo} from '@/api/login'
export default {
  data() {
    return {
      form: {
        username: "",
        password: ""
      },
      rules:{
        username:[{required: true, message: '请输入用户名', trigger: 'blur'}],

      
         password:[{required: true, message: '请输入密码', trigger: 'blur'}]
         },
    };
  },
  methods: {
  
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            
             login(this.form.username,this.form.password).then(response=>{
               console.log(response.data)
               const resp =   response.data
              
              if(resp.flag){
                 //验证成功
                 getUserInfo(resp.data.token).then(response =>{
                  
                  //获取到了用户信息
                   const respUser =response.data
                 if(respUser.flag){ console.log('userInfo',respUser.data)
                   //1.保存token
                   localStorage.setItem('xjw-msn-user',JSON.stringify(respUser.data))
                   localStorage.setItem('xjw-msn-token',JSON.stringify(respUser.data.token))
                   //前往首页
                      this.$router.push('/main')}
                      else{
                          this.$message({
                            message:respUser.message,
                            type:'warning'
                          })
                      }
                  
                 })
              

               }
             })
           

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
  }
};
</script>


<style scoped>
/* .logo{
      width: 200px;
      height: 200px;
      background: url("../../assets/logo_1.svg");
         background-repeat: no-repeat;
         position: absolute;
} */

.login-form {
  width: 350px;
  margin: 200px auto;
  background: url("../../assets/kuang.png");
  /* background-color:rgb(255,255,255,0.8); */
  padding: 20px;
  border-radius: 0px;

}
.login-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background: url("../../assets/beijing.png");
  background-repeat: no-repeat;
  background-size: cover;
  
   
}
.login-title {
  color: #ffffff;
  text-align: center;
  margin-left: 32px;
}
</style>
