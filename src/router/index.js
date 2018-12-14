import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/Home/Home.vue'
import Information from '../pages/Information/Information.vue'
import Message from '../pages/Message/Message.vue'
import Mine from '../pages/Mine/Mine.vue'
import Login from '../pages/Login/Login.vue'
import Article from '../pages/Article/Article.vue'
import RecruitInfo from '../pages/RecruitInfo/RecruitInfo.vue'
import Session from '../pages/Session/Session.vue'
Vue.use(VueRouter)

export default new VueRouter({
	routes:[
		{
			path:'/',
			redirect: Home,
			meta: {
				showFooter: true
			}
		},
		{
			path:'/home',
			component: Home,
			meta: {
				showFooter: true
			}
		},
		{
			path:'/information',
			component: Information,
			meta: {
				showFooter: true
			}
		},
		{
			path:'/message',
			component: Message,
			meta: {
				showFooter: true
			}
		},
		{
			path:'/mine',	
			component: Mine,
			meta: {
				showFooter: true
			}
		},
		{
			path:'/login',
			component: Login
		},
		{
			path:'/article/:id',
			component: Article
		},
		{
			path:'/recruitInfo/:id',
			component:RecruitInfo
		},
		{
			path:'/session/:id',
			component:Session
		}
		
	]
})
