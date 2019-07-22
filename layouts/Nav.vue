<template>
  <nav :class="[$mq, {'nav-dark' : darkMode, 'nav-light' : !darkMode}]" ref="navbar">
    <div class="nav-content">
      <!--Profile Photo-->
      <router-link to="/">
        <img
          class="profile-pic"
          @mouseover="$router.push('/about')"
          @mouseout="$router.push('/')"
          src="../images/razelle.jpg"
        />
      </router-link>

      <!--Nav Links -->
      <div class="nav-links">
        <a id="github" href="https://www.github.com/jasminetealady" target="_blank">
          <font-awesome-icon :icon="['fab', 'github']" />
        </a>
        <a id="linkedin" href="https://www.linkedin.com/in/razelle" target="_blank">
          <font-awesome-icon :icon="['fab', 'linkedin']" />
        </a>
        <router-link id="about" to="/about">
          <font-awesome-icon :icon="'user-astronaut'" />
        </router-link>
        <a id="darkmode" @click="$emit('toggleDarkMode')">
          <font-awesome-icon v-if="!darkMode" icon="moon" />
          <font-awesome-icon v-if="darkMode" icon="cloud-sun" />
        </a>
        <a id="email" href="mailto:razelle@satyaorthopedic.com">
          <font-awesome-icon icon="envelope" />
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["darkMode"]
};
</script>

<style lang="scss" scoped>
@import "~/assets/css/variables.scss";
nav {
  transition: margin-left 1s ease-in-out;
  margin-left: 0px;
  width: 300px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;

  a:hover {
    color: $bubblegum;
    svg {
      color: $bubblegum;
    }
  }

  #github:hover::after {
    content: "github";
    font-size: 14px;
    position: absolute;
    left: 80px;
  }

  #linkedin:hover::after {
    content: "linkedin";
    font-size: 14px;
    position: absolute;
    left: 80px;
  }

  #about:hover::after {
    content: "about";
    font-size: 14px;
    position: absolute;
    left: 80px;
  }

  #darkmode:hover::after {
    content: "dark mode";
    font-size: 14px;
    position: absolute;
    left: 80px;
  }

  #email:hover::after {
    content: "email me";
    font-size: 14px;
    position: absolute;
    left: 80px;
  }

  &.lg,
  &.md {
    width: 300px;
  }

  &.sm {
    display: none;
  }
}

.nav-content {
  position: absolute;
  top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav-dark {
  background-color: $navdark;

  a {
    color: $navtext;
  }

  svg {
    color: $navtext;
  }
}

.nav-light {
  background-color: $lavenderlight;
  box-shadow: -1px 7px 20px 0px #dedcef;
  a {
    color: $navtext;
  }

  svg {
    color: $navtext;
  }
}

a {
  font-family: Share Tech Mono;
  display: flex;
  align-items: center;
  font-size: 20px;
  text-decoration: none;
}

svg {
  margin: 1rem 0.5rem;
  font-size: 26px;
}

.profile-pic {
  border-radius: 50%;
  width: 100px;
  margin-bottom: 2rem;
  box-shadow: 0px 0px 9px 1px $navtext;
}
</style>