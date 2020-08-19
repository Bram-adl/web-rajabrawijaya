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
  
  width: 52px;
  height: 52px;

  border: 1px solid $main-light;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  transition: .4s ease-out;

  cursor: pointer;

  &.clicked {
    .hamburger-line:nth-child(1) {
      transform: translateY(5px) rotate(-45deg);
    }
    .hamburger-line:nth-child(2) {
      opacity: 0;
    }
    .hamburger-line:nth-child(3) {
      transform: translateY(-5px) rotate(45deg);
    }
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: borderDrippled 1s ease-out infinite;
    
    background-color: transparent;
    border: 1px solid darken($color: $main-light, $amount: 50%);
    border-radius: 50%;
  }
  
  &-line {    
    width: 24px;
    height: 1px;
    border-radius: 3px;
    background-color: $main-light;
    // transform-origin: 0 0;
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