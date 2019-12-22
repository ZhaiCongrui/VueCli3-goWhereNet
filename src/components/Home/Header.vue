<template>
	<div class="header">
		<div class="header-left">
			<span class="iconfont icon-fanhui"></span>
		</div>
		<div class="header-center">
			<span class="iconfont icon-chazhao"></span>
			<div class="input">输入城市/景点/游玩主题</div>
		</div>
		<div class="header-right">
			<router-link to="/city" tag="div">
				<span class="city-name">上海</span>
				<span class="iconfont icon-xiala"></span>
			</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
	@import '~@/assets/variable.styl'
	.header
		display flex
		height $height
		line-height $height
		background $color
		color #fff
		font-size .4rem
		.header-left
			min-width $height
		.header-center 
			position relative
			background #fff
			height .8rem
			line-height .8rem
			color #ddd
			top 50%
			transform translateY(-50%)
			flex 1
			text-align left
			border-radius 4px
			overflow hidden
			span
				position absolute
				top 50%
				left .2rem
				width .5rem
				z-index 1
				transform translateY(-50%)
			.input 
				position absolute
				left 0
				top 0
				box-sizing border-box
				padding-left .8rem
				width 100%
				height 100%
		.header-right 
			min-width 1rem
			padding 0 .2rem
</style>
