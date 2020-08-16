<template>
  <section id="aboutSection" class="section">
    <div class="section-title">
      <h2>Sekilas Tentang RAJA Brawijaya</h2>
    </div>

    <figure class="section-content" ref="observe">
        <div class="section-content-wrapper">
          <img src="../../assets/img/gedung-1.svg" class="section-content-wrapper-img" />
          <div class="section-content-wrapper-main">
            <p>RAJA Brawijaya atau Rangkaian Acara Jelajah Almamater Universitas Brawijaya adalah serangkaian kegiatan yang bertujuan memfasilitasi mahasiswa baru Universitas Brawijaya untuk mengetahui hal-hal yang terkait dengan kehidupan kampus dimana RAJA Brawijaya terdiri dari tiga rangkaian yaitu PKKMU, PBPK, dan OH.</p>
          </div>
          <img src="../../assets/img/gedung-2.svg" class="section-content-wrapper-img" />
        </div>
    </figure>
  </section>
</template>

<script>
export default {
  name: "about",
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
  background-color: var(--main);

  &-title {
    @include displayFlex(column, center, flex-end);
    @include setDimension(100%, 25%);
  }

  &-content {
    // Set Dimension
    @include setDimension(100%, 75%);

    &-wrapper {
      @include setDimension(100%, 100%);

      // Proper Layouting
      position: relative;

      &-img {
        // Set Dimension
        @include setDimension(500px, auto);

        // Set Layouting
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        z-index: 4;

        &:nth-child(1) {
          left: 0;
        }

        &:nth-child(3) {
          right: 120px;
        }
      }

      &-main {
        // Set Layouting
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: 5;

        // Set Visual
        border: 2px solid #ef5557;
        background: #fff;

        // Set Dimension
        @include setDimension(750px, 350px);
        @include displayFlex(row, center, center);

        padding: 0 20px;

        // Set Text Format
        font-family: "Poppins", sans-serif;
        font-size: 20px;
        text-align: justify;
        line-height: 1.5;
      }
    }
  }
}
</style>