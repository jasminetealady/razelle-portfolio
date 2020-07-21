<template>
  <section class="MyWork">
    <h1>career</h1>
    <div class="wrapper">
      <Project
        :title="'savvy apps'"
        :text="
          `Savvy Apps is an Award-Winning App Development and Design Agency that works with clients such as Levi's...`
        "
        :projectUrl="'https://savvyapps.com'"
        imgUrl="savvy"
        position="App Developer"
      >
      </Project>
      <Project
        :title="'speakfully'"
        :text="
          'Speakfully is a private documentation platform that empowers and supports people and organizations to confidently navigate uncomfortable situations in the workplace ...'
        "
        :projectUrl="'https://speakfully.com'"
        imgUrl="speakfully"
        position="Software Engineer"
      />
    </div>
  </section>
</template>

<script>
import Project from "@/components/Project";
export default {
  components: { Project }
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
@import "../assets/scss/breakpoints.scss";

.MyWork {
  width: 100%;

  @include sm() {
    margin-left: auto;
    margin-right: auto;
    margin-top: 64px;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h1 {
    width: 100%;
    font-size: 32px;
    color: $bubbles;
    padding-bottom: 40px;
    @include sm() {
      font-size: 24px;
    }
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: flex-start;

    .CaseStudy {
      display: inline-block;
      text-decoration: none;
      text-transform: uppercase;
      background: $bubbles;
      margin-top: 24px;
      font-size: 12px;
      padding: 8px 16px;
      color: $light;
      border-radius: 3px;
      line-height: 2;
      letter-spacing: 1px;
      &:hover {
        transform: scale(1.02);
      }
    }
  }
}
</style>
