import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/components/Layout";
import Login from "@/views/login";


Vue.use(VueRouter);

export default new VueRouter({
  routes:[
    { 
      path:'/login',
      name:'login', 
      component:Login
    },

    { 
      path:'/',
      name:'layout',
      component:Layout
    }
   
  ]
})