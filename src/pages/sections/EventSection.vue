<template>
  <div class="event-section">
    <div class="container container-grid">
      <h2 class="section-title">Rangkaian Acara</h2>
      <div class="card-box">
        <div class="card" v-for="card in cards" :key="card.id">
          <div class="card-inner">
            <div class="card-front">
              <img src="@/assets/img/card1-corner.svg" class="img top-left">
              <img src="@/assets/img/card1-corner.svg" class="img top-right">
              <img src="@/assets/img/card1-corner.svg" class="img bottom-left">
              <img src="@/assets/img/card1-corner.svg" class="img bottom-right">
              <img src="@/assets/img/card1-mid-bottom.svg" class="img-footer">

              <div class="card-front-item">
                <img src="@/assets/img/oh1.svg" class="card-front-item-img">
                <h3 class="card-front-item-text">{{ card.title }}</h3>
              </div>
            </div>
            <div class="card-back">
              <div class="card-back-header">
                <img src="@/assets/img/oh2.svg" class="card-back-header-img">
                <h4 class="card-back-header-text">{{ card.title }}</h4>
              </div>
              <div class="card-back-text">
                <p>{{ card.description }}</p>
              </div>
              <img src="@/assets/img/card2-mid-bottom.svg" class="card-back-footer">
            </div>
          </div>
        </div>
      </div>      
    </div>
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
          description: 'Open House Lembaga Kedaulatan Mahasiswa (OHLKM) merupakan penutup dari serangkaian acara RAJA Brawijaya. Di sana, kamu bisa memilih Unit Kegiatan Mahasiswa (UKM) dan LKM di Universitas Brawijaya sesuai minat dan bakal di bidang akademik maupun non-akademik.'
        },
        {
          id: 1,
          title: 'PKKMU',
          description: 'Pengenalan Kehidupan Kampus Mahasiswa Universitas Brawijaya (PKKMU) adalah kegiatan penyambutan mahasiswa baru sebagai bentuk kegiatan yang bertujuan untuk membuat rasa kebanggan dan penanaman nilai kepada mahasiswa baru akan almamater kita bersama, Universitas Brawijaya.'
        },
        {
          id: 2,
          title: 'PBPK',
          description: 'Pembinaan Budi Pekerti dan Kepemimpinan (PBPK) merupakan rangkaian acara yang bertujuan untuk melakukan pembinaan karakter keagamaan, melatih jiwa kepemimpinan dan mengajarkan kita untuk dapat membela Negara Kesatuan Republik Indonesia (NKRI) dan mahasiswa baru Universitas Brawijaya.'
        },
      ]
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.event-section {
  background: $main-dark;
  color: $main-light;

  .container {
    height: 100vh;
  }

  .card-box {
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 50px;

    .card {
      width: 250px;
      height: 350px;
      margin: 0 25px;
      // background: transparent;
      perspective: 1000px;

      &:hover {
        .card-inner {
          transform: rotateY(180deg);
        }
      }

      &-inner {
        position: relative;
        width: 100%;
        height: 100%;
        text-align: center;
        transition: transform 0.8s;
        transform-style: preserve-3d;

        .card-front,
        .card-back {
          width: 100%;
          height: 100%;
          position: absolute;
          left: 0;
          top: 0;
          background: #212121;
          box-shadow: 0 16px 16px rgba(0, 0, 0, 0.32);
          border-radius: 16px;
          backface-visibility: hidden;
        }
        
        .card-front {
          position: relative;

          .img {
            width: 15%;
            height: auto;
            position: absolute;
          }

          .top-left { left: 5%; top: 5%; }
          .top-right { right: 5%; top: 5%; transform: rotate(90deg) }
          .bottom-left { left: 5%; bottom: 5%; transform: rotate(-90deg); }
          .bottom-right { right: 5%; bottom: 5%; transform: rotate(-180deg); }
          .img-footer {
            position: absolute;
            bottom: 0;
            left: 50%;
            transform: translate(-50%, 0);
            width: 50%;
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

        .card-back {
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
            font-size: 12px;
            margin-top: 25px;
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
}
</style>