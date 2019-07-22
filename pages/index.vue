<template>
  <div class="home page">
    <VideoModal @closeModal="videoModalOpen = false" v-if="videoModalOpen" :video="project.vimeo" />
    <ImageModal
      @closeModal="imageModalOpen = false"
      v-if="imageModalOpen"
      :images="project.images"
    />
    <div class="portfolio-tabs">
      <nav :class="$mq">
        <h1
          :class="{'underlined' : currentTab === category.dataName}"
          class="portfolio-tab"
          @click="changeTab(category.dataName)"
          :key="category.id"
          v-for="category in categories"
        >{{category.title}}</h1>
      </nav>
    </div>

    <div :class="$mq" class="portfolio-content-wrapper" v-if="react">
      <div class="project" v-if="project">
        <Project :project="project" />
        <Buttons
          @openVideoModal="videoModalOpen = true"
          @setPreviousProject="setPreviousProject()"
          @setCurrentProject="setCurrentProject()"
          :project="project"
          :currentIndex="currentIndex"
        />
      </div>
      <span v-else>Looks like there are no projects yet!</span>
    </div>

    <div :class="$mq" class="portfolio-content-wrapper" v-if="vue">
      <div class="project" v-if="project">
        <Project :project="project" />
        <Buttons
          @openVideoModal="videoModalOpen = true"
          @setPreviousProject="setPreviousProject()"
          @setCurrentProject="setCurrentProject()"
          :project="project"
          :currentIndex="currentIndex"
        />
      </div>
      <span v-else>Looks like there are no projects yet!</span>
    </div>

    <div :class="$mq" class="portfolio-content-wrapper" v-if="ruby">
      <div class="project" v-if="project">
        <Project :project="project" />
        <Buttons
          @openVideoModal="videoModalOpen = true"
          @setPreviousProject="setPreviousProject()"
          @setCurrentProject="setCurrentProject()"
          :project="project"
          :currentIndex="currentIndex"
        />
      </div>
      <span v-else>Looks like there are no projects yet!</span>
    </div>

    <div :class="$mq" class="portfolio-content-wrapper" v-if="js">
      <div class="project" v-if="project">
        <Project :project="project" />
        <Buttons
          @openVideoModal="videoModalOpen = true"
          @setPreviousProject="setPreviousProject()"
          @setCurrentProject="setCurrentProject()"
          :project="project"
          :currentIndex="currentIndex"
        />
      </div>
      <span v-else>Looks like there are no projects yet!</span>
    </div>

    <div :class="$mq" class="portfolio-content-wrapper" v-if="css">
      <div class="project" v-if="project">
        <Project :project="project" />
        <Buttons
          @openVideoModal="videoModalOpen = true"
          @setPreviousProject="setPreviousProject()"
          @setCurrentProject="setCurrentProject()"
          :project="project"
          :currentIndex="currentIndex"
        />
      </div>
      <span v-else>Looks like there are no projects yet!</span>
    </div>
  </div>
</template>

<script>
import Logo from "~/components/Logo.vue";
import VideoModal from "../components/VideoModal.vue";
import ImageModal from "../components/ImageModal.vue";
import Project from "../components/Project.vue";
import Buttons from "../components/ProjectButtons.vue";
import projects from "./data/projects.js";

export default {
  updated() {
    // debugger;
    // this.$parent.$parent.$refs.navbar.style.height = `100vh`;
  },
  data() {
    return {
      categories: [
        { id: 1, title: "react & redux", dataName: "react" },
        { id: 2, title: "vue.js", dataName: "vue" },
        { id: 3, title: "ruby, sinatra & rails", dataName: "ruby" },
        { id: 4, title: "vanilla javascript", dataName: "js" },
        { id: 5, title: "html & css/scss", dataName: "css" }
      ],
      projects: projects.projects,
      react: true,
      vue: false,
      css: false,
      js: false,
      shopify: false,
      ruby: false,
      razelle: false,
      currentTab: "react",
      currentIndex: 0,
      project: {},
      videoModalOpen: false,
      imageModalOpen: false
    };
  },
  methods: {
    changeTab(dataName) {
      if (this.react) {
        this.react = false;
      } else this[this.currentTab] = false;
      this.currentTab = dataName;
      this[dataName] = true;
      this.setInitialProject();
      // this.$parent.$parent.$refs.navbar.style.height = `100vh`;
    },
    setCurrentProject() {
      let projects = this.projects.filter(x => x.category === this.currentTab);
      if (this.currentIndex === projects.length - 1) {
        this.currentIndex = 0;
      } else this.currentIndex = this.currentIndex + 1;
      this.project = projects[this.currentIndex];
    },
    setPreviousProject() {
      let projects = this.projects.filter(x => x.category === this.currentTab);
      if (this.currentIndex > 0) {
        this.currentIndex = this.currentIndex - 1;
      }
      this.project = projects[this.currentIndex];
    },
    setInitialProject() {
      let projects = this.projects.filter(x => x.category === this.currentTab);
      this.project = projects[0];
    }
  },
  mounted() {
    this.setInitialProject();
  },
  components: {
    VideoModal,
    ImageModal,
    Project,
    Buttons
  }
};
</script>

<style scoped lang="scss">
@import "~/assets/css/variables.scss";

.underlined {
  border-bottom: solid 1px $bubblegum;
  color: $bubblegum;
}

img {
  width: 400px;
}

iframe {
  width: 50%;
}

.portfolio-tabs {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
}

.portfolio-content-wrapper {
  margin-top: 2rem;
  width: 100%;
  font-family: Share Tech Mono;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

.home {
  align-items: center;
}

nav {
  display: flex;
  justify-content: center;
  width: 80%;
  flex-wrap: wrap;
  h1 {
    white-space: nowrap;
    padding: 1rem 0;
    margin: 0 1rem;
    cursor: pointer;
  }
  &.lg {
    width: 100%;
  }
}
</style>
