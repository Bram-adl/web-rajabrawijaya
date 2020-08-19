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
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.hamburger {  
  background: transparent;
  outline: 0;
  
  position: absolute;
  top: 50px;
  right: 50px;
  z-index: 10;
  
  width: 75px;
  height: 75px;

  border: 2px solid $main-light;
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: .4s ease-out;

  cursor: pointer;

  &.clicked {
    .hamburger-line:nth-child(1) {
      transform: rotate(45deg) translate(2px, -6px);
    }
    .hamburger-line:nth-child(2) {
      opacity: 0;
    }
    .hamburger-line:nth-child(3) {
      transform: rotate(-45deg) translate(-1px, 5px);
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
    border: 2px solid rgba(255, 255, 255, 0.5);
    border-radius: 50%;
  }
  
  &-line {    
    width: 30px;
    height: 3px;
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