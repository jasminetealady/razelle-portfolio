<template>
  <nav ref="mobileMenu" class="MobileMenu">
    <div class="CloseIcon">
      <font-awesome-icon @click="hideNav" :icon="['fa', 'times']" />
    </div>

    <div>
      <div class="Icons">
        <a href="https://github.com/jasminetealady" target="_blank">
          <font-awesome-icon size="2x" :icon="['fab', 'github']" />
        </a>
        <a href="https://linkedin.com/in/razelle" target="_blank">
          <font-awesome-icon size="2x" :icon="['fab', 'linkedin']" />
        </a>
        <a href="mailto:hello@razelle.design">
          <font-awesome-icon size="2x" :icon="['fa', 'envelope']" />
        </a>
      </div>
    </div>

    <Me />
    <Tech />
  </nav>
</template>

<script>
import Me from '@/components/Me'
import Tech from '@/components/Tech'
export default {
  components: { Me, Tech },
  methods: {
    hideNav() {
      this.$refs.mobileMenu.style.transform = `translateX(-100%)`
      // document.querySelector('body').style.overflowY = 'visible'
    }
  },
  beforeDestroy() {
    // document.querySelector('body').style.overflow = 'visible'
  }
}
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';

.MobileMenu {
  background: $dark;
  position: fixed;
  overflow-y: hidden;
  padding: 24px 16px 64px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100%;
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  transform: translateX(-100%);
  transition: 1s ease all;

  .ProfileSection {
    width: 70%;
    margin: 24px 0;
    padding: 0;
    color: $light;
  }

  .CloseIcon {
    display: flex;
    width: 100%;
    padding: 16px;
    justify-content: flex-end;
    cursor: pointer;

    svg {
      color: $bubbles;
      &:hover {
        color: lighten($bubbles, 10%);
      }
    }
  }
}
</style>