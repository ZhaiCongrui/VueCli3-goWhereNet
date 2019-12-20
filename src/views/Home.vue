<template>
	<div class="home">
		<home-header></home-header>
		<home-banner :homeBanner="banners"></home-banner>
		<home-icons :homeIcons="icons"></home-icons>
		<home-lovely :list="loveList"></home-lovely>
		<home-weekend :weekends="weekends"></home-weekend>
	</div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '@/components/Home/Header'
import HomeBanner from '@/components/Home/Banner'
import HomeIcons from '@/components/Home/Icons'
import HomeLovely from '@/components/Home/Lovely'
import HomeWeekend from '@/components/Home/Weekend'

export default {
	name: 'Home',
	components: {
		HomeHeader,
		HomeBanner,
		HomeIcons,
		HomeLovely,
		HomeWeekend,
	},
	data() {
		return {
			banners: [],
			icons: [],
			loveList: [],
			weekends: []
		};
	},
	created() {
		this.getJson()
	},
	methods: {
		getJson() {
			this.$axios.get('/home/home.json')
				.then(this.getJsonSucc)
		},
		getJsonSucc(res) {
			const _data = res.data.data
			this.banners = _data.banners
			this.icons = _data.icons
			this.loveList = _data.lovely
			this.weekends = _data.weekends
		}
	}
};
</script>

<style lang="stylus" scoped>
	.home 
		background #eee
</style>
