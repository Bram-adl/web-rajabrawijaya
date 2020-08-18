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

@font-face {
  font-family: 'Kendal-Type';
  src: url('./assets/font/kendal-type/Kendal-Type.ttf.woff');
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
  width: 100px;
  height: 100px;
  object-fit: contain;
  vertical-align: middle;
}

/* Pre Defined Class */
.container {
  max-width: 1200px;
  margin: auto;
}

.row-title {
  width: 100%;
  height: 15vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.row-content {
  width: 100%;
  height: 85vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.section-title {
  font-family: 'Kendal-Type', sans-serif;
  font-size: 48px;
  font-weight: 500;
  text-align: center;
  color: $main-light;
}

.title-dark {
  color: $main-dark;
}

.height-auto {
  height: auto;
}

.justify-between {
  justify-content: space-between;
}

.pt-3 {
  padding-top: 30px;
}

a {
  text-decoration: none;
}
</style>
