<template>
  <div class="ProfileSection">
    <h4>Contact</h4>

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
    </div>
  </div>
</template>

<style lang="scss">
.ProfileSection {
  .Icons {
    margin-top: 32px;
    width: 50%;
    padding: 0;
    display: flex;
    justify-content: space-around;
    svg {
      font-size: 24px;
    }
  }
}
</style>