<template>
	<div class="hot-box">
		<p class="title">热门城市</p>
		<ul class="list">
			<li class="item" v-for="(item, index) of list" :key="item.id">{{ item.name }}</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'CityHot',
		props: {
			list: Array
		}
	}
</script>

<style lang="stylus" scoped>
	@import '~@/assets/variable.styl'
	$city-styl()
	.list
		.item
			width $city-hotW
			height 1.3rem
			line-height 1.3rem
			border-bottom 1px solid $bor-color
	.list::before
		content: ''
		position absolute
		width $city-hotW
		left $city-hotW
		height 100%
		border-left 1px solid $bor-color
		border-right 1px solid $bor-color
			
	.list::after
		content: ''
		position absolute
		width $city-hotW
		left $city-hotW
		height 100%
		border-left 1px solid $bor-color
		border-right 1px solid $bor-color
		
</style>
