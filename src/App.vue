<template>
  <div id="app">
    <MenuList :showMenu="clicked" />

    <header class="header">
      <img src="./assets/img/Logo.png" alt="logo" class="logo">
      <hamburger :clicked="clicked"></hamburger>
    </header>
    
    <router-view></router-view>
  </div>
</template>

<script>
import Hamburger from './components/Hamburger'
import MenuList from "./components/MenuList";

export default {
  name: "App",
  components: {
    Hamburger,
    MenuList,
  },
  created() {
    this.$eventBus.$on('showMenu', () => this.showMenu())
    this.$eventBus.$on('closeMenu', () => this.closeMenu())
  },
  data: () => {
    return {
      clicked: false,
    };
  },
  methods: {
    showMenu() {
      this.clicked = !this.clicked
    },
    closeMenu() {
      this.clicked = false
    }
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* ::-webkit-scrollbar {
  width: 16px;
}

::-webkit-scrollbar-track {
  display: none;
}

::-webkit-scrollbar-thumb {
  background: linear-gradient(to top right, #34495E, #41B883);
  border-radius: 100px;
} */

/* Font Face */
@font-face {
  font-family: "Kendal-Type";
  src: url("assets/Kendal-Type/Kendal-Type.ttf.woff") format("woff");
}

/* Google Font */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap');

#app {
  font-family: "Kendal-Type", sans-serif;
  font-size: 16px;

  background-color: #111111;

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
</style>
