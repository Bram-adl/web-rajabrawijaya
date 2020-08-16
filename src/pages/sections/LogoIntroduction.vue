<template>
  <section id="logoIntroduction" class="section">
    <div class="section-background"></div>

    <transition name="textShow">
      <div class="section-title" v-if="show">
        <h2>Pengenalan Logo</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit, magnam.</p>
      </div>
    </transition>

    <div class="section-content" ref="observe">
      <transition name="show">
        <img src="../../assets/img/LogoIntro.png" class="section-content-main" v-if="show" />
      </transition>
    </div>
  </section>
</template>

<script>
export default {
  name: "logo-introduction",
  data: () => {
    return {
      show: false,
    };
  },
  mounted() {
    this.checkScrollLogo();
  },
  methods: {
    checkScrollLogo() {
      const options = {
        rootMargin: "-10px",
        threshold: 0,
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.show = true;
          } else {
            this.show = false;
          }
        });
      }, options);

      observer.observe(this.$refs.observe);
    },
  },
};
</script>

<style lang="scss" scoped>
@mixin setDimension($width, $height) {
  width: $width;
  height: $height;
}

@mixin displayFlex($direction, $align, $justify) {
  display: flex;
  flex-direction: $direction;
  align-items: $align;
  justify-content: $justify;
}

@mixin sectionFormat() {
  @include setDimension(100%, 100vh);
  @include displayFlex(column, center, space-between);
}

@mixin setRelative() {
  position: relative;
  z-index: 5;
}

.section {
  @include sectionFormat();

  // Proper Layouting
  position: relative;
  overflow: hidden;

  &-background {
    @include setDimension(100%, 100vh);
    background: #f8f8f8;

    // Create Trapezium Shape
    border-top: 1000px solid var(--main);
    border-left: 400px solid transparent;
    border-right: 400px solid transparent;

    // Move Trapezium to The Top
    position: absolute;
    left: 0;
    top: 0;
    z-index: 4;
  }

  &-title {
    @include displayFlex(column, center, flex-end);
    @include setDimension(100%, 25%);

    @include setRelative();
  }

  &-content {
    @include setDimension(100%, 75%);
    @include setRelative();

    &-main {
      @include setDimension(auto, 75%);

      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}

.show-enter-active,
.show-leave-active {
  transition: 2s ease-out;
}

.show-enter,
.show-leave-to {
  opacity: 0;
  transform: translate(-50%, -30%);
}
</style>