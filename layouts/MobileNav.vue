<template>
  <mq-layout mq="sm">
    <nav
      ref="mobilenav"
      class="mobile-nav"
      :class="{'mobile-nav-light' : !mobileNavDark, 'mobile-nav-dark' : mobileNavDark}"
    >
      <a id="github" href="https://www.github.com/jasminetealady" target="_blank">
        <font-awesome-icon :icon="['fab', 'github']" />
      </a>
      <a id="linkedin" href="https://www.linkedin.com/in/razelle" target="_blank">
        <font-awesome-icon :icon="['fab', 'linkedin']" />
      </a>

      <font-awesome-icon
        id="about"
        @click="$router.push('/about'), $emit('exitMobileNav')"
        :icon="'user-astronaut'"
      />

      <a id="darkmode" @click="$emit('toggleDarkMode'), mobileNavDark = !mobileNavDark">
        <font-awesome-icon v-if="!darkMode" icon="moon" />
        <font-awesome-icon v-if="darkMode" icon="cloud-sun" />
      </a>
      <a id="email" href="mailto:razelle@satyaorthopedic.com">
        <font-awesome-icon icon="envelope" />
      </a>
    </nav>
  </mq-layout>
</template>

<script>
export default {
  props: ["darkMode"],
  data() {
    return {
      mobileNavDark: false
    };
  }
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/variables.scss";

.mobile-nav-light {
  background-color: $lavenderlight;
}

.mobile-nav-dark {
  background-color: $dark;
}

.mobile-nav {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  height: 100vh;
  position: absolute;
  transition: opacity 0.7s ease-in-out;
  opacity: 0;
  font-family: $mono;
  visibility: hidden;

  svg {
    margin: 1rem 0.5rem;
    font-size: 26px;
    color: $navtext;
  }

  svg:hover {
    color: $bubblegum;
  }

  a {
    color: $navtext;
    display: flex;
    align-items: center;
    text-decoration: none;
  }

  a:hover {
    color: $bubblegum;
    svg {
      color: $bubblegum;
    }
  }
}

#github:hover::after {
  content: "github";
  font-size: 14px;
  position: relative;
}

#linkedin:hover::after {
  content: "linkedin";
  font-size: 14px;
  position: relative;
}

#about:hover::after {
  content: "about";
  font-size: 14px;
  position: relative;
}

#darkmode:hover::after {
  content: "dark mode";
  font-size: 14px;
  position: relative;
}

#email:hover::after {
  content: "email me";
  font-size: 14px;
  position: relative;
}
</style>