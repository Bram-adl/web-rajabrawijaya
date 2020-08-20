<template>
  <div class="event-section">
    <img v-rellax="{ speed: 3 }" src="@/assets/img/visual identity.png" class="img__decoration__1">
    <div class="container">
      <div class="row-title">
        <h2 class="section-title pt-3">Rangkaian Acara</h2>
      </div>
      <div class="row-content justify-between">
        <div class="card" v-for="card in cards" :key="card.id">
          <div class="card-inner">
            <div class="card-front">
              <img src="@/assets/img/cards/card1-corner.svg" class="img top-left">
              <img src="@/assets/img/cards/card1-corner.svg" class="img top-right">
              <img src="@/assets/img/cards/card1-corner.svg" class="img bottom-left">
              <img src="@/assets/img/cards/card1-corner.svg" class="img bottom-right">
              <img src="@/assets/img/cards/card1-mid-bottom.svg" class="img-footer">

              <div class="card-front-item">
                <img :src="card.img1" class="card-front-item-img">
                <h3 class="card-front-item-text">{{ card.title }}</h3>
              </div>
            </div>
            <div class="card-back">
              <div class="card-back-header">
                <img :src="card.img2" class="card-back-header-img">
                <h4 class="card-back-header-text">{{ card.title }}</h4>
              </div>
              <div class="card-back-text">
                <p>{{ card.description }}</p>
              </div>
              <img src="@/assets/img/cards/card2-mid-bottom.svg" class="card-back-footer">
            </div>
          </div>
        </div>
      </div>
    </div>
    <img v-rellax="{ speed: 5 }" src="@/assets/img/visual identity.png" class="img__decoration__2">
  </div>
</template>

