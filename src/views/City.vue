<template>
	<div>
		<city-header></city-header>
		<router-view></router-view>
	</div>
</template>

<script>
import CityHeader from '@/components/City/Header.vue'
export default {
	name: 'city',
	components: {
		CityHeader,
	}
};
</script>

<style lang="stylus" scoped>

</style>
