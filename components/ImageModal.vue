<template>
  <div @click="$emit('closeModal')">Pictures</div>
</template>

<script>
export default {
  props: ["images"]
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