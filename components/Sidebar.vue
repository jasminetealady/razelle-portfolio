<template>
  <div class="Sidebar">
    <div class="Intro">
      <h3>Front End Developer</h3>
    </div>
    <div class="Profile">
      <Me />
      <Tech />
      <Contact />
    </div>
  </div>
</template>

<script>
import Me from '@/components/Me'
import Tech from '@/components/Tech'
import Contact from '@/components/Contact'
export default {
  components: { Me, Tech, Contact }
}
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';
@import '../assets/scss/breakpoints.scss';

.Sidebar {
  min-width: 350px;
  width: 350px;

  @include sm() {
    width: 100%;
  }

  .Intro {
    h3 {
      color: $light;
      font-size: 16px;
      padding: 24px 16px;
      background: $bubbles;
      text-transform: uppercase;
      letter-spacing: 2px;
    }
  }

  .Profile {
    background: $dark;
    padding: 48px 16px;
    color: $light;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @include sm() {
      display: none;
    }
  }
}
</style>

