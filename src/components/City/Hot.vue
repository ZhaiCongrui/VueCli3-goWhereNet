<template>
	<div class="box">
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
	$city-styl(33.33%, before)
</style>
