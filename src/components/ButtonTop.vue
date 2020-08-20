<template>
  <transition enter-active-class="animate__animated animate__fadeInUp" leave-active-class="animate__animated animate__fadeOutDown">
  <button class="button-top" v-scroll-to="{ el: '#app'}" v-if="scrolled">
    <i class="fas fa-chevron-up"></i>
    <i class="fas fa-chevron-up"></i>
  </button>
  </transition>
</template>

<script>
export default {
  name: 'button-top',
  props: {
    scrolled: {
      type: Boolean,
      required: true,
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
.button-top {
  position: fixed;
  right: 50px;
  bottom: 75px;
  width: 50px;
  height: 50px;
  z-index: 2;
  outline: none;
  border: none;
  border-radius: 4px;
  background: rgba(250, 250, 250, 0.75);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.32);
  transition: .4s ease-out;
  cursor: pointer;
  &:hover {
    background: rgba(250, 250, 250, 1);
  }
  i {
    color: $main-dark;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    &:nth-child(1) { margin-top: -3px }
    &:nth-child(2) { margin-top: 3px; }
  }
}
@media only screen and (max-width: 400px) {
  .button-top {
    bottom: 25px;
    right: 25px;
  }
}
// Tablet Styles
@media only screen and (min-width: 401px) and (max-width: 768px) {
  .button-top {
    bottom: 40px;
    right: 40px;
  }
}
// Laptop Styles
@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .button-top {
    bottom: 60px;
    right: 50px;
  }
}
</style>