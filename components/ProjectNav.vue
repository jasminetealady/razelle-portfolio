<template>
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
</template>

<script>
export default {
  data() {
    return {
      categories: [
        { id: 1, title: "react & redux", dataName: "react" },
        { id: 2, title: "vue.js", dataName: "vue" },
        { id: 3, title: "ruby, sinatra & rails", dataName: "ruby" },
        { id: 4, title: "vanilla javascript", dataName: "js" },
        { id: 5, title: "html & css/scss", dataName: "css" }
      ],
      react: true,
      vue: false,
      css: false,
      js: false,
      shopify: false,
      ruby: false,
      currentTab: "react"
    };
  },
  methods: {
    changeTab(dataName) {
      if (this.react) {
        this.react = false;
      } else this[this.currentTab] = false;
      this.currentTab = dataName;
      this.$emit("currentTab", this.currentTab);
      this[dataName] = true;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/variables.scss";

.underlined {
  border-bottom: solid 1px $bubblegum;
  color: $bubblegum;
}

.portfolio-tabs {
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 5rem;
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