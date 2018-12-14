<template>
	<div class="home">
		<HeaderTop title="首页"></HeaderTop>
		<div class="searchImg">
			<div class="search">
				<input type="text">
				<button type="button" class="mui-btn mui-btn-success" >搜索</button>
			</div>
			 
			<!-- <img src="./images/banner.jpg" height="90" width="400" alt=""> -->
            <div class="swpe" style="width:400px;height:150px">
                <mt-swipe :auto="4000">
                  <mt-swipe-item><img src="https://www.lgstatic.com/i/image2/M01/B5/DE/CgotOVwKQ6yALeHjAASJpFxt47E132.PNG" alt=""></mt-swipe-item>
                  <mt-swipe-item><img src="https://www.lgstatic.com/i/image2/M01/B5/BD/CgotOVwKF5-Ab5gzAAgJyKUVgpM202.PNG" alt=""></mt-swipe-item>
                  <mt-swipe-item><img src="https://www.lgstatic.com/i/image2/M01/B5/BD/CgotOVwKF5-Ab5gzAAgJyKUVgpM202.PNG" alt=""></mt-swipe-item>
                </mt-swipe>  
            </div>		
            
		</div>
		<ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-3 ">
          <router-link to="/home/newslist">
            <img src="./images/menu2.png" alt="">
            <div class="mui-media-body">热门推荐</div>
         </router-link>
        </li>           
        <li class="mui-table-view-cell mui-media mui-col-xs-3 ">
            <router-link to="/home/newslist">
                <img src="./images/攻略.jpg" alt="">
                <div class="mui-media-body">求职攻略</div>
           </router-link>
        </li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 ">
            <router-link to="/home/goodslist">
                <img src="./images/4.png" alt="">
                <div class="mui-media-body">简历申请</div>
              </router-link>
      	</li>
        <li class="mui-table-view-cell mui-media mui-col-xs-3 ">
            <router-link to="/home/goodslist">
                <img src="./images/3.jpg" alt="">
                <div class="mui-media-body">谁看过我</div>
              </router-link>
        </li>
        </ul>
    <!-- 求职列表 -->
    <ul class="mui-table-view mui-table-view-striped mui-table-view-condensed" v-for="(item, index) in recruitInfo" :key="index">
		        
        <router-link :to="'/recruitInfo/'+(index)" tag="li"   class="mui-table-view-cell" >

            <div class="mui-table">

                <div class="mui-table-cell mui-col-xs-10">
                    <h4 class="mui-ellipsis-2">{{item.jobname}}</h4>
                    <p class="mui-h6 mui-ellipsis">{{item.companyname}}</p>
                </div>
                <div class="mui-table-cell mui-col-xs-2 mui-text-right">
                    <span class="mui-h5">{{item.minsalary}}K - {{item.maxsalary}}K</span>
                     
                </div>
            </div>
        </router-link>
     
	</ul>
	</div>
</template>

<script>
	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
    import { Swipe, SwipeItem  } from 'mint-ui';
    import {mapState} from 'vuex'
    
	export default{
        data(){
            return {

            }
        },
        computed:{
            ...mapState(["recruitInfo"])
        },
		components: {
			HeaderTop
		},
        mounted() {
            this.$store.dispatch('getRecruitInfo')
        },
	}
</script>

<style lang="scss" scoped>

.searchImg {
	margin-top:-20px;
	position: relative;
	.search {
        z-index: 999;
		margin:55px 40px;
		font-size: 15px; 
		width:300px;
		height:30px;
		position: absolute;
		background: white;
		display: flex;
		justify-content:content;
		input {
			font-size: 13px
		}
	}
	.mui-btn{
		height: 40px;
		padding: 6px 16px;
	}
}
.mui-table-view-cell {
	.mui-ellipsis-2{
	    font-weight: bold;
	}
	span{

	}
	p {
		padding-top: 2px;
		color: #000;
		margin-left: -144px !important;
		margin:10px 0;
	}
	.mui-h5{
		color:red;
		font-weight: 20px;
	}
}

.mui-grid-view.mui-grid-9 {
    background: white;
    border:0;
    img {
        width: 60px;
        height: 60px;
     }
    .mui-media-body{
        font-size: 13px;
    }
   

}

.mui-grid-view.mui-grid-9 .mui-table-view-cell {
  border: 0;
}

.swpe img {
    width:100%;
    height:100%;
}

</style>