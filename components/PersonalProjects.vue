<template>
  <section class="MyWork">
    <h1>projects</h1>
    <div class="wrapper">
      <Project
        title="gatsby portfolio site"
        text="A Gatsby recreation of razellemccarrick.com using WordPress as a back end with GraphQL."
        :projectUrl="'https://razelle.netlify.app'"
      />
      <Project
        title="prismic blog"
        text="A simple blog site that pulls posts from Prismic's headless CMS."
        :projectUrl="'https://razelle-prismic.herokuapp.com/'"
      />
      <Project
        title="storyblok site demo"
        text="A demo site that pulls from the Storyblok CMS."
        :projectUrl="'https://storyblok-demo.herokuapp.com/'"
      />
      <Project
        title="shahid buttar"
        text="A concept redesign of Shahid Buttar's campaign website."
        :projectUrl="'https://shahid-buttar.netlify.app'"
      />
      <Project
        title="voter dash"
        text="
          A voter information app with a custom API that provides information on voter registration deadlines and the website to check voter registration in the user's state.
        "
        :projectUrl="'https://voter-info.netlify.app'"
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
.MyWork {
  .Project {
    margin-bottom: 48px;
  }
}
</style>
