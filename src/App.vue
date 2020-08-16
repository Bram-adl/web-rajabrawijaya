<template>
  <div id="app">
    <MenuList :showMenu="clicked" />
    <hamburger :clicked="clicked"></hamburger>
    <img src="./assets/img/Logo.png" alt="logo" class="logo" />

    <router-view></router-view>
  </div>
</template>

<script>
import Hamburger from "./components/Hamburger";
import MenuList from "./components/MenuList";

export default {
  name: "App",
  components: {
    Hamburger,
    MenuList,
  },
  created() {
    this.$eventBus.$on("showMenu", () => this.showMenu());
    this.$eventBus.$on("closeMenu", () => this.closeMenu());
  },
  data: () => {
    return {
      clicked: false,
    };
  },
  methods: {
    showMenu() {
      this.clicked = !this.clicked;
    },
    closeMenu() {
      this.clicked = false;
    },
  },
};
</script>

<style lang="scss">
* {
  --main: #160716;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Google Font */
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap");

/* Font Face */
@font-face {
  font-family: "Kendal-Type";
  src: url("assets/Kendal-Type/Kendal-Type.ttf.woff") format("woff");
}

#app {
  font-family: "Kendal-Type", sans-serif;
  font-size: 16px;

  background-color: #f8f8f8;

  width: 100%;
  min-height: 100vh;
}

/* Resets */
a {
  text-decoration: none;
  color: inherit;
}

h2 {
  font-size: 48px;
  font-weight: normal;
  text-align: center;
  color: #f8f8f8;
}

.section-title p {
  color: darken($color: #f8f8f8, $amount: 20%);
  font-family: "Poppins", sans-serif;
  font-size: 14px;
  font-weight: normal;
}

// Logo Styles
.logo {
  position: absolute;
  top: 10%;
  left: 5%;
  transform: translate(0, -50%);
  z-index: 10;

  width: 100px;
}

/* Animations */
@keyframes borderDrippled {
  0% {
    width: 100%;
    height: 100%;
  }
  100% {
    width: 150%;
    height: 150%;
  }
}

// Vue JS Animation
.textShow-enter-active,
.textShow-leave-active {
  transition: 2s ease-out;
}

.textShow-enter,
.textShow-leave-to {
  opacity: 0;
  transform: translateY(64px);
}
</style>
