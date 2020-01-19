<template>
  <div class="swiper-box" @click="hiddenGllary" v-show="hidden">
    <swiper :options="swiperOption" ref="mySwiper" v-if="detailGallery.length">
      <!-- slides -->
      <swiper-slide v-for="item of detailGallery" :key="item.id">
        <img :src="item.url" :alt="item.name" />
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'DealGallery',
  props: {
    detailGallery: Array,
    isShow: Boolean
  }, 
  data() {
    return {
      hidden: this.isShow,
      swiperOption: {
        loop: true,
        speed: 300, //切换到下一张图片所需的时间，默认300，可以省略不写
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        autoplay: {
          delay: 3000,
          /* 触摸滑动后是否禁止继续轮播 */
          disableOnInteraction: false
        }
      }
    }
  },
  methods: {
    hiddenGllary() {
      this.hidden = false
    }
  }
}
</script>
<style lang="stylus" scoped>
.swiper-box
  position fixed
  top 0
  left 0
  right 0
  bottom 0
  background black
  z-index 10
  .swiper-container
    position absolute
    width 100%
    top 50%
    margin-top -3rem
    height 6rem
    overflow visible
    img
      width 100%
    .swiper-pagination
      position fixed
      bottom 1rem
      color #fff
</style>