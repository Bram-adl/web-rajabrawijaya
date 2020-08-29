<template>
  <div class="master-container">
    <!-- <div class="home">
      <div class="parallax-container">
        <img v-rellax="{ speed: 4 }" src="@/assets/img/hero/gunung.png" class="parallax-img gunung">
      </div>
      
      <div class="parallax-container parallax-sungai">
        <img v-rellax="{ speed: 5 }" src="@/assets/img/hero/sungai2.png" class="parallax-img sungai">
        <div class="about-container">
          <h2 class="about-title">Sekilas Tentang RAJA Brawijaya</h2>
          <p
            class="about-text"
          >RAJA Brawijaya merupakan singkatan dari Rangkaian Jelajah Almamater Universitas Brawijaya yang merupakan serangkaian kegiatan dalam rangka memberikan fasilitas terhadap mahasiswa baru untuk mengenal kehidupan di kampus.</p>
        </div> 
      </div>

      <div class="title-container">
        <h1 class="title animate__animated animate__fadeInUp">RAJA BRAWIJAYA</h1>
        <h3 class="subtitle animate__animated animate__fadeInUp">Rangkaian Acara Jelajah Almamater Universitas Brawijaya</h3>
      </div>
    </div> -->
    <about-section></about-section>
    <logo-section></logo-section>
    <event-section></event-section>
    <what-to-do></what-to-do>
    <video-section></video-section>
  </div>
</template>

<script>
import AboutSection from './sections/AboutSection.vue';
import LogoSection from "./sections/LogoSection.vue";
import EventSection from "./sections/EventSection.vue";
import WhatToDo from "./sections/WhatToDo.vue";
import VideoSection from "./sections/VideoSection.vue";

