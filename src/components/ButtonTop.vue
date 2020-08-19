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
@import '@/assets/scss/_variables.scss';

.button-top {
  position: fixed;
  left: 25px;
  bottom: 25px;
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
</style>