<template>
	<div class="box">
		<city-hot :list="list.hot"></city-hot>
		<city-letters :list="list.letters"></city-letters>
		<city-all :list="list.allCity"></city-all>
	</div>
</template>

<script>
	import CityHot from '@/components/City/Common/Hot'
	import CityLetters from '@/components/City/Common/Letters'
	import CityAll from '@/components/City/Common/All'
	export default {
		name: 'CityDomestic',
		data(){
			return {
				list: [],
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
				this.$axios('/city/domestic.json')
					.then((res) => {
						const _data = res.data.data
						this.list = _data
					})
			},
			passCity(data) {
				this.$emit('changeCity', data)
				console.log(data)
			}
		}
	}
</script>

<style lang="stylus" scoped>
	
</style>
