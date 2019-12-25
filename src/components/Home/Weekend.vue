<template>
	<div class="weekend-box">
		<div class="title">周末去哪</div>
		<ul class="list">
			<li class="item"
				v-for="(item, index) of weekends" 
				:key="item.id"
				@click="gotoDetail"
			>
				<div class="img-box">
					<img :src="item.img_url">
				</div>
				<div class="scenic-title">{{ item.scenic_title }}</div>
				<div class="scenic-desc">{{ item.scenic_desc }}</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default{
		props: {
			weekends: Array
		},
		methods: {
			gotoDetail() {
				this.$router.replace('/detail')
			}
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~@/assets/variable.styl'
	.weekend-box
		.title 
			text-align left
			line-height 1rem
			padding-left .3rem
			font-size .4rem
		.list 
			background #fff
			.item 
				padding-bottom .4rem
				.img-box
					img
						width 100%
				.scenic-title
					text-align left
					padding-left: .3rem
					font-size .4rem
					line-height .8rem
				.scenic-desc
					text-align left
					padding-left: .3rem
					font-size .34rem
					line-height .5rem
					color #666
					$ellipsis()
</style>
