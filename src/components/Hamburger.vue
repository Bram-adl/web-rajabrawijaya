<template>
  <button class="hamburger" :class="{ clicked: clicked }" @click="showMenu">
    <div class="hamburger-line"></div>
    <div class="hamburger-line"></div>
    <div class="hamburger-line"></div>
  </button>
</template>

<script>
export default {
  name: 'hamburger',
  props: {
    clicked: {
      type: Boolean,
      required: true,
    }
  },
  methods: {
    showMenu() {
      this.$eventBus.$emit('showMenu')
    }
  }
};
</script>

<style lang="scss">
.hamburger {
  $border-color: #f8f8f8;
  
  background: transparent;
  outline: 0;
  
  position: fixed;
  top: 10%;
  right: 5%;
  transform: translate(0%, -50%);
  z-index: 10;
  
  width: 52px;
  height: 52px;

  border: 1px solid $border-color;
  border-radius: 50%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  &.clicked {
    .hamburger-line:nth-child(1) {
      transform-origin: 0 0;
      transform: rotate(45deg) translateY(-4px);
    }
    .hamburger-line:nth-child(2) {
      opacity: 0;
    }
    .hamburger-line:nth-child(3) {
      transform-origin: 0 0;
      transform: rotate(-45deg) translateY(4px);
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
    border: 1px solid darken($color: $border-color, $amount: 50%);
    border-radius: 50%;
  }
  
  &-line {    
    width: 24px;
    height: 1px;
    border-radius: 3px;
    background-color: $border-color;

    transition: .4s ease-out;

    &:nth-child(2) {
      transition: 0 !important;
      margin: 4px 0;
    }
  }
}
</style>