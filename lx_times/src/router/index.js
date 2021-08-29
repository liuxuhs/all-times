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
    path:'/index',
    name:'index',
    component:()=>import('../views/index.vue'),
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
       }

    ]
  },



  
]

const router = new VueRouter({
  routes
})

export default router
