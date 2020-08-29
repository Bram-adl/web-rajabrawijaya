<template>
  <section class="logo-section">
    <div class="container">
      <h2 class="section-title" data-aos="fade-left">Pengenalan Logo</h2>
      <div class="filosofi">
        <div class="filosofi__logo" data-aos="fade-left" data-aos-delay="100">
          <i class="fas fa-chevron-left left-arrow" style="z-index:999" @click="prevLogo(current)"></i>
          <img src="@/assets/img/logo/Ungu.png" class="ungu" v-show="current == 4">
          <img src="@/assets/img/logo/Hijau.png" class="hijau" v-show="current == 3">
          <img src="@/assets/img/logo/Biru.png" class="biru" v-show="current == 2">
          <img src="@/assets/img/logo/Kuning.png" class="kuning" v-show="current == 1">
          <img src="@/assets/img/logo/Orange.png" class="`orange" v-show="current == 0">
          <i class="fas fa-chevron-right right-arrow" style="z-index:999" @click="nextLogo(current)"></i>
        </div>
        <div class="filosofi__content">
          <h3 class="filosofi__content-title" 
            data-aos="fade-right"
            data-aos-delay="100">{{ title }}</h3>
          <p class="filosofi__content-color" 
            data-aos="fade-right"
            data-aos-delay="150">Filosofi: <br> {{ color }}</p>
          <p class="filosofi__content-description" 
            data-aos="fade-right"
            data-aos-delay="125">Penjelasan: <br> {{ description }}</p>
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
  height: 100vh;
  background: $main-color;
  padding: 50px 0;
  .filosofi {
    margin: 50px 0 0;
    display: flex;
    align-items: center;
    &__logo {
      flex: 1;
      position: relative;
      i {
        width: 50px;
        height: 50px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2.4em;
        position: absolute;
        top: 50%;
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
        max-width: 100%;
        margin-left: 120px; /* Set To Default Image Width */
      }
    }
    &__content {
      flex: 1;
      padding-left: 50px;
      position: relative;
      z-index: 1;
      &-title {
        font-family: 'Kendal-Type', sans-serif;
        font-size: 2rem;
        font-weight: 500;
        color: $main-light;
      }
      &-color {
        margin: 16px 0;
        font-style: italic;
        color: darken($main-light, 10%);
      }
      &-description {
        max-width: 90%;
        color: darken($main-light, 10%);
      }
    }
  }
}
// Mobile Style
@media only screen and (max-width: 400px) {
  .logo-section {
    padding: 50px 0;
    .filosofi {
      max-width: 90%;
      margin: 50px auto 0;
      flex-direction: column;
      &__logo {
        flex: 1;
        position: relative;
        margin-bottom: 25px;
        img {
          max-width: 100%;
          margin-left: 65px; /* Set To Default Image Width */
        }
      }
      &__content {
        padding-left: 0;
        text-align: center;
        &-title {
          font-family: 'Kendal-Type', sans-serif;
          font-size: 1.6rem;
        }
        &-description {
          max-width: 100%;
        }
      }
    }
  }
}
// Tablet Style
@media only screen and (min-width: 401px) and (max-width: 768px) {
  .logo-section {
    padding: 50px 0;
    .filosofi {
      flex-direction: column;
      &__logo {
        flex: 1;
        position: relative;
        margin-bottom: 25px;
        img {
          max-width: 100%;
          margin-left: 80px; /* Set To Default Image Width */
        }
      }
      &__content {
        padding-left: 0;
        text-align: center;
        &-title {
          font-family: 'Kendal-Type', sans-serif;
          font-size: 1.6rem;
        }
        &-description {
          max-width: 100%;
        }
      }
    }
  }
}
</style>