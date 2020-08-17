<template>
  <div id="home">
    <main class="main">
      <div id="parallaxContainer" class="container">
        <img 
          class="img img-gunung" 
          v-rellax="{ speed: 1 }"
          src="@/assets/img/gunung.png"
        >
        <img 
          class="img img-sungai" 
          v-rellax="{ speed: 3 }"
          src="@/assets/img/sungai.png"
        >
      </div>
    </main>
    <about></about>
    <logo-introduction></logo-introduction>
    <!-- <rangkaian-acara></rangkaian-acara> -->
    <what-to-do></what-to-do>
    <video-introduction></video-introduction>
  </div>
</template>

<script>
import About from './sections/About'
import LogoIntroduction from './sections/LogoIntroduction'
// import RangkaianAcara from './sections/RangkaianAcara'
import WhatToDo from './sections/WhatToDo'
import VideoIntroduction from './sections/VideoIntroduction'

export default {
  name: 'home',
  components: {
    About,
    LogoIntroduction,
    // RangkaianAcara,
    WhatToDo,
    VideoIntroduction,
  },
}
</script>

<style lang="scss">
$main-color: #f8f8f8;
.main {
  width: 100%;
  height: 100vh;

  background: linear-gradient(to top, var(--main), #111);

  .container {
    position: relative;

    width: 100%;
    height: 100%;

    background: var(--main);
    overflow: hidden;
    z-index: 0;
  }

  .img {
    position: absolute;
  }

  .img-sungai {
    top: 350px;
  }

  .img-gunung {
    top: 16px;
  }

  .img-gunung,
  .img-sungai {   
    width: 100%;
    height: 100%;
    
    transition: .4s ease-out;
    z-index: -2;
  }
}
</style>