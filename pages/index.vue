<template>
  <div class="Index">
    <main class="page">
      <Portfolio />
    </main>
  </div>
</template>

<script>
import Portfolio from "@/components/Portfolio";

export default {
  components: { Portfolio },
};
</script>

<style lang="scss">
@import "../assets/scss/_variables.scss";
@import "../assets/scss/_breakpoints.scss";

.Index {
  display: flex;
  min-height: 100vh;
  width: 100%;

  @include sm {
    flex-direction: column;
  }

  .page {
    display: flex;
    margin: 0 auto;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    padding: 0 24px;

    @include sm {
      padding: 0 16px;
    }
  }
}
</style>
