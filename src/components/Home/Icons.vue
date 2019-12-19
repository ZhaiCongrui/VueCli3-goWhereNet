<template>
	<div class="swiper-box">
		<swiper :options="swiperOption" ref="mySwiper">
			<!-- slides -->
			<swiper-slide v-for="(page,index) of pages" :key="index">
				<ul>
					<li v-for="(item, index) of page" :key="item.id">
						<img :src="item.url" alt="" />
						<p>{{ item.name }}</p>
					</li>
				</ul>
			</swiper-slide>
			<!-- Optional controls -->
			<div class="swiper-pagination" slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
/* 
局部引入axios
import axios from 'axios' 

*/
export default {
	name: 'HomeIcons',
	props: {
		homeIcons: Array
	},
	data() {
		return {
			swiperOption: {
				loop: true,
				speed: 300, //切换到下一张图片所需的时间，默认300，可以省略不写
				pagination: {
					el: '.swiper-pagination'
				},
				autoplay: false
			},
		};
	},
	computed: {
		pages() {
			const pages = []
			this.homeIcons.forEach((item, index) => {
				const page = Math.floor(index / 8)
				if (!pages[page]) {
					pages[page] = []
				}
				pages[page].push(item)
			})
			return pages
		}
	},
};
</script>

<style lang="stylus" scoped>
	.swiper-box
		background #fff
		padding-bottom .2rem
		.swiper-pagination
			bottom 0 !important
		.swiper-slide
			ul
				display flex
				flex-wrap wrap
				font-size 0.36rem
				padding-bottom 0.3rem
				li
					width 25%
					padding 0.2rem 0
					text-align center
					img
						width 50%
						margin-bottom 0.1rem
</style>
