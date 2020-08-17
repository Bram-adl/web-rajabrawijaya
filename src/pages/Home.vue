<template>
  <div class="master-container">
    <div class="home">
      <div class="parallax-wrapper">
        <img v-rellax="{ speed: 8 }" src="@/assets/img/sungai2.png" class="parallax-img sungai">
        <img v-rellax="{ speed: 4 }" src="@/assets/img/gunung.png" class="parallax-img gunung">

        <div class="title-container">
          <h1 class="title">RAJA BRAWIJAYA</h1>
          <h3 class="subtitle">Rangkaian Acara Jelajah Almamater Universitas Brawijaya</h3>
        </div>

        <div class="about-container">
          <h2 class="about-title">Sekilas Tentang RAJA Brawijaya</h2>
          <p class="about-text">
            RAJA Brawijaya merupakan singkatan dari Rangkaian Jelajah Almamater Universitas Brawijaya yang merupakan serangkaian kegiatan dalam rangka memberikan fasilitas terhadap mahasiswa baru untuk mengenal kehidupan di kampus.
          </p>
        </div>
      </div>
    </div>

    <logo-section></logo-section>

    <event-section></event-section>

    <what-to-do></what-to-do>

    <video-section></video-section>
  </div>
</template>

<script>
import LogoSection from './sections/LogoSection.vue'
import EventSection from './sections/EventSection.vue'
import WhatToDo from './sections/WhatToDo.vue'
import VideoSection from './sections/VideoSection.vue'

export default {
  name: 'home',
  components: {
    LogoSection,
    EventSection,
    WhatToDo,
    VideoSection,
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.home {
  height: 1100px;
  position: relative;
  overflow: hidden;

  .parallax-wrapper {
    height: 1000px;
    position: relative;
    z-index: 4;
    background: $main-color;
    
    .parallax-img {
      position: absolute;
      z-index: 3;
    }

    .sungai {
      top: -500px;
      z-index: 4
    }
  }
}

.title-container {
  position: absolute;
  z-index: 3;
  top: 150px;
  left: 50%;
  transform: translate(-50%, 0);
  color: $main-light;
  text-align: center;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.32);

  .title {
    font-size: 64px;
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      background: $main-light;
      width: 100px;
      height: 10px;
      top: 50%;
      transform: translate(25px, -50%);
    }

    &::before {
      border-bottom-left-radius: 16px;
      left: 0;
    }

    &::after {
      border-bottom-right-radius: 16px;
      transform: translate(-25px, -50%);
      right: 0;
    }
  }

  .subtitle {
    opacity: .75;
    font-size: 24px;
    letter-spacing: 4px;
    width: 850px;
  }
}

.about-container {
  position: absolute;
  top: 800px;
  left: 50px;
  z-index: 5;
  width: 400px;

  color: $main-light;

  .about-title {
    font-size: 36px;
  }

  .about-text {
    line-height: 1.5;
    margin-top: 16px;
  }
}
</style>