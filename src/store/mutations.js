/*
直接更新state 的多个方法对象
*/

import {
	RECEIVE_ADDRESS,
	RECEIVE_CATEGORYS,
	RECEIVE_SHOPS,
	RECEIVE_USER_INFO,
	RESET_USER_INFO,
	RECEIVE_GOODS,
	RECEIVE_RATINGS,
	RECEIVE_INFO,
	RECEIVE_ARTICLE,
	RECEIVE_RECRUIT_INFO
} from './mutation-types.js'

export default{             //传递的包含数据的对象
	[RECEIVE_ADDRESS] (state, {address}) {
		state.address = address
	},
	[RECEIVE_CATEGORYS] (state, {categorys}) {
		state.categorys = categorys
	},
	[RECEIVE_SHOPS] (state, {shops}) {
		state.shops = shops
	},
	[RECEIVE_USER_INFO] (state, {userInfo}) {
		state.userInfo = userInfo
	},
	[RESET_USER_INFO] (state) {
   	 	state.userInfo = {}
  	},

  	[RECEIVE_GOODS] (state, {goods}) {
  		state.goods = goods
  	},
  	[RECEIVE_RATINGS] (state, {ratings}) {
  		state.ratings = ratings
  	},
  	[RECEIVE_INFO] (state, {info}) {
  		state.goods = goods 
  	},
  	[RECEIVE_ARTICLE] (state, {article}) {
  		state.article = article 
  	},
  	[RECEIVE_RECRUIT_INFO] (state, {recruitInfo}) {
  		state.recruitInfo = recruitInfo 
  	}
}