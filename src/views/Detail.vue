<template>
  <div class="detail-box">
    <detail-header></detail-header>
    <detail-banner></detail-banner>
    <DetailGallery :detailGallery="gallery"></DetailGallery>
  </div>
</template>

<script>
import DetailHeader from '@/components/Detail/Header'
import DetailBanner from '@/components/Detail/Banner'
import DetailGallery from '@/components/Detail/Gallery'

export default {
  name: 'Detail',
  data() {
    return {
      gallery: [
        {
          id: 1,
          url: 'http://img1.qunarzz.com/sight/p0/1603/9b/9bf694a468dd774490.water.jpg_600x330_208523f8.jpg'
        },
        {
          id: 2,
          url: 'http://img1.qunarzz.com/sight/p0/1603/9b/9bf694a468dd774490.water.jpg_600x330_208523f8.jpg'
        },
        {
          id: 3,
          url: 'http://img1.qunarzz.com/sight/p0/1603/9b/9bf694a468dd774490.water.jpg_600x330_208523f8.jpg'
        },
        {
          id: 4,
          url: 'http://img1.qunarzz.com/sight/p0/1603/9b/9bf694a468dd774490.water.jpg_600x330_208523f8.jpg'
        },
        {
          id: 5,
          url: 'http://img1.qunarzz.com/sight/p0/1603/9b/9bf694a468dd774490.water.jpg_600x330_208523f8.jpg'
        }
      ]
    }
  },
  components: {
    DetailHeader,
    DetailBanner,
    DetailGallery
  },
  created() {}
}
</script>

<style lang="stylus" scoped>
.detail-box
  min-height 1000px
</style>