<script>
export default {
  name: 'event-section',
  data: () => {
    return {
      cards: [
        {
          id: 0,
          title: 'OHLKM',
          description: 'Open House Lembaga Kedaulatan Mahasiswa (OHLKM) merupakan penutup dari serangkaian acara RAJA Brawijaya. Di sana, kamu bisa memilih Unit Kegiatan Mahasiswa (UKM) dan LKM di Universitas Brawijaya sesuai minat dan bakal di bidang akademik maupun non-akademik.',
          img1: require('@/assets/img/cards/oh1.svg'),
          img2: require('@/assets/img/cards/oh2.svg'),
        },
        {
          id: 1,
          title: 'PKKMU',
          description: 'Pengenalan Kehidupan Kampus Mahasiswa Universitas Brawijaya (PKKMU) adalah kegiatan penyambutan mahasiswa baru sebagai bentuk kegiatan yang bertujuan untuk membuat rasa kebanggan dan penanaman nilai kepada mahasiswa baru akan almamater kita bersama, Universitas Brawijaya.',
          img1: require('@/assets/img/cards/rektor1.svg'),
          img2: require('@/assets/img/cards/rektor2.svg'),
        },
        {
          id: 2,
          title: 'PBPK',
          description: 'Pembinaan Budi Pekerti dan Kepemimpinan (PBPK) merupakan rangkaian acara yang bertujuan untuk melakukan pembinaan karakter keagamaan, melatih jiwa kepemimpinan dan mengajarkan kita untuk dapat membela Negara Kesatuan Republik Indonesia (NKRI) dan mahasiswa baru Universitas Brawijaya.',
          img1: require('@/assets/img/cards/pbpk1.svg'),
          img2: require('@/assets/img/cards/pbpk2.svg'),
        },
      ]
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
.event-section {
  height: 100vh;
  background: $main-color;
  position: relative;
  .img__decoration__1,
  .img__decoration__2 {
    position: absolute;
    top: -100%;
    left: -50%;
    width: 100%;
    height: 100%;
    object-fit: contain;
    z-index: 0;
  }
  .img__decoration__2 {
    top: 0;
    left: unset;
    right: -50%;
  }
  .card {
    width: 300px;
    height: 400px;
    perspective: 1000px;
    margin: 25px 0;
    position: relative;
    z-index: 1;
    .card-inner {
      position: relative;
      width: 100%;
      height: 100%;
      text-align: center;
      transition: transform 0.8s;
      transform-style: preserve-3d;
      .card-front,
      .card-back {
        background: $main-dark;
        position: absolute;
        width: 100%;
        height: 100%;
        border-radius: 16px;
        backface-visibility: hidden;
      }
      .card-front {
        .img {
          width: 50px;
          height: 50px;
          object-fit: cover;
          position: absolute;
          &.top-left {
            top: 16px;
            left: 16px;
          }
          &.top-right {
            top: 16px;
            right: 16px;
            transform: rotate(90deg);
          }
          &.bottom-left {
            left: 16px;
            bottom: 16px;
            transform: rotate(-90deg);
          }
          &.bottom-right {
            right: 16px;
            bottom: 16px;
            transform: rotate(180deg);
          }
          &-footer {
            position: absolute;
            top: 100%;
            left: 50%;
            transform: translate(-50%, -100%);
            width: 200px;
            height: auto;
          }
        }
        &-item {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          &-img {
            width: 200px;
          }
          &-text {
            color: $main-light;
            font-family: 'Kendal-Type', sans-serif;
            font-size: 36px;
            margin-top: 12px;
          }
        }
      }
      .card-back {
        transform: rotateY(180deg);
        &-header {
          background: $yellow;
          padding: 16px 0;
          border-radius: inherit;
          &-img {
            width: 75px;
          }
          &-text {
            color: $main-dark;
            font-family: 'Kendal-Type', sans-serif;
            font-size: 36px;
            margin-top: 12px;
          }
        }
        &-text {
          color: $main-light;
          padding: 16px;
          font-size: 16px;
          line-height: 1.5;
          max-height: 175px;
          overflow: scroll;
        }
        &-footer {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translate(-50%, -125%);
          width: 75px;
          height: auto;
        }
      }
    }
    &:hover {
      .card-inner { transform: rotateY(180deg); }
    }
  }
}
// Mobile Styles
@media only screen and (max-width: 400px) {
  .event-section {
    height: auto;  
    .row-content {
      height: auto;
      flex-direction: column;
      .card {
        .card-inner {
          .card-front {
            .img {
              &-footer {
                width: 150px;
              }
            }
            &-item {
              &-text {
                font-size: 30px;
              }
            }
          }
          .card-back {
            transform: rotateY(180deg);
            &-header {
              &-img {
                width: 75px;
              }
              &-text {
                font-size: 30px;
              }
            }
            &-text {
              line-height: 1.5;
              max-height: 175px;
              overflow: scroll;
            }
            &-footer {
              transform: translate(-50%, -125%);
              width: 75px;
            }
          }
        }
      }
    }
  }
}
// Tablet Styles
@media only screen and (min-width: 401px) and (max-width: 768px) {
  .event-section {
    height: auto;
    .row-content {
      height: auto;
      flex-direction: column;
    }
  }
}
// Laptop Styles
@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .event-section {
    height: auto;
    padding-bottom: 50px;
    .row-content {
      height: auto;
      flex-direction: row;
      .card {
        width: 200px;
        height: 300px;
        .card-inner {
          .card-front {
            .img {
              width: 30px;
              height: 30px;
              &-footer {
                width: 100px;
              }
            }
            &-item {    
              &-img {
                width: 100px;
              }
              &-text {
                font-size: 24px;
              }
            }
          }
          .card-back {
            &-header {
              padding: 12px 0;
              &-img {
                width: 30px;
              }
              &-text {
                font-size: 24px;
              }
            }
            &-text {
              font-size: 14px;
              line-height: 1.5;
              max-height: 150px;
              overflow: scroll;
            }
            &-footer {
              transform: translate(-50%, -125%);
              width: 50px;
            }
          }
        }
      }
    }
  }
}
</style>