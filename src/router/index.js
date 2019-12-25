import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '@/views/Home.vue'
// import City from '@/views/City'
// import Domestic from '@/components/City/Domestic'
// import Outlands from '@/components/City/Outlands'

/* 以下写法为了实现路由的懒加载 */
const Home = () => import('@/views/Home')
const City = () => import('@/views/City')
const Detail = () => import('@/views/Detail')
const Domestic = () => import('@/components/City/Domestic')
const Outlands = () => import('@/components/City/Outlands')

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
				redirect: 'domestic'
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
  },
	{
		path: '/detail',
		name: 'detail',
		component: Detail
	}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
