<template>
  <div class="Icons">
    <a href="https://github.com/jasminetealady" target="_blank">
      <font-awesome-icon size="1x" :icon="['fab', 'github']" />
    </a>
    <a href="https://linkedin.com/in/razelle" target="_blank">
      <font-awesome-icon size="1x" :icon="['fab', 'linkedin']" />
    </a>
    <a href="mailto:hello@razelle.design">
      <font-awesome-icon size="1x" :icon="['fa', 'envelope']" />
    </a>
    <a v-if="this.$route.path === '/'" href="/about">about</a>
    <a v-else href="/">home</a>
  </div>
</template>

<script></script>

<style lang="scss">
@import "../assets/scss/_breakpoints.scss";
@import "../assets/scss/variables.scss";
.Icons {
  margin: 32px auto;
  width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;

  @include sm() {
    justify-content: flex-start;
    margin: 32px 0;
  }

  a {
    font-size: 20px;
    @include sm() {
      font-weight: 500;
    }
  }

  svg {
    font-size: 24px;
    color: $secondary;
    margin: 0 16px;
    cursor: pointer;
    &:hover {
      color: lighten($secondary, 10%);
    }
    @include sm() {
      margin-left: 0;
      margin-right: 16px;
      font-size: 20px;
    }
  }
}
</style>
