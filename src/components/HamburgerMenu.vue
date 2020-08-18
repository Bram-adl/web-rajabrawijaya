<template>
  <button class="hamburger" :class="{ clicked: clicked }" @click="toggleMenu" ref="hamburger">
    <div class="hamburger-line"></div>
    <div class="hamburger-line"></div>
    <div class="hamburger-line"></div>
  </button>
</template>

<script>
export default {
  name: 'hamburger-menu',
  props: {
    clicked: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    toggleMenu() {
      this.Fire.$emit('toggleMenu')
    },
    changeHamburgerColor() {
      this.$refs.hamburger.classList.add('scrolled')
    },
    resetHamburgerColor() {
      this.$refs.hamburger.classList.remove('scrolled')
    }
  },
  created() {
    this.Fire.$on('changeHamburgerColor', () => this.changeHamburgerColor())
    this.Fire.$on('resetHamburgerColor', () => this.resetHamburgerColor())
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.hamburger {  
  background: transparent;
  outline: 0;
  
  position: fixed;
  top: 50px;
  right: 50px;
  z-index: 10;
  
  width: 75px;
  height: 75px;

  border: 1px solid $main-light;
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: .4s ease-out;

  cursor: pointer;

  &.clicked {
    .hamburger-line:nth-child(1) {
      transform: rotate(45deg) translateY(-4px);
    }
    .hamburger-line:nth-child(2) {
      opacity: 0;
    }
    .hamburger-line:nth-child(3) {
      transform: rotate(-45deg) translateY(4px);
    }
  }
  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: borderDrippled 1s ease-out infinite alternate;
    
    background-color: transparent;
    border: 1px solid darken($main-light, 25%);
    border-radius: 50%;
  }
  
  &-line {    
    width: 24px;
    height: 1px;
    border-radius: 3px;
    background-color: $main-light;
    transform-origin: 0 0;
    transition: .4s ease-out;
    &:nth-child(2) {
      transition: 0 !important;
      margin: 4px 0;
    }
  }
}

.hamburger.scrolled {
  border: 1px solid $main-dark;

  .hamburger-line {
    background: $main-dark;
  }
}

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