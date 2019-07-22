<template>
  <div class="buttons">
    <div v-if="currentIndex > 0" @click="$emit('setPreviousProject')" class="button">
      <font-awesome-icon class="fa-button" icon="arrow-circle-left" />
      <p>Next Project</p>
    </div>

    <div v-if="project.vimeo" @click="$emit('openVideoModal')" class="button">
      <font-awesome-icon class="fa-button" icon="video" />
      <p>See Video Demo</p>
    </div>

    <div @click="$emit('setCurrentProject')" class="button">
      <font-awesome-icon class="fa-button" icon="arrow-circle-right" />
      <p>Next Project</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["project", "currentIndex"]
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/variables.scss";
.fa-button {
  font-size: 28px;
  margin-bottom: 1rem;
}

.button {
  text-align: center;
  padding: 0 1rem;
  cursor: pointer;
}

.button:hover {
  color: $bubblegum;
}

.buttons {
  display: flex;
  margin-top: 2rem;
}
</style>