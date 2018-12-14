<template>
	<div class="main" >
		<a href="javascript:" class="go_back" @click="$router.back()">
          <i class="iconfont icon-xitongfanhui"></i>
        </a>
		<h1>{{article.articleList[this.$route.params.id].title}}</h1>
		<p>{{article.articleList[this.$route.params.id].name}} {{article.articleList[this.$route.params.id].time}}</p>
		<div class="text" v-html="article.articleList[this.$route.params.id].text">
			<!-- {{article.text}} -->
		</div>
		
	</div>
</template>

<script>
	import {mapState} from 'vuex'
	export default{
		data(){
			return{
			 	
			}
		},
		computed: {
			...mapState(["article"]),
		},	
		mounted() {
			this.$store.dispatch('getArticle')
		},
		methods: {
			
		}
	}
</script>

<style lang="scss" scoped>
	.main{
		.go_back{
			float:left;
		}
		padding:15px;
		background:#fff;
		margin-top:-60px;
		h1{
			font-weight:400px;
			font-size:20px;
		}
		p{
			padding-top:20px;
		}
		.text{
			padding-top:20px;
			line-height:25px;
		}
	}
	
</style>