<template>
  <div :class="$mq" class="portfolio-content">
    <p class="title">
      <strong>{{ project.title }}</strong>
    </p>
    <p>
      <a v-if="project.github" :href="project.github" target="_blank">GitHub Link</a>
      <a v-if="project.link" :href="project.link" target="_blank">Link</a>
    </p>
    <p>
      <a v-if="project.heroku" :href="project.heroku" target="_blank">Heroku Link</a>
    </p>
    <p v-if="project.functionality">
      <strong>Functionality:</strong>
      <br />
      <br />
      {{project.functionality}}
    </p>
    <p>
      <strong>Technologies Used:</strong>
    </p>
    <div>
      <ul>
        <li :key="tech" v-for="tech in project.technologies">{{tech}}</li>
      </ul>
    </div>
    <p v-html="project.notes"></p>
  </div>
</template>

<script>
export default {
  props: ["project"]
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/variables.scss";

.portfolio-content {
  padding: 1rem;
  width: 70%;
  font-size: 16px;
  line-height: 1.2;
  margin-top: 2rem;

  &.lg {
    width: 80%;
  }

  &.md,
  &.sm {
    width: 90%;
  }
}

.title {
  text-align: center;
  font-size: 22px;
}

a {
  color: $bubblegum;
  border-bottom: solid 1px $bubblegum;
  padding-bottom: 0.25rem;
  display: inline-block;
  text-decoration: none;
}

strong {
  color: $bubblegum;
}

a:hover {
  color: $lavender;
  border-bottom: solid 1px $lavender;
}

p {
  margin-bottom: 1rem;
}

ul {
  margin: 2rem;
}
</style>