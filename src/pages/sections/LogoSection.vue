<template>
  <section class="logo-section">
    <div class="container">
      <div class="row-title">
        <h2 class="section-title pt-3">Pengenalan Logo</h2>
      </div>
      <div class="row-content flex-container">
        <div class="filosofi">
          <div class="filosofi__logo">
            <i class="fas fa-chevron-left left-arrow" style="z-index:999" @click="prevLogo(current)"></i>
            <img src="@/assets/img/logo/Ungu.webp" class="ungu" v-show="current == 0">
            <img src="@/assets/img/logo/Hijau.webp" class="hijau" v-show="current == 1">
            <img src="@/assets/img/logo/Biru.webp" class="biru" v-show="current == 2">
            <img src="@/assets/img/logo/Kuning.webp" class="kuning" v-show="current == 3">
            <img src="@/assets/img/logo/Orange.webp" class="`orange" v-show="current == 4">
            <i class="fas fa-chevron-right right-arrow" style="z-index:999" @click="nextLogo(current)"></i>
          </div>
          <div class="filosofi__content">
            <h3 class="filosofi__content-title">{{ title }}</h3>
            <p class="filosofi__content-color">{{ color }}</p>
            <p class="filosofi__content-description">{{ description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'logo-section',
  data: () => {
    return {
      title: 'Mahkota RAJA 58 (Orange)',
      color: 'Orange: Keseimbangan',
      description: 'Terbentuk dari angka 58 yang merupakan angkatan mahasiswa baru.',
      current: 0,
      max: 5,
      data: [
        {
          title: 'Mahkota RAJA 58 (Orange)',
          color: 'Keseimbangan',
          description: 'Terbentuk dari angka 58 yang merupakan angkatan mahasiswa baru.'
        },
        {
          title: 'Mahkota RAJA 58 (Kuning)',
          color: 'Sosialisasi',
          description: 'Terbentuk dari angka 58 yang merupakan angkatan mahasiswa baru.'
        },
        {
          title: 'Manik Mahkota (Biru Safir)',
          color: 'Ketenangan dan Kesetiaan',
          description: 'Melambangkan ketiga poin Tridharma Perguruan Tinggi. Selain itu, safir biru merupakan salah satu batu mulia yang langka dan berharga.'
        },
        {
          title: 'Wajah (Hijau)',
          color: 'Cerdas dan Inovatif',
          description: 'Terinspirasi dari Panji Asmorobangun, tokoh utama dalam Tari Topeng Malangan, melambangkan pribadi yang tangguh, cerdas, dan panutan.'
        },
        {
          title: 'Kerah Raja (Ungu)',
          color: 'Kemanusiaan',
          description: 'Merupakan simbol dari kekuasaan seorang Raja. Melambangkan pribadi yang tegas dan berwibawa.'
        },
      ]
    }
  },
  methods: {
    getData() {
      const { title, color, description } = this.data[this.current]
      this.title = title
      this.color = color
      this.description = description
    },
    nextLogo(index) {
      if ( index == this.max - 1 ) {
        this.current = -1
      }
      this.current = this.current + 1
      this.getData()
    },
    prevLogo(index) {
      if ( index == 0 ) {
        this.current = 5
      }
      this.current = this.current - 1
      this.getData()
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
.logo-section {
  margin-top: 75vh; /* Spacing for About Text */
  height: 100vh;
  background: $main-color;
  
  .filosofi {
    height: 100%;
    text-align: center;
    &__logo {
      width: 500px; /* Fixed Measurement */
      height: 60%;
      margin: 0 auto;
      position: relative;
      i {
        position: absolute;
        top: 50%;
        font-size: 64px;
        color: $main-light;
        opacity: .75;
        transition: .4s ease-out;
        user-select: none; /* Remove Default Selection Box */
        cursor: pointer;
        &:hover { opacity: 1; }
        &.left-arrow { left: 0; transform: translate(0, -50%) }
        &.right-arrow { left: 100%; transform: translate(-100%, -50%) }
      }
      img {
        height: 100%;
        margin-left: 120px; /* Set To Default Image Width */
      }
    }
    &__content {
      width: 500px;
      height: 40%;
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      position: relative;
      z-index: 1;
      &-title {
        font-family: 'Kendal-Type', sans-serif;
        font-size: 32px;
        font-weight: 500;
        color: $main-light;
      }
      &-color {
        margin: 12px 0;
        font-style: italic;
        color: darken($main-light, 10%);
      }
      &-description {
        color: darken($main-light, 10%);
      }
    }
  }
}
// Mobile Style
@media only screen and (max-width: 400px) {
  .logo-section {
    overflow: hidden; /* Because of margin from the logo images */
    width: 75%;
    margin: 50vh auto 0;
    .filosofi {
      &__logo {
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        i {
          font-size: 40px;
        }
        img {
          width: 100%;
          height: auto;
          margin-left: 115px;
        }
      }
      &__content {
        width: 100%;
        height: 50%;
        &-title {
          font-size: 24px;
        }
        &-description {
          padding: 0 0;
          line-height: 1.5;
        }
      }
    }
  }
}
// Tablet Style
@media only screen and (min-width: 401px) and (max-width: 768px) {
  .logo-section {
    overflow: hidden; /* Because of margin from the logo images */
    width: 75%;
    margin: 75vh auto 0;
    .filosofi {
      &__logo {
        width: 100%;
        height: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        i {
          font-size: 48px;
        }
        img {
          width: 100%;
          height: auto;
          margin-left: 170px;
        }
      }
      &__content {
        width: 100%;
        height: 50%;
        &-title {
          font-size: 28px;
        }
        &-description {
          padding: 0 0;
          line-height: 1.5;
        }
      }
    }
  }
}
// Laptop Style
@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .logo-section {
    overflow: hidden; /* Because of margin from the logo images */
    width: 75%;
    margin: 75vh auto 0;
    .filosofi {
      &__logo {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 100%;
          object-fit: contain;
          margin-left: 175px;
        }
      }
      &__content {
        width: 100%;
        &-title {
          font-size: 30px;
        }
        &-description {
          padding: 0 0;
          line-height: 1.5;
        }
      }
    }
  }
}
// Desktops Style
@media only screen and (min-width: 1025px) and (max-width: 1200px) {
  .logo-section {
    margin: 75vh auto 0;
  }
}
</style>