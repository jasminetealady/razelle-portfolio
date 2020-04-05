<template>
  <div class="AppWrapper">
    <nav class="NameNav">
      <h1>Razelle McCarrick</h1>
      <div class="HamburgerIcon">
        <font-awesome-icon @click="showNav" :icon="['fa', 'bars']" />
      </div>
    </nav>

    <MobileMenu ref="mobileMenu" />
    <nuxt />
  </div>
</template>

<script>
import MobileMenu from '@/components/MobileMenu'

export default {
  components: { MobileMenu },
  data: () => ({}),
  methods: {
    showNav() {
      document.querySelector('body').style.overflow = 'hidden'
      this.$refs.mobileMenu.$refs.mobileMenu.style.transform = `translateX(0%)`
    }
  }
}
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';
@import '../assets/scss/_breakpoints.scss';

.AppWrapper {
  display: flex;
  flex-direction: column;
  width: 100%;

  .NameNav {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background: $light;
    padding: 48px 16px;

    @include sm() {
      padding: 24px 16px;
    }

    .HamburgerIcon {
      display: none;

      @include sm() {
        display: block;
        color: lighten($dark, 10%);
        cursor: pointer;
        height: 100%;
        width: auto;
        // padding: 16px;
      }
    }

    h1 {
      min-width: 350px;
      width: 350px;
      text-transform: uppercase;
      font-size: 24px;
      letter-spacing: 2px;

      @include sm() {
        min-width: 0;
        max-width: 50%;
        line-height: 1.2;
        font-size: 24px;
      }
    }
  }
}
</style>
