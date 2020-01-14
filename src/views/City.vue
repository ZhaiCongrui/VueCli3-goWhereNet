<template>
  <div class="city-box">
    <city-header></city-header>
    <keep-alive>
      <router-view @changeLoadingState="change"></router-view>
    </keep-alive>
  </div>
</template>

<script>
import CityHeader from '@/components/City/Header.vue'

export default {
  name: 'city',
  components: {
    CityHeader
  },
  methods: {
    change() {
      this.isActive = false
    }
  }
}
</script>

<style lang="stylus" scoped>
.city-box
  background #eee
</style>
