<template>
  <div :class="$mq" class="portfolio-content-wrapper">
    <VideoModal @closeModal="videoModalOpen = false" v-if="videoModalOpen" :video="project.vimeo" />
    <!-- <ImageModal
      @closeModal="imageModalOpen = false"
      v-if="imageModalOpen"
      :images="project.images"
    />-->
    <carousel
      v-model="value"
      :perPage="1"
      :page-change="currentProject(value)"
      paginationActiveColor="#9292ef"
      paginationColor="rgba(146, 146, 239, 0.29)"
    >
      <slide :key="proj.id" v-for="proj in filteredProjects">
        <Project @openVideoModal="videoModalOpen = true" :project="proj" />
      </slide>
    </carousel>

    <span v-if="numberOfProjects() === 0">
      Will be adding these soon. In the meantime see
      <a href="https://razellemccarrick.com/portfolio">my other portfolio site</a>
    </span>
  </div>
</template>

<script>
import projects from "../pages/data/projects.js";
import Project from "../components/Project.vue";
import VideoModal from "./VideoModal.vue";

export default {
  components: { Project, VideoModal },
  props: ["currentTab", "value"],
  data() {
    return {
      videoModalOpen: false,
      projects: projects.projects,
      project: {},
      value: 0
    };
  },
  computed: {
    filteredProjects() {
      let projects = this.projects.filter(x => x.category === this.currentTab);
      return projects;
    }
  },
  methods: {
    currentProject(pageNumber) {
      this.project = this.filteredProjects[pageNumber];
    },
    numberOfProjects() {
      let projects = this.filteredProjects;
      return projects.length;
    }
  }
};
</script>

<style lang="scss" scoped>
.VueCarousel-slide {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.portfolio-content-wrapper {
  margin-top: 2rem;
  width: 100%;
  font-family: Share Tech Mono;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

iframe {
  width: 50%;
}

.project {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

span {
  text-align: center;
}
</style>