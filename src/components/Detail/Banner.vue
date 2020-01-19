<template>
  <div class="detail-banner">
    <img
      class="banner-img"
      src="http://img1.qunarzz.com/sight/p0/1603/9b/9bf694a468dd774490.water.jpg_600x330_208523f8.jpg"
      alt="图片加载失败"
      @click="showGallery"
    />
    <p class="banner-title">上海动物园(AAAA景区)</p>
    <div class="banner-shadow"></div>
  </div>
</template>

<script>
export default {
  name: 'DetailBanner',
  methods: {
    showGallery() {
      this.$emit('showgallery')
    }
  }
}
</script>

<style lang="stylus" scoped>
.detail-banner
  position relative
  height 6rem
  overflow hidden
  .banner-img
    width 100%
  .banner-title
    position absolute
    left 0.3rem
    bottom 0.3rem
    font-size 0.5rem
    color #fff
    z-index 1
  .banner-shadow::after
    content ''
    position absolute
    left 0
    bottom 0
    right 0
    height 1rem
    box-shadow 0px -19px 15px 1px rgba(0, 0, 0, 0.48) inset
</style>
