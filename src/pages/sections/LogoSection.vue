<template>
  <section class="logo-section">
    <div class="container grid-container">
      <h2 class="section-title title-light">Pengenalan Logo</h2>
      <div class="logo-box">
        <div class="logo-wrapper">
          <i class="fas fa-chevron-left arrow arrow-left" @click="prevLogo(current)"></i>
          <img src="@/assets/img/Ungu.png" alt="Logo Ungu" class="logo-ungu logo-min" v-show="current == 4">
          <img src="@/assets/img/Hijau.png" alt="Logo Hijau" class="logo-hijau logo-min" v-show="current == 3">
          <img src="@/assets/img/Biru.png" alt="Logo Biru" class="logo-biru logo-min" v-show="current == 2">
          <img src="@/assets/img/Kuning.png" alt="Logo Kuning" class="logo-kuning logo-min" v-show="current == 1">
          <img src="@/assets/img/Orange.png" alt="Logo Orange" class="logo-orange logo-min" v-show="current == 0">
          <i class="fas fa-chevron-right arrow arrow-right" @click="nextLogo(current)"></i>
        </div>
      </div>
      <div class="content-box">
        <div class="content-wrapper">
          <h3 class="title">{{ title }}</h3>
          <p class="color">{{ color }}</p>
          <p class="description">{{ description }}</p>
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
  height: 100vh;
  background: linear-gradient(to bottom, $main-color, darken($main-color, 15%), $main-dark);

  .grid-container {
    height: 100vh;    

    .logo-box {

      .logo-wrapper {
        position: relative;
        width: 500px;
        height: 300px;
        margin: 0 auto;


        .logo-min {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          margin-left: 80px;

          height: 100%;
          height: 300px;
        }

        .arrow {
          font-size: 48px;
          color: $main-light;
          opacity: .75;
          position: absolute;
          top: 50%;
          transform: translate(0, -50%);
          transition: .4s ease-out;
          user-select: none;
          cursor: pointer;

          &:hover {
            opacity: .9;
          }

          &-left {
            left: 0;
          }

          &-right {
            right: 0;
            transform: translate(0, -50%);
          }
        }
      }
    }

    .content-box {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 25px;

      .content-wrapper {
        width: 500px;
        text-align: center;
        $color-darken: darken($main-light, 25%);
        color: $main-light;

        .title {
          font-size: 32px;
        }

        .color {
          color: $color-darken;
          font-style: italic;
          margin: 12px 0;
        }

        .description {
          color: $color-darken;
        }
      }
    }
  }
}
</style>