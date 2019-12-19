<template>
	<div  class="swiper-box">
		<swiper :options="swiperOption" ref="mySwiper">
				<!-- slides -->
				<swiper-slide v-for="(item, key) of homeBanner" :key="item.id">
					<img :src="item.url" :alt="item.name">
				</swiper-slide>
				<!-- Optional controls -->
				<div class="swiper-pagination"  slot="pagination"></div>
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
					speed: 300,//切换到下一张图片所需的时间，默认300，可以生略略不写
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
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // current swiper instance
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
      this.swiper.slideTo(1, 1000, false)
    }
  }
</script>

<style lang="stylus" scoped>
	.swiper-box >>> .swiper-pagination 
		span
			background #fff
	.swiper-box
		.swiper-container
			.swiper-slide
				img
					width 100%
			
</style>
