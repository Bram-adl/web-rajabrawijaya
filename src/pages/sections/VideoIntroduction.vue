<template>
  <section id="videoIntroduction" class="section">
    <div class="section-title">
      <h2>Mari Sambut RAJA Brawijaya 2020</h2>
    </div>
    <div class="section-content">
      <div class="section-content-wrapper">
        <iframe src="https://youtube.com/embed/SJ9GCuu-riw" class="section-content-video">

        </iframe>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'video-introduction',
}
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
  @include setDimension(100%, 100vh);
  background-color: #f8f8f8;

  &-title {
    @include displayFlex(column, center, center);
    @include setDimension(100%, 25%);

    h2 {
      color: #212121 !important;
    }
  }

  &-content {
    @include setDimension(100%, 75%);
    @include setRelative();

    &-wrapper {
      @include setDimension(80%, 100%);
      @include displayFlex(row, flex-start, center);
      margin: auto;
    }

    &-video {
      @include setDimension(800px, 400px);
      background-color: purple;
      border-radius: 32px;
    }
  }
}
</style>