<template>
  <div class="Project">
    <div class="Clickable">
      <a :href="projectUrl" target="_blank">
        <h4>{{title}}</h4>
        <p class="Position">{{position}}</p>
        <p>{{text}}</p>
      </a>
    </div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ['title', 'text', 'projectUrl', 'position']
}
</script>

<style lang="scss">
@import '../assets/scss/_variables.scss';
@import '../assets/scss/breakpoints.scss';

.Project:first-of-type {
  @include sm() {
    margin-bottom: 80px;
  }
}

.Project {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  text-decoration: none;
  max-width: 300px;
  margin-bottom: 88px;

  @include sm() {
    max-width: 90%;
    margin-bottom: 0px;
  }

  .Clickable {
    cursor: pointer;
    &:hover {
      transform: scale(1.02);
    }
  }

  h4,
  h1 {
    width: 100%;
    border-bottom: $border;
    padding-bottom: 16px;
    margin-bottom: 16px;
    font-weight: bold;
    color: lighten($dark, 20%);
  }

  p {
    font-family: Lato;
    font-size: 16px;

    @include sm() {
      font-size: 14px;
    }
  }

  .Position {
    font-weight: 900;
  }
}
</style>
