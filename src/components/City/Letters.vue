<template>
	<div class="box">
		<p class="title">字母排序</p>
		<ul class="list">
			<li class="item" v-for="(item, index) of list" :key="item.id"><a :href="'#'+item.name">{{ item.name }}</a></li>
		</ul>
	</div>
</template>

<script>
	export default{
		name: 'CityLetters',
		props: {
			list: Array
		},
		data(){
			return {
				
			}
		}
	}
</script>

<style scoped lang="stylus">
	@import '~@/assets/variable.styl'
	$city-styl()
	.list
		.item
			width $city-lettersW
			height 1.3rem
			line-height 1.3rem
			a
				display block
				color #333
			a:hover
				text-decoration none
</style>
