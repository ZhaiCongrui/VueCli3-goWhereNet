<template>
	<div class="box">
		<vue-element-loading
			:active="isActive" 
			:is-full-screen="true"
			spinner="line-scale"
			color="#00afc7"
			duration=".8"
			background-color="#fff"
		/>
		<city-hot :list="list.hot"></city-hot>
		<city-letters :list="list.letters"></city-letters>
		<city-all :list="list.allCity"></city-all>
	</div>
</template>

<script>
	import CityHot from '@/components/City/Common/Hot'
	import CityLetters from '@/components/City/Common/Letters'
	import CityAll from '@/components/City/Common/All'
	import VueElementLoading from 'vue-element-loading'
	
	export default {
		name: 'CityDomestic',
		data(){
			return {
				isActive: true,
				list: [],
			}
		},
		components: {
			CityHot,
			CityLetters,
			CityAll,
			VueElementLoading,
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
					this.isActive = false
				})
			},
		}
	}
</script>

<style lang="stylus" scoped>
	
</style>
