<template>
  <div id="app" class="app">
    <img src="@/assets/img/logo/LogoIntro.png" alt="logo" class="logo">
    <hamburger-menu :clicked="clicked"></hamburger-menu>
    <menu-navigation :menuOpen="menuOpen"></menu-navigation>

    <transition name="menu">
      <router-view v-if="!menuOpen"></router-view>
    </transition>

    <button-top :scrolled="scrolled"></button-top>
  </div>
</template>

<script>
import HamburgerMenu from './components/HamburgerMenu'
import MenuNavigation from './components/MenuNavigation'
import ButtonTop from './components/ButtonTop'

export default {
  name: 'App',
  components: {
    HamburgerMenu,
    MenuNavigation,
    ButtonTop,
  },
  data: () => {
    return {
      menuOpen: false,
      clicked: false,
      scrolled: false,
    }
  },
  created() {
    this.Fire.$on('toggleMenu', () => this.toggleMenu())
    this.Fire.$on('closeMenu', () => this.closeMenu())
    this.scrollButton()
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen
      this.clicked = !this.clicked
    },
    closeMenu() {
      this.menuOpen = false
      this.clicked = false
    },
    scrollButton() {
      window.addEventListener('scroll', () => {
        if ( window.scrollY > window.innerHeight - window.innerHeight / 4 ) {
          this.scrolled = true
        } else {
          this.scrolled = false
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
@font-face {
  font-family: 'Kendal-Type';
  src: url('./assets/font/kendal-type/Kendal-Type.ttf.woff');
}
::-webkit-scrollbar {
  display: none; /* Removing Default Scroll Bar For Convenient */
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
a {
  text-decoration: none;
}
.app {
  background: $main-color;
  font-family: 'Roboto', sans-serif; /* Default Font */
  overflow: hidden;
}
.logo {
  position: absolute;
  z-index: 9;
  top: 50px;
  left: 50px;
  width: 100px;
  height: 100px;
  object-fit: contain; /* Preserve Image Dimension */
}
// Responsives
@media only screen and (max-width: 400px) {
  .logo {
    top: 25px;
    left: 25px;
    width: 55px;
    height: 55px;
  }
}
@media only screen and (min-width: 401px) and (max-width: 768px) {
  .logo {
    top: 40px;
    left: 40px;
    width: 60px;
    height: 60px;
  }
}
@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .logo {
    width: 75px;
    height: 75px;
  }
}
@media only screen and (min-width: 1025px) and (max-width: 1200px) {
  .logo {
    width: 85px;
    height: 85px;
  }
}
// Vue JS Animations
.menu-enter-active,
.menu-leave-active {
  transition: .4s ease-out;
}
.menu-enter,
.menu-leave-to {
  opacity: 0;
}
</style>
