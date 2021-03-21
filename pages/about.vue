<template>
  <div class="About">
    <p>
      Hi! I'm Razelle. I'm a remote front end software engineer from Boston and
      coding bootcamp graduate.
      <br /><br />In my first development job I worked as the sole front end
      engineer at a startup to bring the MVP for Speakfully to life. I built the
      website and first iteration of the product from the ground up. Following
      that, I worked on various internal web applications for Levi's and
      marketing sites for other clients at a digital agency. Presently, I work
      at Notarize as a front end engineer specializing in accessibility, as we
      begin to scale and grow. I build out new features and write unit tests and
      end to end tests. I am detail oriented and enjoy refactoring and
      debugging. I am proactive, vocal, and always try to leave things better
      than I found them. I have worked primarily with React, Vue, and Nuxt (I
      built this site in Nuxt) and have experience with Gatsby, Ruby on Rails,
      Firebase, GraphQL, and of course vanilla JavaScript and Git. I have built
      designs out primarily from Figma and Invision. <br /><br />
      My experiences so far have been diverse, but my passion is for design, UI,
      and UX. It's important to me to work with excellent design, as I believe
      creating a pleasant user experience is impactful. Wherever the wind blows
      me, it is important to find my values there. Diversity and inclusion are
      important and that means not only having respect and a welcoming
      environment for female engineers, but being inclusive and welcoming of all
      genders, races, and forms of education in coding. <br />If you're
      interested shoot me an email
      <a href="mailto:hello@razelle.design">hello@razelle.design</a>!
      <br /><br />Look forward to connecting.
    </p>
  </div>
</template>

<script>
export default {
  components: {},
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_breakpoints.scss";

.About {
  text-align: center;
  display: flex;
  justify-content: center;
  margin-bottom: 96px;

  @include sm() {
    text-align: left;
  }

  p {
    display: block;
    max-width: 1000px;
    padding: 0 24px;
  }
}
</style>
