<template>
  <div @click="$emit('closeModal')">
    <iframe
      :src="`${video}?title=0&byline=0&portrait=0`"
      width="640"
      height="429"
      frameborder="0"
      allow="autoplay; fullscreen"
      allowfullscreen
    ></iframe>
  </div>
</template>

<script>
export default {
  props: ["video"]
};
</script>



<style lang="scss" scoped>
div {
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(255, 255, 255, 0.8);
}
</style>