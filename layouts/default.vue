<template>
  <div class="AppWrapper">
    <nav>
      <div class="headline">
        <a href="/"><h1>Razelle McCarrick</h1></a>
        <h2>Front End Engineer. Design & UI UX Oriented</h2>
        <Contact />
      </div>
    </nav>
    <nuxt />
  </div>
</template>

<script>
import Contact from "@/components/Contact";

export default {
  components: { Contact },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_breakpoints.scss";

.AppWrapper {
  display: flex;
  flex-direction: column;
  width: 100%;

  nav {
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background: $light;
    padding: 48px 16px;

    @include sm {
      padding: 24px 24px 0;
    }

    .headline {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;

      h1,
      h2 {
        text-align: center;
        width: 100%;
      }

      h1 {
        margin: 16px 0;
        font-size: 32px;
        @include sm {
          text-align: left;
        }
      }

      h2 {
        font-weight: 400;
        color: $secondary;
        font-size: 22px;
        letter-spacing: -1px;
        @include sm {
          text-align: left;
          font-weight: 500;
        }
      }
    }
  }
}
</style>
