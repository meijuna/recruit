<template>
	<div class="main" >
		 <a href="javascript:" class="go_back" @click="$router.back()">
         	<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left "></a>
        </a>
       		<div class="title">
       			  <span id="jobname">{{recruitInfo[this.index].jobname}}</span>
       			   <span class="minsalary">{{recruitInfo[this.index].minsalary}}K - {{recruitInfo[this.index].maxsalary}}K</span>
       		</div >
       		<div class="info">
	        	  <span class="address">{{recruitInfo[this.index].city}}·{{recruitInfo[this.index].county}}</span>
	        	  <span class="experience">{{recruitInfo[this.index].experience || 无}}年 </span>
	        	  <span class="education">{{recruitInfo[this.index].education }} </span>
	       	</div>
	       	<div class="ziwei">
	       		<p class="ziweiInfo">职位详情</p>
	       		<div>
	       			
	       		</div>
	       		<p v-for="item in recruitInfo[this.index].description" class="info2" >
	       			{{item}}
	       		</p>
	       	</div>
	       	<p class="skills">技能要求</p>
	       	<div class="box">
	       		<span v-for="item in recruitInfo[this.index].require" class="skillsInfo">
	       			{{item}}
	       		</span> 
	       	</div>
	       	<div class="mui-table-view-cell mui-media gongsi" >
					<a class='mui-navigate-right' href="javascript:;" @click="showPop=true">
						<div class="mui-media-body">
							
							<p class='mui-ellipsis'>{{recruitInfo[this.index].companyname}} · {{recruitInfo[this.index].contacts_name}}</p>
						</div>
					</a>
			</div>
	       	<router-link to="/session/1">
	       		<mt-button type="primary" class="btn" style="">发起会话</mt-button>
	       	</router-link>
	       	<mt-popup  class="popinfo" style=""
			  v-model="showPop"
			  popup-transition="popup-fade">
			  <span>{{recruitInfo[this.index].companyname}}</span> · <span>{{recruitInfo[this.index].contacts_name}}</span> <p>联系电话</p><p>{{recruitInfo[this.index].contacts_tel}}</p> 
			</mt-popup>   
	</div>
</template>

<script>
 	import {mapState} from 'vuex'
 	import { Button } from 'mint-ui';
	export default{
		data() {
			return{
				index: this.$route.params.id,
				showPop:false
			}
		},
		computed:{
          ...mapState(["recruitInfo"])
        },
        mounted() {
           this.$store.dispatch('getRecruitInfo')
        }
	}
</script>

<style lang="scss" scoped>

	.main{
		padding:20px;
		background: #fff;
		margin-top: -60px;
		.go_back{
			float:left;
		}
		.title{
			margin-top:20px;
			#jobname{
				font-size:30px;
				margin-right:10px;
				
			}
			.minsalary{
				font-size:12px;
				color:red;
				font-size:blod;
			}


		}
		.info{
			line-height:60px;
				.address{
					margin-right:3px;
					margin-left:-155px;

				}
				.experience{
				}
				.education{
				}
		}
		.ziwei{
		
			.ziweiInfo{
				margin-left:-258px;	
				line-height:35px;
				color:#000;
				font-weight:1000;
			}
			.info2{
				color:#000;
				line-height:45px;
			}

		}
		.skills{
				margin-left:-258px;	
				line-height:35px;
				color:#000;
				font-weight:1000;
			}
		.box{
			margin-top:20px;
			.skillsInfo{
				width:20px;
				height:40px;
				border:1px solid #000;
				margin-right:10px;
				padding:3px;
			}

		}
		
		.gongsi{
			margin-top:46px;
			padding:20px 5px;
			border:1px solid #8f8f94;
		}
		.btn{
			width:100%;
			position:fixed;
			left: 0;
		  right :0;
		  bottom :0;
		  z-index:999;
		}
		.popinfo{
			padding:20px;
			width:250px;
			height:200px;
			span,p{
				line-height:30px;
			}
		}
	}
</style>