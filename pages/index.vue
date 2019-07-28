<template>
  <div class="home page">
    <ProjectNav @currentTab="setCurrentTab($event)" />

    <ProjectCarousel :value="0" :currentTab="currentTab" v-if="currentTab === 'react'" />
    <ProjectCarousel :value="0" :currentTab="currentTab" v-if="currentTab === 'vue'" />
    <ProjectCarousel :value="0" :currentTab="currentTab" v-if="currentTab === 'ruby'" />
    <ProjectCarousel :value="0" :currentTab="currentTab" v-if="currentTab === 'js'" />
    <!-- <ProjectCarousel value="0" :currentTab="currentTab" v-if="currentTab === 'css'" /> -->
    <ProjectCarousel :value="0" :currentTab="currentTab" v-if="currentTab === 'ecommerce'" />
  </div>
</template>

<script>
import ProjectCarousel from "../components/ProjectCarousel.vue";
import ProjectNav from "../components/ProjectNav.vue";

export default {
  data() {
    return {
      currentTab: "react"
    };
  },
  methods: {
    setCurrentTab(currentTab) {
      this.currentTab = currentTab;
    }
  },
  components: {
    ProjectNav,
    ProjectCarousel
  }
};
</script>

<style scoped lang="scss">
@import "~/assets/css/variables.scss";

.home {
  align-items: center;
  padding-bottom: 4rem;
}
</style>
