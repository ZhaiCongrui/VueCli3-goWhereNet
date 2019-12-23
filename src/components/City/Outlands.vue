<template>
	<div class="box">
		<city-hot :list="list.hot"></city-hot>
		<city-letters :list="list.letters"></city-letters>
		<city-all :list="list.allCity"></city-all>
	</div>
</template>

<script>
	import CityHot from '@/components/City/Hot'
	import CityLetters from '@/components/City/Letters'
	import CityAll from '@/components/City/All'
	export default {
		name: 'CityDomestic',
		data(){
			return {
				list: []
			}
		},
		components: {
			CityHot,
			CityLetters,
			CityAll,
		},
		created(){
			this.getJson()
		},
		methods: {
			getJson(){
				this.$axios('/city/outlands.json')
					.then((res) => {
						const _data = res.data.data
						this.list = _data
					})
			}
		}
	}
</script>

<style>
</style>
