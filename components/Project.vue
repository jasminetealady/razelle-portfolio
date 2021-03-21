<template>
  <div :class="[{ reverse: reverse }, 'Project']">
    <div class="description">
      <h4>{{ title }}</h4>
      <p>{{ text }}</p>
      <br />
      <p>{{ role }}</p>
      <slot></slot>
    </div>
    <div class="project-img">
      <a class="project-img-link" :href="projectUrl" target="_blank">
        <img :src="image" />
        <img
          v-if="secondaryImage"
          :src="secondaryImage"
          class="secondary-img"
        />
        <img v-if="tertiaryImage" :src="tertiaryImage" class="tertiary-img" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    "title",
    "text",
    "projectUrl",
    "image",
    "secondaryImage",
    "tertiaryImage",
    "reverse",
    "role",
  ],
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
@import "../assets/scss/breakpoints.scss";

.Project {
  display: flex;
  width: 100%;
  justify-content: space-between;
  text-decoration: none;
  height: 100%;
  margin-bottom: 104px;

  &.reverse {
    flex-direction: row-reverse;
    @include sm {
      flex-direction: column;
    }
  }

  @include sm {
    flex-direction: column;
    margin-bottom: 48px;
  }

  .project-img {
    width: 50%;
    position: relative;
    padding: 0 16px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    @include sm {
      width: 100%;
      justify-content: flex-start;
      margin-top: 24px;
    }

    .project-img-link {
      display: flex;
    }

    img {
      width: 400px;
      position: relative;
      z-index: 3;
      transition: 0.4s all ease-in;
      @include sm {
        width: 100%;
      }
    }

    .secondary-img {
      position: absolute;
      z-index: 2;
      top: 48px;
      right: 16px;
      @include sm {
        display: none;
      }
    }

    .tertiary-img {
      position: absolute;
      z-index: 1;
      top: 80px;
      left: 16px;
      @include sm {
        display: none;
      }
    }

    .tertiary-img {
      position: absolute;
    }

    &:hover {
      opacity: 0.8;

      .secondary-img {
        top: 32px;
        right: 8px;
        z-index: 4;
      }

      .tertiary-img {
        top: 64px;
      }
    }
  }

  .description {
    width: 50%;
    padding: 16px;
    @include sm {
      width: 100%;
    }
    a {
      font-size: 16px;
      font-family: Lato;
      display: inline-block;
      text-decoration: underline;
      padding: 16px 0;
    }
  }

  h4 {
    border-bottom: $dark solid 1px;
    padding-bottom: 16px;
    margin-bottom: 16px;
    font-size: 24px;
    color: lighten($dark, 20%);
    display: inline-block;

    @include sm {
      font-size: 20px;
    }
  }
}
</style>
