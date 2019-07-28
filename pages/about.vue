<template>
  <div :class="$mq" class="about page">
    <h1>about</h1>
    <div :class="$mq" class="about-content">
      <div>
        <strong>Name:</strong>
        <p>Razelle McCarrick</p>
        <strong>Title:</strong>
        <p>Front End Engineer</p>
        <strong>Location:</strong>
        <p>Lakeville, MA</p>

        <strong>Favorite Tech:</strong>
        <p>Vue.js and Sass</p>
      </div>
      <div>
        <strong>Education</strong>
        <ul>
          <li>Flatiron School Online Software Engineering Program -- Jan 2019</li>
          <li>Codecademy Build Websites From Scratch -- 2017</li>
          <li>SuperHi JavaScript for Designers -- 2019</li>
          <li>Design + Code React for Designers -- 2019</li>
          <li>Udemy React Front to Back 2019 -- 2019</li>
        </ul>
        <strong>Loves:</strong>
        <ul>
          <li>Tea</li>
          <li>Animals</li>
          <li>Music</li>
          <li>Candles</li>
          <li>Aesthetic & Design</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "~/assets/css/variables.scss";

.about {
  align-items: center;
  padding-bottom: 6rem;

  &.sm {
    padding: 0 0 6rem 0;
  }

  h1 {
    margin-top: 6rem;
  }

  .about-content {
    width: 70%;
    margin-top: 6rem;

    &.lg {
      width: 80%;
    }

    &.md,
    &.sm {
      width: 90%;
    }

    &.sm {
      margin-top: 4rem;
      font-size: $mobilefontsize;
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
      margin: 0.75rem 0;
    }

    ul {
      margin: 1rem 2rem;

      li {
        margin: 0.5rem 0;
      }
    }
  }
}
</style>