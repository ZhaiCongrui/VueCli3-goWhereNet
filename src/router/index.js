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
    component: Home,
		meta: {
			title: '首页'
		}
  },
  {
		path: '/city',
		name: 'city',
		component: City,
		meta: {
			title: '城市'
		},
		children: [
			{
				path: '',
				redirect: 'domestic'
			},
			{
				path: 'domestic',
				name: 'domestic',
				component: Domestic,
				meta: {
					title: '境内'
				}
			},
			{
				path: 'outlands',
				name: 'outlands',
				component: Outlands,
				meta: {
					title: '境外·港澳台'
				}
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

//跳转到新路由, 改变页面的  title
/* 1. 
	router.afterEach((to, from) => {
		console.log(to)
		document.title = to.meta.title
	})
*/
/* 2. */
	router.beforeEach((to, from, next) => {
		next()
		document.title = to.meta.title
	})

export default router
