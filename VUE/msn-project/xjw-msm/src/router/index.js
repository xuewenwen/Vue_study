import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/components/Layout";
import Login from "@/views/login";
import Home from '@/views/home'
import Member from '@/views/member'
import Supplier from '@/views/supplier'
import Goods from '@/views/goods'
import Staff from '@/views/staff'

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },

    {
      path: '/main',
      name: 'layout',
      component: Layout,
      children: [
        {
          path: '/home',
          component: Home,
          meta: { title: '首页' }
        }
        // {
        //   path:'/member',
        //   component:Member,
        //   meta:{title:'员工'}
        // },
        // {
        //   path:'/goods',
        //   component:Goods,
        //   meta:{title:'goods'}
        // },
        // {
        //   path:'/staff',
        //   component:Staff,
        //   meta:{title:'staff'}
        // },{
        //   path:'/supplier',
        //   component:Supplier,
        //   meta:{title:'supplier'}
        // }

      ]
    },
    {
      path: '/member',
      component: Layout,
      children: [{
        path: '/',
        component: Member,
        meta: { title: '人员管理' }
      },
      ]
    },
    {
      path: '/goods',
      component: Layout,
      children: [{
        path: '/',
        component: Goods,
        meta: { title: '商品管理' }
      },
      ]
    },
    {
      path: '/staff',
      component: Layout,
      children: [{
        path: '/',
        component: Staff,
        meta: { title: '员工管理' }
      },
      ]
    },

    {
      path: '/supplier',
      component: Layout,
      children: [{
        path: '/',
        component: Supplier,
        meta: { title: '供应商管理' }
      },
      ]
    }

  ]
})