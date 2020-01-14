<template>
  <header>
    <div class="top">
      <span class="back iconfont icon-fanhui" @click="goHome"></span>
      <p class="title">城市选择</p>
    </div>
    <div class="bottom">
      <ul>
        <router-link to="domestic" tag="li" active-class="active" replace>境内</router-link>
        <router-link to="outlands" tag="li" active-class="active" replace>境外·港澳台</router-link>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'CityHeader',
  methods: {
    goHome() {
      this.$router.replace('/')
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~@/assets/variable.styl'
header
  background $color
  font-size 0.4rem
  color #fff
  .top
    position relative
    height 1rem
    line-height 1.2rem
    span
      position absolute
      left 0
      top 0
      width 1.2rem
      height 1rem
    p
      text-align center
      font-size 0.46rem
  .bottom
    background $color
    ul
      display flex
      padding 0.2rem 1.5rem
      .active
        background #FFF
        color $color
      li
        flex 1
        border 1px solid #fff
        height 0.6rem
        line-height 0.6rem
      .lightLi
        background #fff
        color $color
</style>
