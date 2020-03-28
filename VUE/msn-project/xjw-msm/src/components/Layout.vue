<template>
 <div>

 <app-header></app-header>
 <app-navbar></app-navbar>
 <app-main></app-main>

</div>
</template>

<script>
//导入 index 自动
import AppHeader from './AppHeader'
import AppNavbar from './AppNavbar'
import AppMain from './AppMain'

export default {
  
    components:{AppHeader,AppNavbar,AppMain }
}
</script>


<style  >
/* 头部区域 */
.header{
    position: absolute;
    line-height: 50px;
    top:0px;
    left: 0px;
    right: 0px;
    background: #1f2429
}

.navbar{
    position: absolute;
    width: 230px;
    top:50px;
    left:0px;
    bottom: 0px;
    overflow-y: auto;
    background: #545c64;
}

.main{

    position: absolute;
    top:50px;
    left:230px;
    bottom: 0px;
    right:0px;
    overflow-y: auto;

}

</style>
    

