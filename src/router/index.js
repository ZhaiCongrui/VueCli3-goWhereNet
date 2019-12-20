import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import City from '@/views/City'

import Domestic from '@/components/City/Domestic'
import Outlands from '@/components/City/Outlands'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
		path: '/city',
		name: 'city',
		component: City,
		children: [
			{
				path: '',
				component: Domestic
			},
			{
				path: 'domestic',
				name: 'domestic',
				component: Domestic
			},
			{
				path: 'outlands',
				name: 'outlands',
				component: Outlands
			}
		]
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
