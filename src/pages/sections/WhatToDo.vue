<template>
  <section id="whatToDo" class="section">
    <transition name="textShow">
      <div class="section-title" v-if="show">
        <h2>What You Have To Do</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem, suscipit?</p>
      </div>
    </transition>

    <div class="section-content" ref="observe">
      <div class="section-content-wrapper">
        <div class="section-content-indicator">
          <i class="fas fa-chevron-left"></i>
        </div>
        <transition name="show-alt">
          <div class="section-content-card twibbon" v-if="show">
            <div class="section-content-card-title">
              <h3>Twibbon</h3>
            </div>
            <div class="section-content-card-description">
              <p>Jangan lupa posting twibbon RAJA Brawijaya dengan foto favorit kamu!</p>
            </div>
          </div>
        </transition>
        <transition name="show-alt">
          <div class="section-content-card penugasan" v-if="show">
            <div class="section-content-card-title">
              <h3>Penugasan</h3>
            </div>
            <div class="section-content-card-description">
              <p>Segala macam keperluan Ospek Online kamu ada di sini. Yuk langsung cek Penugasan kamu di RAJA Apps!</p>
            </div>
          </div>
        </transition>
        <transition name="show-alt">
          <div class="section-content-card buku-panduan" v-if="show">
            <div class="section-content-card-title">
              <h3>Buku Panduan</h3>
            </div>
            <div class="section-content-card-description">
              <p>Segala macam keperluan Ospek Online kamu ada di sini. Yuk langsung cek Penugasan kamu di RAJA Apps!</p>
            </div>
          </div>
        </transition>
        <div class="section-content-indicator">
          <i class="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "what-to-do",
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
  @include setDimension(100%, 100vh);
  background-color: var(--main);

  &-title {
    @include displayFlex(column, center, flex-end);
    @include setDimension(100%, 25%);
  }

  &-content {
    @include setDimension(100%, 75%);
    @include setRelative();

    &-wrapper {
      @include setDimension(80%, 100%);
      @include displayFlex(row, center, center);
      margin: auto;
    }

    &-card {
      @mixin formatText($size, $weight) {
        font-size: $size;
        font-family: "Poppins", sans-serif;
        font-weight: $weight;
        text-align: center;
      }

      @include setDimension(100%, 300px);
      margin: 0 25px;
      padding: 60px 25px;

      border-radius: 2px;
      position: relative;

      &:nth-child(3) {
        margin: 0;
      }

      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 30px;
        background: rgba(255, 255, 255, 0.25);
      }

      &-title {
        @include formatText(24px, 500);
        color: #f8f8f8;
        text-decoration: underline;
      }

      &-description {
        @include formatText(14px, 400);
        color: darken($color: #f8f8f8, $amount: 10%);
        margin-top: 25px;
      }
    }

    &-indicator {
      @include setDimension(50px, 50px);
      @include displayFlex(row, center, center);
      flex-shrink: 0;

      i {
        display: inline-block;
        font-size: 3em;

        background: linear-gradient(
          to top right,
          rgb(36, 226, 226),
          rgb(19, 95, 95)
        );
        background-clip: text;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;

        transition: 0.4s ease-out;
        cursor: pointer;
      }

      &:first-child:hover {
        i {
          transform: translateX(-4px);
        }
      }

      &:last-child:hover {
        i {
          transform: translateX(4px);
        }
      }
    }
  }
}

.twibbon {
  background-color: blue;
}

.penugasan {
  background-color: green;
}

.buku-panduan {
  background-color: rgb(202, 105, 121);
}

.show-alt-enter-active,
.show-alt-leave-active {
  transition: 2s ease-out;
}

.show-alt-enter,
.show-alt-leave-to {
  opacity: 0;
  transform: translate(0, 25%);
}
</style>