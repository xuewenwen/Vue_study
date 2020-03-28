<template>
  <div>
    <div class="header">
      <a href="#/">
        <img class="logo" src="@/assets/logo.png" width="25px" />
        <span class="company">疫情防控管理系统</span>
      </a>
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          薛剑文
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item icon="el-icon-edit" command="修改密码">修改密码</el-dropdown-item>
          <el-dropdown-item icon="el-icon-s-fold" command="退出系统">退出系统</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import {logout} from '@/api/login.js'
export default {
  methods: {
    handleCommand(command) {
      this.$message("点击了" + command);
      switch (command) {
        case "修改密码":
          break;
        case "退出系统":
           const token = localStorage.getItem('xjw-msn-token')
           logout(token).then(response =>{
             if(response.data.flag){
               localStorage.removeItem('xjw-msn-token')
               localStorage.removeItem('xjw-msn-user')
               this.$router.push('/')
             }
             else{
               // 错误警告
             }
           })

        default:
          break;
      }
    }
  }
};
</script>
<style scoped>
.logo {
  vertical-align: middle;
  padding: 0px 10px 0px 40px;
}
.company {
  position: absolute;
  color: white;
}

.el-dropdown {
  float: right;
  margin-right: 40px;
}
.el-dropdown-link {
  color: white;
  cursor: pointer;
}
</style>


