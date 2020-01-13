<template>
  <div class="header-box">
    <div class="back-btn" v-show="isShow">
      <span class="iconfont icon-fanhui" @click="back"></span>
    </div>
    <div class="title" v-show="!isShow" :style="opacityStyle">
      <span class="iconfont icon-fanhui"></span>
      <p>上海动物园</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailHeader",
  data() {
    return {
      isShow: true,
      opacityStyle: {
        opacity: 0
      }
    };
  },
  activated() {
    window.addEventListener("scroll", this.updataOpacity);
  },
  deactivated() {
    window.removeEventListener("scroll", this.updataOpacity);
  },
  methods: {
    updataOpacity() {
      const scrollT = document.documentElement.scrollTop;
      if (scrollT > 0) {
        this.isShow = false;
        let opacity = scrollT / 209;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
      } else {
        this.isShow = true;
      }
    },
    back() {
      this.$router.replace("/");
    }
  }
};
</script>

<style lang="stylus" scoped>
@import '~@/assets/variable.styl';

.header-box {
  .back-btn {
    background: transparent;
    position: absolute;
    width: 100%;
    height: 44px;
    top: 0;
    left: 0;

    span {
      position: absolute;
      left: 0.2rem;
      top: 50%;
      transform: translateY(-50%);
      width: 36px;
      height: 36px;
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.5);
      color: #fff;
      line-height: 36px;
    }
  }

  .title {
    background: $color;
    height: 1.2rem;
    line-height: 1.2rem;
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    color: #fff;
    z-index: 10;

    span {
      position: absolute;
      left: 0;
      top: 0;
      height: 1.2rem;
      text-align: center;
      width: 1.2rem;
    }
  }
}
</style>