export default {
  name: "home",
  components: {
    AboutSection,
    LogoSection,
    EventSection,
    WhatToDo,
    VideoSection,
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
// .home {
//   height: 100vh;
//   position: relative;
//   background: $main-color;
//   .parallax-container {
//     height: 100%;
//     position: relative;
//     .gunung {
//       width: 100%;
//       height: 100%;
//       object-fit: contain;
//     }
//   }
//   .parallax-sungai {
//     height: 150vh;
//     position: absolute;
//     left: 0;
//     top: 0;
//     z-index: 5;
//     &::after {
//       content: '';
//       position: absolute;
//       width: 100%;
//       height: 10vh;
//       background: linear-gradient(to bottom, rgba(0, 0, 0, 0.48), rgba(0, 0, 0, 0));
//       left: 0;
//       top: 0;
//     }
//     .sungai {
//       width: 100%;
//       height: 1250px;
//       object-fit: cover;
//       object-position: bottom center;
//     }
//     .about-container {
//       position: absolute;
//       top: 100%;
//       left: 50px;
//       transform: translate(0, -100%);
//       z-index: 5;
//       width: 400px;
//       color: $main-light;
//       .about-title {
//         font-size: 36px;
//       }
//       .about-text {
//         font-size: 20px;
//         line-height: 1.5;
//         margin-top: 16px;
//       }
//     }
//   }
//   .title-container {
//     color: $main-light;
//     position: absolute;
//     left: 50%;
//     top: 125px;
//     transform: translate(-50%, -50%);
//     z-index: 4;
//     color: $main-light;
//     text-align: center;
//     text-shadow: 0 8px 12px rgba(0, 0, 0, 0.48);
//     .title {
//       font-family: 'Kendal-Type', sans-serif;
//       font-size: 64px;
//       position: relative;
//       &::before,
//       &::after {
//         content: "";
//         position: absolute;
//         background: $main-light;
//         width: 64px;
//         height: 10px;
//         top: 50%;
//         transform: translate(0, -50%);
//       }
//       &::before {
//         left: 0;
//         border-bottom-left-radius: 16px;
//       }
//       &::after {
//         right: 0;
//         border-bottom-right-radius: 16px;
//       }
//     }
//     .subtitle {
//       font-size: 24px;
//       font-weight: normal;
//       letter-spacing: 2px;;
//       white-space: nowrap;
//     }
//   }
// }
// // Mobile Styles
// @media only screen and (max-width: 400px) {
//   .home {  
//     .parallax-container {
//       .gunung {
//         object-fit: cover;
//       }
//     }
//     .parallax-sungai {
//       height: 1000px;
//       .sungai {
//         height: 800px;
//       }
//       .about-container {
//         top: unset;
//         bottom: 0%;
//         left: 50%;
//         transform: translate(-50%, 0);
//         width: 75%;
//         text-align: center;
//         .about-title {
//           font-size: 32px;
//         }
//         .about-text {
//           font-size: 14px;
//           line-height: 1.5;
//         }
//       }
//     }
//     .title-container {
//       left: 50%;
//       top: 200px;
//       transform: translate(-50%, 0);
//       width: 75%;
//       .title {
//         font-size: 36px;
//         &::before,
//         &::after {
//           display: none;
//         }
//       }
//       .subtitle {
//         margin-top: 12px;
//         font-size: 16px;
//         letter-spacing: 1px;
//         line-height: 1.5;
//         white-space: normal;
//       }
//     }
//   }
// }
// // Tablet Styles
// @media only screen and (min-width: 401px) and (max-width: 768px) {
//   .home {  
//     .parallax-container {
//       .gunung {
//         object-fit: cover;
//       }
//     }
//     .parallax-sungai {
//       height: 1000px;
//       .sungai {
//         height: 800px;
//       }
//       .about-container {
//         top: unset;
//         bottom: 0%;
//         left: 50%;
//         transform: translate(-50%, 0);
//         width: 75%;
//         text-align: center;
//         .about-title {
//           font-size: 36px;
//         }
//         .about-text {
//           font-size: 16px;
//           line-height: 1.5;
//         }
//       }
//     }
//     .title-container {
//       left: 50%;
//       top: 150px;
//       transform: translate(-50%, 0);
//       width: 75%;
//       .title {
//         font-size: 40px;
//         &::before,
//         &::after {
//           width: 15%;
//           height: 8px;
//         }
//       }
//       .subtitle {
//         font-size: 16px;
//         white-space: normal;
//         line-height: 1.5;
//       }
//     }
//   }
// }
// // Laptop Styles
// @media only screen and (min-width: 769px) and (max-width: 1024px) {
//   .home {  
//     .parallax-container {
//       .gunung {
//         object-fit: cover;
//       }
//     }
//     .parallax-sungai {
//       height: 1000px;
//       .sungai {
//         height: 1000px;
//       }
//       .about-container {
//         top: unset;
//         bottom: 0%;
//         left: 50%;
//         transform: translate(-50%, 0);
//         width: 75%;
//         text-align: center;
//         .about-title {
//           font-size: 40px;
//         }
//       }
//     }
//     .title-container {
//       left: 50%;
//       top: 150px;
//       transform: translate(-50%, 0);
//       width: 75%;
//       .title {
//         font-size: 50px;
//         &::before,
//         &::after {
//           width: 75px;
//           height: 10px;
//         }
//       }
//       .subtitle {
//         font-size: 25px;
//         letter-spacing: 1px;
//         white-space: normal;
//       }
//     }
//   }
// }
// // Desktop Styles
// @media only screen and (min-width: 1025px) and (max-width: 1200px) {
//   .home {  
//     .parallax-container {
//       .gunung {
//         object-fit: cover;
//       }
//     }
//     .parallax-sungai {
//       .sungai {
//         height: 1100px;
//       }
//       .about-container {
//         top: unset;
//         bottom: 0%;
//         left: 50%;
//         transform: translate(-50%, 0%);
//         width: 75%;
//         text-align: center;
//         .about-title {
//           font-size: 40px;
//         }
//       }
//     }
//     .title-container {
//       left: 50%;
//       top: 150px;
//       transform: translate(-50%, 0);
//       width: 75%;
//       padding: 0 25px;
//       .title {
//         font-size: 58px;
//         &::before,
//         &::after {
//           width: 100px;
//           height: 10px;
//         }
//       }
//       .subtitle {
//         font-size: 24px;
//         letter-spacing: 1px;
//         white-space: normal;
//       }
//     }
//   }
// }
</style>