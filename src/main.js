// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index.js'
import store from './store'
import { Swipe, SwipeItem, Button,Popup } from 'mint-ui';
import './mock/mockServer.js' //加载mockServer就行

Vue.component(Swipe.name, Swipe);
Vue.component(Button.name, Button);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Popup.name, Popup);
new Vue({
	el: '#app',
	render: h => h(App),
	router,
	store  //使用vuex 
})