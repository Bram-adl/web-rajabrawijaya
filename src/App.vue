<template>
  <div id="app" class="app">
    <div class="video__container" v-if="!done">
      <video width="500" height="500" autoplay muted class="video__intro">
        <source src="@/assets/video/introduction.mp4" type="video/mp4">
        Your Video Doesnt Support
      </video>
    </div>
    <transition name="showApp">
      <div v-show="done">
        <img src="@/assets/img/logo/LogoIntro.png" alt="logo" class="logo animate__animated animate__fadeInDown">
        <hamburger-menu :clicked="clicked"></hamburger-menu>
        <menu-navigation :menuOpen="menuOpen"></menu-navigation>

        <transition name="menu">
          <router-view v-if="!menuOpen"></router-view>
        </transition>

        <button-top :scrolled="scrolled"></button-top>
      </div>
    </transition>
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
      done: false,
    }
  },
  created() {
    this.Fire.$on('toggleMenu', () => this.toggleMenu())
    this.Fire.$on('closeMenu', () => this.closeMenu())
    this.scrollButton()
  },
  mounted() {
    this.showApp()
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
    },
    showApp() {
      setTimeout(() => {
        this.done = true
      }, 7000)
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
.video__container {
  position: fixed;
  z-index: 0;
  height: 100vh;
  background: #000;
  position: relative;
  animation: hideOut 1s ease-out forwards;
  animation-delay: 6s;
}
.video__intro {
  min-width: 100%;
  min-height: 100%;
  position: absolute;
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
