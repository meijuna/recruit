<template>
	<div>
		<HeaderTop title="我的"></HeaderTop>
		<!-- 头像区域 -->
		<router-link :to="userInfo._id ? '/userinfo' : '/login'" class="titleInfo">
			<ul class="mui-table-view mui-table-view-striped mui-table-view-condensed titleColor">
				<li class="mui-table-view-cell">
					<div class="mui-slider-cell">
						<div class="oa-contact-cell mui-table">
							<div class="oa-contact-avatar mui-table-cell">
								<img src="./images/60x60.gif" v-if="!userInfo._id"  >
								<img src="./images/yuantiao.jpg" alt="" style="width:60px; height:60px" v-else>
								<p class="name">{{userInfo.name || userInfo.phone  || "登录/注册" }}</p>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</router-link>
		
		
		<div class="list">
			<ul class="mui-table-view mui-table-view-chevron">
				<li class="mui-table-view-cell mui-media">
					<a class='mui-navigate-right' href="javascript:;">
						<!-- <img class="mui-media-object mui-pull-left" src="./images/muwu.jpg"> -->
						<span class="item_icon icon iconleft">
       				 		<i class="iconfont icon-wodedingdan"></i>
      					</span>
						<div class="mui-media-body">
							
							<p class='mui-ellipsis'>简历中心</p>
						</div>
					</a>
				</li>

				<li class="mui-table-view-cell mui-media">
					<a class='mui-navigate-right' href="javascript:;">
						<!-- <img class="mui-media-object mui-pull-left" src="./images/muwu.jpg"> -->
						<span class="item_icon icon iconleft">
       				 		<i class="iconfont icon-yanjing"></i>
      					</span>
						<div class="mui-media-body">
							
							<p class='mui-ellipsis'>谁看过我</p>
						</div>
					</a>
				</li>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a class='mui-navigate-right' href="javascript:;">
						<!-- <img class="mui-media-object mui-pull-left" src="./images/muwu.jpg"> -->
						<span class="item_icon icon iconleft">
       				 		<i class="iconfont icon-shoucang1"></i>
      					</span>
						<div class="mui-media-body">
							
							<p class='mui-ellipsis'>我的收藏</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a class='mui-navigate-right' href="javascript:;">
						<!-- <img class="mui-media-object mui-pull-left" src="./images/muwu.jpg"> -->
						<span class="item_icon icon iconleft">
       				 		<i class="iconfont icon-jianqieban"></i>
      					</span>
						<div class="mui-media-body">
							
							<p class='mui-ellipsis'>我的申请</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a class='mui-navigate-right' href="javascript:;">
						<!-- <img class="mui-media-object mui-pull-left" src="./images/muwu.jpg"> -->
						<span class="item_icon icon iconleft">
       				 		<i class="iconfont icon-iconfont5"></i>
      					</span>
						<div class="mui-media-body">
							
							<p class='mui-ellipsis'>安全中心</p>
						</div>
					</a>
				</li>

			</ul>
		</div>
			

		<ul class="mui-table-view" style="margin-top: 25px; padding:5px 0" v-if="userInfo._id">
			<li class="mui-table-view-cell" @click="logOut" >
				<a style="text-align: center;color: #FF3B30;">
					退出登录
				</a>
			</li>
		</ul>
		
		</div>
	</div>

</template>

<script>
	import {mapState} from 'vuex'
	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
	import { MessageBox, Toast } from 'mint-ui';
	export default{
		computed: {
			...mapState(['userInfo'])
		},
		components: {
			HeaderTop
		},
		methods: {
			logOut () {
				MessageBox.confirm('确定执行此操作?').then(
					action => {
						this.$store.dispatch('logout')
						Toast("登出成功")
				  
					},
					action => {
						console.log("取消退出")
					}
				);
			}
		}
	}
</script>

<style lang="scss" scoped>
.title{
	margin: 20px 15px 10px;
	color: #6d6d72;
	font-size: 15px;
}
.oa-contact-cell.mui-table .mui-table-cell {
	padding: 11px 0;
	vertical-align: middle;
}

.oa-contact-cell {
	position: relative;
	margin: -11px 0;
}

.oa-contact-avatar {
	width: 75px;
}
.oa-contact-avatar img {
	border-radius: 50%;
}
.oa-contact-content {
	width: 100%;
}
.oa-contact-name {
	margin-right: 20px;
}
.oa-contact-name, oa-contact-position {
	float: left;
}
.titleInfo{
	background-color:#02a774;
	.titleColor{
		background-color: #02a774;
	}
	.name{
		color:white;
		margin-top:5px;
	}
	
}
.list{
	margin-top:20px;
	.listWidth{
		 padding: 6px 15px !important;
	}
	.mui-table-view .mui-media-object {
    line-height: 42px;
    max-width: 42px;
    height: 30px;
    margin-top: 5px;
	}
}
.mui-ellipsis {
    color: #000;
    line-height: 40px;
    margin-left: -151px !important;
}
.icon {
	
	position:absotion;
}

.iconleft{
	line-height: 42px;
    max-width: 42px;
    height: 30px;
    float: left;
    margin-left: 10px;
}
</style>