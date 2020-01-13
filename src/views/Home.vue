<template>
  <div class="home">
    <vue-element-loading
      :active="isActive"
      :is-full-screen="true"
      spinner="line-scale"
      color="#00afc7"
      duration=".8"
      background-color="#fff"
    />
    <home-header :homeCity="city"></home-header>
    <home-banner :homeBanner="banners"></home-banner>
    <home-icons :homeIcons="icons"></home-icons>
    <home-lovely :list="loveList"></home-lovely>
    <home-weekend :weekends="weekends"></home-weekend>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from "@/components/Home/Header";
import HomeBanner from "@/components/Home/Banner";
import HomeIcons from "@/components/Home/Icons";
import HomeLovely from "@/components/Home/Lovely";
import HomeWeekend from "@/components/Home/Weekend";
import VueElementLoading from "vue-element-loading";

export default {
  name: "Home",
  components: {
    HomeHeader,
    HomeBanner,
    HomeIcons,
    HomeLovely,
    HomeWeekend,
    VueElementLoading
  },
  data() {
    return {
      isActive: true,
      banners: [],
      icons: [],
      loveList: [],
      weekends: []
    };
  },
  created() {
    this.getJson();
  },
  computed: {
    city() {
      return this.$store.state.city;
    }
  },
  methods: {
    getJson() {
      this.$axios.get("/home/home.json").then(this.getJsonSucc);
    },
    getJsonSucc(res) {
      const _data = res.data.data;
      this.banners = _data.banners;
      this.icons = _data.icons;
      this.loveList = _data.lovely;
      this.weekends = _data.weekends;
      setTimeout(() => (this.isActive = false), 500);
    }
  },
  activated() {
    if (localStorage.city !== this.$store.state.city) {
      this.getJson();
      localStorage.city = this.$store.state.city;
    }
  }
};
</script>

<style lang="stylus" scoped>
.home {
  background: #eee;
}
</style>
