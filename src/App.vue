<template>
  <div id="app" class="app">
    <img src="@/assets/img/LogoIntro.png" alt="logo" class="logo">
    <hamburger-menu :clicked="clicked"></hamburger-menu>
    <menu-navigation :menuOpen="menuOpen"></menu-navigation>

    <router-view></router-view>
  </div>
</template>

<script>
import HamburgerMenu from './components/HamburgerMenu'
import MenuNavigation from './components/MenuNavigation'

export default {
  name: 'App',
  components: {
    HamburgerMenu,
    MenuNavigation,
  },
  data: () => {
    return {
      menuOpen: false,
      clicked: false,
    }
  },
  created() {
    this.Fire.$on('toggleMenu', () => this.toggleMenu())
    this.Fire.$on('closeMenu', () => this.closeMenu())
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
      this.clicked = !this.clicked
    },
    closeMenu() {
      this.menuOpen = false
      this.clicked = false
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

@font-face {
  font-family: 'Kendal-Type';
  src: url('./assets/font/kendal-type/Kendal-Type.ttf.woff');
}

ul { list-style-type: none; }
a { text-decoration: none; }
i { color: inherit; }
h1, h2, h3, h4 {
  font-family: 'Kendal-Type', sans-serif;
}
img { max-width: 100%; }

html, body {
  // overflow: hidden;
}

.app {
  width: 100%;
  font-family: 'Roboto', sans-serif;
  background: $main-color;
}

.logo {
  position: absolute;
  z-index: 9;
  left: 50px;
  top: 30px;
  width: 75px;
  height: auto;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 100px;
}

.section-title {
  text-align: center;
  font-size: 48px;
  font-weight: 500;
  padding: 50px 0;
}

.title-light {
  color: $main-light;
}
</style>
