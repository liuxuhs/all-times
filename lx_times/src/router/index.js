import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [

  {
    path:'/alltime',
    name:'alltime',
    component:()=>import('../components/alltime.vue')
  },

  {
    path:'/login',
    name:'login',
    component:()=>import('../components/login.vue'),
    
  },

  {
    path:'/setpwd',
    name:'setpwd',
    component:()=>import('../components/setpwd.vue'),
    
  },

  {
    path:'/pwd',
    name:'pwd',
    component:()=>import('../components/pwd.vue'),
    
  },

  {
    path:'/sign',
    name:'sign',
    component:()=>import('../components/sign.vue'),
    
  },
  {
    path:'/teachlist',
    name:'teachlist',
    component:()=>import('../components/teachlist.vue'),
    
  },

  {
    path:'/datali',
    name:'datali',
    component:()=>import('../components/datali.vue'),
    
  },

  {
    path:'/index',
    name:'index',
    component:()=>import('../views/index.vue'),
    redirect:'/my',
    children:[
      {
        path: '/Hone',
        name: 'Home',
        component: Home
       },

       {
        path: '/about',
        name: 'About',
        component: () => import('../views/About.vue')
      },

       {
        path: '/lists',
        name: 'lists',
        component: ()=>import('../views/lists')
       },

       {
        path: '/my',
        name: 'my',
        component: ()=>import('../views/my')
       },


    ]
  },



  
]

const router = new VueRouter({
  routes
})

export default router
