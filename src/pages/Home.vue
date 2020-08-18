<template>
  <div class="master-container">
    <div class="home">
      <div class="parallax-wrapper">
        <img v-rellax="{ speed: 4 }" src="@/assets/img/gunung.png" class="parallax-img gunung">
      </div>
      <div class="parallax-wrapper">
        <img v-rellax="{ speed: 5 }" src="@/assets/img/sungai2.png" class="parallax-img sungai">
      </div>

      <div class="title-container">
        <h1 class="title">RAJA BRAWIJAYA</h1>
        <h3 class="subtitle">Rangkaian Acara Jelajah Almamater Universitas Brawijaya</h3>
      </div>

      <div class="about-container">
        <h2 class="about-title">Sekilas Tentang RAJA Brawijaya</h2>
        <p
          class="about-text"
        >RAJA Brawijaya merupakan singkatan dari Rangkaian Jelajah Almamater Universitas Brawijaya yang merupakan serangkaian kegiatan dalam rangka memberikan fasilitas terhadap mahasiswa baru untuk mengenal kehidupan di kampus.</p>
      </div>
    </div>

    <logo-section></logo-section>

    <event-section></event-section>

    <what-to-do></what-to-do>

    <video-section></video-section>
  </div>
</template>

<script>
import LogoSection from "./sections/LogoSection.vue";
import EventSection from "./sections/EventSection.vue";
import WhatToDo from "./sections/WhatToDo.vue";
import VideoSection from "./sections/VideoSection.vue";

export default {
  name: "home",
  components: {
    LogoSection,
    EventSection,
    WhatToDo,
    VideoSection,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.home {
  height: 150vh;
  position: relative;

  .parallax-wrapper {
    width: 100%;
    height: 100%;

    position: absolute;
    overflow: hidden;

    .parallax-img {
      position: absolute;
      left: 0;
    }

    .gunung {
      top: 0;
      z-index: 3;
    }
    .sungai {
      bottom: -275px;
      z-index: 5;
    }
  }

  .title-container {
    color: $main-light;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, 100px);
    z-index: 4;

    color: $main-light;
    text-align: center;
    text-shadow: 0 4px 8px rgba(0, 0, 0, 0.32);

    .title {
      display: block;
      font-size: 64px;
      position: relative;

      &::before,
      &::after {
        content: "";
        position: absolute;
        background: $main-light;
        width: 64px;
        height: 10px;
        top: 50%;
        transform: translate(0, -50%);
      }

      &::before {
        left: 0;
        border-bottom-left-radius: 16px;
      }

      &::after {
        right: 0;
        border-bottom-right-radius: 16px;
      }
    }

    .subtitle {
      display: inline-block;
      font-size: 24px;
      font-weight: normal;
      letter-spacing: 2px;
      opacity: .8;
      white-space: nowrap;
    }
  }

 .about-container {
    position: absolute;
    bottom: 25vh;
    left: 50px;
    transform: translateY(50%);
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
}
</style>