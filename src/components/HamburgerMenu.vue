<template>
  <button class="hamburger animate__animated animate__fadeInDown" :class="{ clicked: clicked }" @click="toggleMenu" ref="hamburger">
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
@import '@/assets/scss/main.scss';
.hamburger {  
  background: transparent;
  outline: 0;
  width: 50px;
  height: 50px;
  position: absolute;
  top: 75px; /* Logo Height = 100px / 2 = 50px / 2 = 25px + 50px Hamburger Height */
  right: 50px;
  z-index: 10;
  border: 1px solid $main-light;
  border-radius: 50%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: .4s ease-out;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 150%;
    height: 150%;
    background: radial-gradient(rgba(0, 0, 0, 0.15), rgba(0, 0, 0, 0));
  }
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
    border: 1px solid darken($color: $main-light, $amount: 15%);
    border-radius: 50%;
  }  
  &-line {    
    width: 25px;
    height: 1px;
    border-radius: 3px;
    background-color: $main-light;
    transition: .4s ease-out;
    &:nth-child(2) {
      transition: 0 !important;
      margin: 4px 0;
    }
  }
}
// Mobile Styles
@media only screen and (max-width: 400px) {
  .hamburger {
    top: 25px;
    right: 25px;
  }
}
// Tablet Styles
@media only screen and (min-width: 401px) and (max-width: 768px) {
  .hamburger {
    top: 40px;
    right: 40px;
  }
}
// Laptop Styles
@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .hamburger {
    top: 60px;
    right: 50px;
  }
}
</style>