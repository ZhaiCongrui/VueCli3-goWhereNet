<template>
  <div class="detail-box">
    <detail-header></detail-header>
    <detail-banner></detail-banner>
  </div>
</template>

<script>
import DetailHeader from '@/components/Detail/Header'
import DetailBanner from '@/components/Detail/Banner'

export default {
  name: 'Detail',
  components: {
    DetailHeader,
    DetailBanner
  },
  created() {}
}
</script>

<style lang="stylus" scoped>
.detail-box
  min-height 1000px
</style>
