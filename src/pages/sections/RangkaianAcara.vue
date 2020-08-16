<template>
  <section id="rangkaianAcara" class="section">
    <div class="section-title">
      <h2>Rangkaian Acara</h2>
    </div>

    <div class="section-content">
      <div class="section-content-wrapper">
        <!-- Individual Card -->
        <div class="section-content-card">
          <div class="section-content-card-inner">
            <div class="section-content-card-front">
              <img src="@/assets/img/card1-corner.svg" class="section-content-card-front-img section-content-card-front-img-top-left">
              <img src="@/assets/img/card1-corner.svg" class="section-content-card-front-img section-content-card-front-img-top-right">
              <img src="@/assets/img/card1-corner.svg" class="section-content-card-front-img section-content-card-front-img-bottom-left">
              <img src="@/assets/img/card1-corner.svg" class="section-content-card-front-img section-content-card-front-img-bottom-right">
              <img src="@/assets/img/card1-mid-bottom.svg" class="section-content-card-front-img-footer">

              <div class="section-content-card-front-item">
                <img src="@/assets/img/oh1.svg" class="section-content-card-front-item-img">
                <h3 class="section-content-card-front-item-text">Open House</h3>
              </div>
            </div>
            <div class="section-content-card-back">
              <div class="section-content-card-back-header">
                <img src="@/assets/img/oh2.svg" class="section-content-card-back-header-img">
                <h4 class="section-content-card-back-header-text">Open House</h4>
              </div>
              <div class="section-content-card-back-text">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis perferendis provident officia voluptatum quod repudiandae!</p>
              </div>
              <img src="@/assets/img/card2-mid-bottom.svg" class="section-content-card-back-footer">
            </div>
          </div>
        </div>
        <!-- End of Card -->

        <!-- Individual Card -->
        <div class="section-content-card">
          <div class="section-content-card-inner">
            <div class="section-content-card-front">
              <img src="@/assets/img/card1-corner.svg" class="section-content-card-front-img section-content-card-front-img-top-left">
              <img src="@/assets/img/card1-corner.svg" class="section-content-card-front-img section-content-card-front-img-top-right">
              <img src="@/assets/img/card1-corner.svg" class="section-content-card-front-img section-content-card-front-img-bottom-left">
              <img src="@/assets/img/card1-corner.svg" class="section-content-card-front-img section-content-card-front-img-bottom-right">
              <img src="@/assets/img/card1-mid-bottom.svg" class="section-content-card-front-img-footer">

              <div class="section-content-card-front-item">
                <img src="@/assets/img/rektor1.svg" class="section-content-card-front-item-img">
                <h3 class="section-content-card-front-item-text">PKKMU</h3>
              </div>
            </div>
            <div class="section-content-card-back">
              <div class="section-content-card-back-header">
                <img src="@/assets/img/rektor2.svg" class="section-content-card-back-header-img">
                <h4 class="section-content-card-back-header-text">PKKMU</h4>
              </div>
              <div class="section-content-card-back-text">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis perferendis provident officia voluptatum quod repudiandae!</p>
              </div>
              <img src="@/assets/img/card2-mid-bottom.svg" class="section-content-card-back-footer">
            </div>
          </div>
        </div>
        <!-- End of Card -->

        <!-- Individual Card -->
        <div class="section-content-card">
          <div class="section-content-card-inner">
            <div class="section-content-card-front">
              <img src="@/assets/img/card1-corner.svg" class="section-content-card-front-img section-content-card-front-img-top-left">
              <img src="@/assets/img/card1-corner.svg" class="section-content-card-front-img section-content-card-front-img-top-right">
              <img src="@/assets/img/card1-corner.svg" class="section-content-card-front-img section-content-card-front-img-bottom-left">
              <img src="@/assets/img/card1-corner.svg" class="section-content-card-front-img section-content-card-front-img-bottom-right">
              <img src="@/assets/img/card1-mid-bottom.svg" class="section-content-card-front-img-footer">

              <div class="section-content-card-front-item">
                <img src="@/assets/img/pbpk1.svg" class="section-content-card-front-item-img">
                <h3 class="section-content-card-front-item-text">PBPK</h3>
              </div>
            </div>
            <div class="section-content-card-back">
              <div class="section-content-card-back-header">
                <img src="@/assets/img/pbpk2.svg" class="section-content-card-back-header-img">
                <h4 class="section-content-card-back-header-text">PBPK</h4>
              </div>
              <div class="section-content-card-back-text">
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis perferendis provident officia voluptatum quod repudiandae!</p>
              </div>
              <img src="@/assets/img/card2-mid-bottom.svg" class="section-content-card-back-footer">
            </div>
          </div>
        </div>
        <!-- End of Card -->
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "rangkaian-acara",
  data: () => {
    return {
      flipped: false,
    };
  },
  methods: {
    flipCard() {
      this.flipped = true;
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
  @include setDimension(100%, 100vh);

  &-title {
    @include displayFlex(column, center, center);
    @include setDimension(100%, 25%);

    h2 {
      color: #212121;
    }
  }

  &-content {
    @include setDimension(100%, 75%);

    &-wrapper {
      @include setDimension(80%, 100%);
      @include displayFlex(row, center, center);
      margin: auto;

    }

    &-card {
      @include setDimension(250px, 350px);
      margin: 0 25px;
      background: transparent;
      perspective: 1000px;

      &-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;
      }

      &:hover {
        .section-content-card-inner {
          transform: rotateY(180deg) scale(1.15);
        }
      }

      &-front,
      &-back {
        @include setDimension(100%, 100%);
        position: absolute;
        left: 0;
        top: 0;
        background: #212121;
        box-shadow: 0 16px 16px rgba(0, 0, 0, 0.32);
        border-radius: 16px;
        backface-visibility: hidden;
      }

      &-front {
        position: relative;

        &-img {
          @include setDimension(15%, auto);
          position: absolute;

          &-top-left { left: 5%; top: 5%; }
          &-top-right { right: 5%; top: 5%; transform: rotate(90deg) }
          &-bottom-left { left: 5%; bottom: 5%; transform: rotate(-90deg); }
          &-bottom-right { right: 5%; bottom: 5%; transform: rotate(-180deg); }
          &-footer {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 0);
            width: 50%;
          }
        }

        &-item {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);

          &-img {
            width: 100%;
          }

          &-text {
            color: #ffcf08;
            font-size: 24px;
          }
        }
      }

      &-back {
          overflow: hidden;

        transform: rotateY(180deg);

        &-header {
          height: 100px;
          position: relative;
          padding: 12px;

          &::before {
            content: '';
            position: absolute;
            left: 50%;
            top: -50%;
            transform: translateX(-50%);
            width: 100%;
            height: 150%;
            border-radius: 1000px;
            background: #ffcf08;
            z-index: -1;
          }

          &-img,
          &-title {
            position: relative;
            z-index: 1;
          }

          &-img { width: 50px; }
          &-title { color: #212121; }
        }

        &-text {
          color: #f8f8f8;
          font-size: 14px;
          font-family: 'Roboto', sans-serif;
          line-height: 1.5;
          padding: 16px;
          height: calc(100% - 200px);
          display: flex;
          align-items: center;
        }

        &-footer {
          position: absolute;
          max-height: 100px;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 0);
        }
      }
    }
  }
}
</style>