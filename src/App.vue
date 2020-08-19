<template>
  <div id="app" class="app">
    <img src="@/assets/img/LogoIntro.png" alt="logo" class="logo">
    <hamburger-menu :clicked="clicked"></hamburger-menu>
    <menu-navigation :menuOpen="menuOpen"></menu-navigation>

    <transition name="menu">
      <router-view v-if="!menuOpen"></router-view>
    </transition>
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

::-webkit-scrollbar {
  display: none;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  background: $main-color;
  font-family: 'Roboto', sans-serif;
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

@mixin row($width, $height) {
  width: $width;
  height: $height;
  display: flex;
  align-items: center;
  justify-content: center;
}

.row-title {
  @include row(100%, 15vh);
}

.row-content {
  @include row(100%, 85vh);
}

.btn-block {
  display: block;
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

.flex-column {
  flex-direction: column;
}

a {
  text-decoration: none;
}

.menu-enter-active,
.menu-leave-active {
  transition: .4s ease-out;
}

.menu-enter,
.menu-leave-to {
  opacity: 0;
}
</style>
