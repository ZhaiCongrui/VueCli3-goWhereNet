<template>
	<div class="box">
		<p class="title">字母排序</p>
		<ul class="list">
			<li class="item" v-for="(item, index) of list" :key="item.id">{{ item.name }}</li>
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
	$city-styl(16.666%)
</style>
