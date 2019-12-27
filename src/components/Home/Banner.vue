<template>
	<div  class="swiper-box">
		<swiper 
			:options="swiperOption" 
			ref="mySwiper"
			v-if="homeBanner.length">
				<!-- slides -->
				<swiper-slide v-for="(item, key) of homeBanner"
					:key="item.id" 
				>
					<img :src="item.url" :alt="item.name" @click="gotoDetail">
				</swiper-slide>
				<!-- Optional controls -->
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
	</div>
</template>

<script>
  export default {
    name: 'HomeBanner',
		props: {
			homeBanner: Array
		},
    data() {
      return {
        swiperOption: {
					loop: true,
					speed: 300,//切换到下一张图片所需的时间，默认300，可以省略不写
					pagination : {
						el: '.swiper-pagination'
					},
					autoplay: {
						delay: 3000,
						/* 触摸滑动后是否禁止继续轮播 */
						disableOnInteraction: false
					}
        },
      }
    },
		methods: {
			gotoDetail() {
				this.$router.replace('/detail')
			}
		}
  }
</script>

<style lang="stylus" scoped>
	.swiper-box >>> .swiper-pagination 
		span
			background #fff
	.swiper-box
		min-height 2.9rem
		.swiper-container
			.swiper-slide
				img
					width 100%
			
</style>
