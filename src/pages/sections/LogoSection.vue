<template>
  <section class="logo-section">
    <div class="container">
      <div class="row-title">
        <h2 class="section-title pt-3">Pengenalan Logo</h2>
      </div>
      <div class="row-content flex-container">
        <div class="filosofi">
          <div class="filosofi__logo">
            <i class="fas fa-chevron-left left-arrow" @click="prevLogo(current)"></i>
            <img src="@/assets/img/Ungu.png" class="ungu" v-show="current == 4">
            <img src="@/assets/img/Hijau.png" class="hijau" v-show="current == 3">
            <img src="@/assets/img/Biru.png" class="biru" v-show="current == 2">
            <img src="@/assets/img/Kuning.png" class="kuning" v-show="current == 1">
            <img src="@/assets/img/Orange.png" class="`orange" v-show="current == 0">
            <i class="fas fa-chevron-right right-arrow" @click="nextLogo(current)"></i>
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
          color: 'Orange: Keseimbangan',
          description: 'Terbentuk dari angka 58 yang merupakan angkatan mahasiswa baru.'
        },
        {
          title: 'Mahkota RAJA 58 (Kuning)',
          color: 'Kuning: Sosialisasi',
          description: 'Terbentuk dari angka 58 yang merupakan angkatan mahasiswa baru.'
        },
        {
          title: 'Manik Mahkota (Safir)',
          color: 'Biru Safir: Ketenangan dan Kesetiaan',
          description: 'Melambangkan ketiga poin Tridharma Perguruan Tinggi. Selain itu, safir biru merupakan salah satu batu mulia yang langka dan berharga.'
        },
        {
          title: 'Wajah (Hijau)',
          color: 'Orange: Cerdas dan Inovatif',
          description: 'Terinspirasi dari Panji Asmorobangun, tokoh utama dalam Tari Topeng Malangan, melambangkan pribadi yang tangguh, cerdas, dan panutan.'
        },
        {
          title: 'Kerah Raja (Ungu)',
          color: 'Ungu: Kemanusiaan',
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
@import '@/assets/scss/_variables.scss';
.logo-section {
  margin-top: 50vh;
  height: 100vh;
  background: $main-color;

  .filosofi {
    width: 100%; 
    height: 100%;
    text-align: center;

    &__logo {
      width: 500px;
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
        user-select: none;
        cursor: pointer;
        &:hover { opacity: 1; }
        &.left-arrow { left: 0; transform: translate(0, -50%) }
        &.right-arrow { left: 100%; transform: translate(-100%, -50%) }
      }

      img {
        height: 100%;
        margin-left: 120px;
      }
    }

    &__content {
      width: 500px;
      height: 40%;
      margin: 0 auto;
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

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
        padding: 0 20px;
        color: darken($main-light, 10%);
      }
    }
  }
}
</style>