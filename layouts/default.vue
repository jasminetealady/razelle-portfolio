<template>
  <div :class="[$mq, {'app-dark' : darkMode, 'app-light' : !darkMode}]" class="app-container">
    <div id="sparkles" class="byline">
      <img @click="slideMenu()" src="../images/sparkles_blurple.png" />
    </div>

    <Nav ref="navbar" :darkMode="darkMode" @toggleDarkMode="darkMode = !darkMode" />

    <MobileNav
      ref="mobilenav"
      :darkMode="darkMode"
      @exitMobileNav="slideMobileNav()"
      @toggleDarkMode="darkMode = !darkMode"
    />

    <!-- <footer>
      <span>built with nuxt © razelle 2019</span>&#x1F497
    </footer>-->
    <nuxt />
  </div>
</template>

<script>
import Nav from "./Nav.vue";
import MobileNav from "./MobileNav.vue";

export default {
  components: { Nav, MobileNav },
  data() {
    return {
      darkMode: false
    };
  },
  methods: {
    slideMenu() {
      if (window.innerWidth >= 664) {
        this.slideNav();
      } else {
        this.slideMobileNav();
      }
    },
    slideNav() {
      let nav = this.$refs.navbar.$el;
      let margin = nav.style.marginLeft;

      if (margin !== `-300px`) {
        debugger;
        nav.style.marginLeft = `-300px`;
      } else nav.style.marginLeft = "0px";
    },
    slideMobileNav() {
      let mobilenav = this.$refs.mobilenav.$el.firstChild;
      let opacity = mobilenav.style.opacity;
      if (opacity !== "1") {
        mobilenav.style.visibility = "visible";
        mobilenav.style.opacity = "1";
      } else {
        mobilenav.style.opacity = "0";
        mobilenav.style.visibility = "hidden";
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "~/assets/css/variables.scss";

.app-container {
  display: flex;
  width: 100%;

  &.sm {
    flex-direction: column;
  }
}

.app-light {
  background: rgba(232, 232, 250, 0.61);
}

.app-dark {
  background-color: $dark;
}

#sparkles {
  position: absolute;
  z-index: 100;
  top: 0;
  left: 0;
  padding: 1rem;
  display: flex;
  align-items: center;

  span {
    margin-left: 1rem;
    color: $navtext;
    font-family: $mono;
    font-size: 16px;
    &.md,
    &.sm {
      display: none;
    }
  }

  img {
    width: 20px;
    height: 20px;
  }
}

footer {
  position: absolute;
  bottom: 0px;
  right: 0;
  padding: 1rem;
  color: $navtext;
  font-family: $mono;
  font-size: 12px;
  span {
    margin-right: 1rem;
  }
}
</style>
