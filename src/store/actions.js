/*
通过 mutation 间接更新 state 对象的多个方法的对象
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

import {
	reqAddress,
	reqFoodCategorys,
	reqShops,
	reqUserInfo,
	reqLogout,
	reqShopInfo,
	reqShopRatings,
	reqShopGoods,
	reqArticle,
	reqRecruitInfo
} from '../api'

import {} from './mutation-types.js'
export default{
	//异步获取地址
	async getAddress ({commit, state}) {
		//发送异步ajax请求  //维度 + 精度 
		const geohash = state.latitude + ',' + state.longitude  //参数
		const result = await reqAddress(geohash) 
		//提交一个mutation
		if (result.code === 0) {
			const address = result.data
			commit(RECEIVE_ADDRESS, {address})
		}
	},
	//异步获取食品分类
	async getCategorys ({commit}) {
		//发送异步ajax请求
		const result = await reqFoodCategorys()
		//提交一个mutation
		if (result.code === 0) {
			const categorys = result.data
			commit(RECEIVE_CATEGORYS, {categorys})
		}
		
	},
	//异步获取地址
	async getShop ({commit, state}) {
		//发送异步ajax请求
		const { longitude, latitude } = state 
		const result = await reqShops(longitude, latitude)
		//提交一个mutation
		if (result.code === 0) {
			const shops = result.data
			commit(RECEIVE_SHOPS, {shops})
		}
		
	},
	//同步记录用户信息
	recordUser ({commit}, userInfo) {
		commit(RECEIVE_USER_INFO, {userInfo})
	},

	//异步获取用户信息
	async getUserInfo({commit}) {
    const result = await reqUserInfo()
    if (result.code === 0) {
      const userInfo = result.data
      commit(RECEIVE_USER_INFO, {userInfo})
    }
  },

  //异步登出
  async logout ({commit}) {
  	const result = await reqLogout()
    if (result.code === 0) {
      commit(RESET_USER_INFO)
    }
  },



  //异步获取商家信息
  async getShopInfo ({commit}) {
  	const result = await reqShopInfo()
    if (result.code === 0) {
    	const info = result.data
      	commit(RECEIVE_INFO, {info})
    }
  },
  //异步获取商家评价类表
  async getShopRatings ({commit}) {
  	const result = await reqShopRatings()
    if (result.code === 0) {
    	const ratings = result.data
      	commit(RECEIVE_RATINGS, {ratings})
    }
  },

  //异步获取商家列表
  async getShopInfo ({commit}) {
  	const result = await reqShopGoods()
    if (result.code === 0) {
    	const goods = result.data
      	commit(RECEIVE_GOODS, {goods})
    }
  },
  //异步获取文章信息
  async getArticle ({commit}) {
  	const result = await reqArticle()
    if (result.code === 0) {
    	const article = result.data
      	commit(RECEIVE_ARTICLE, {article})
    }
  },
  //异步获取招聘信息
  async getRecruitInfo({commit}) {
  	const result = await reqRecruitInfo()
    if (result.code === 0) {
    	const recruitInfo = result.data
      	commit(RECEIVE_RECRUIT_INFO, {recruitInfo})
    }
  }


}