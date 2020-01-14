<template>
  <div class="all-box">
    <div class="citys-box" v-for="(item, index) of list" :key="index">
      <p class="title">
        <a :id="item.title">{{ item.title }}</a>
      </p>
      <ul class="list">
        <li
          class="item"
          v-for="city of item.list"
          :key="city.id"
          @click="changeCity($event)"
        >{{ city.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CityAll',
  props: {
    list: Array
  },
  methods: {
    changeCity(e) {
      const city = e.target.innerText
      this.$store.commit('changeCity', city)
      this.$router.replace('/')
    }
  }
}
</script>

<style scoped lang="stylus">
@import '~@/assets/variable.styl'
$city-styl()
.list
  .item
    width $city-all
    height 1.3rem
    line-height 1.3rem
    padding 0 0.1rem
    box-sizing border-box
    $ellipsis()
    border-bottom 1px solid #ddd
    font-size $font-size
.list::before
  content ''
  position absolute
  height 100%
  width 25%
  left 25%
  border-left 1px solid #ddd
  border-right 1px solid #ddd
.list::after
  content ''
  position absolute
  height 100%
  width 25%
  right 25%
  border-right 1px solid #ddd
</style>
