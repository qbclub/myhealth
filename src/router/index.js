import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'


Vue.use(VueRouter)

const routes = [{
    path: '',
    component: Home,
    children: [{
        path: '/',
        name: 'StartPage',
        component: () => import('../components/StartPage.vue')
      },
      {

        path: '/discovery',
        name: 'Discovery',
        component: () => import('../components/Discovery.vue'),

      },
      {

        path: '/stat/:name',
        name: 'MonitoringStat',
        component: () => import('../components/MonitoringStat.vue'),
        props: true 

      },
      {

        path: '/chart',
        name: 'LineChart',
        component: () => import('../components/LineChart.vue'),

      },
      {

        path: '/monitoring',
        name: 'Monitoring',
        component: () => import('../components/Monitoring.vue'),

      },
      {

        path: '/doctors',
        name: 'ListOfDoctors',
        component: () => import('../components/ListOfDoctors.vue'),

      }
    ]
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