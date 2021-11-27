import Vue from 'vue'
import VueRouter from 'vue-router'
import StartPage from '../components/StartPage.vue'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [{
    path: '/',
   
    component: Home,
    children: [{
      path: '',
      name: 'StartPage',
      component: StartPage,
    }]
  },
  {
    path: '/hello',
    name: 'Hello',
    component: () => import('../views/HelloPage.vue')
  }



]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router