<template>
	<div class="zixun">
		<HeaderTop title="资讯"></HeaderTop>

		<div class="mui-card">
			<router-link to="/article/0" class="mui-card-header " style="height:40vw;background-image:url(./images/cbd.jpg)">
				<img src="./images/职场资讯01.png" alt="" style="width:300px">
			</router-link>
			<ul class="mui-table-view">
				<router-link to="/article/1"  tag="li" class="mui-table-view-cell mui-media" >
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-right" src="./images/muwu.jpg">
						<div class="mui-media-body">
							
							<p class='mui-ellipsis'><strong class="ititle">[职场攻略]</strong>为什么从来没有人告诉我该这样跳槽？！</p>
						</div>
					</a>
				</router-link>
				<router-link to="/article/2" tag="li" class="mui-table-view-cell mui-media" >
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-right" src="./images/cbd.jpg">
						<div class="mui-media-body">
							
							<p class='mui-ellipsis'><strong class="ititle">[职场攻略]</strong>毕业一年月薪50K，他的竞争力在哪里？</p>
						</div>
					</a>
				</router-link>
				
			</ul>	
		</div>
		<!-- <div class="mui-card" style="margin-bottom: 35px;">
			
		</div> -->
		<div class="mui-card">
			<router-link to="/article/3" class="mui-card-header " style="height:40vw;background-image:url(./images/cbd.jpg)">
				<img src="./images/职场资讯02.png" alt="" style="width:300px">
			</router-link>
			<ul class="mui-table-view">
				<router-link to="/article/4" tag="li" class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-right" src="./images/muwu.jpg">
						<div class="mui-media-body">
							
							<p class='mui-ellipsis'><strong class="ititle">[职场攻略]</strong>内幕来袭！绝对是你不知道的重磅消息！</p>
						</div>
					</a>
				</router-link>
				<router-link to="/article/5" tag="li" class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-right" src="./images/cbd.jpg">
						<div class="mui-media-body">
							
							<p class='mui-ellipsis'><strong class="ititle">[职场攻略]</strong>2017年高校应届生就业竞争力100强！</p>
						</div>
					</a>
				</router-link>
				
			</ul>	
		</div>

	</div>
</template>

<script>
	import HeaderTop from '../../components/HeaderTop/HeaderTop.vue'
	export default{
		components: {
			HeaderTop
		}
	}
</script>

<style lang="scss" scoped>
.zixun{
	overflow:hidden;
	width:100%
}

.mui-card-header > img:first-child {
	width: 325px !important;
	height:125px;
}
.mui-card {
	margin: 0 10px  20px 10px ;

}
.mui-table-view-cell p {
    padding: 14px 0;
    color: #000;
}


.ititle{
	font-weight:bold;
}
</style>