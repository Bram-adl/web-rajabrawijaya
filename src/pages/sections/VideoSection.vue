<template>
  <div class="video-section">
    <div class="container">
      <div class="row-title">
        <h2 class="section-title pt-3">Lihat Keseruan RAJA Tahun Lalu!</h2>
      </div>
      <div class="row-content">
        <iframe src="https://www.youtube.com/embed/SJ9GCuu-riw" class="video" frameborder="0"></iframe>
        <button class="btn btn-block">Aktifkan Notifikasi RAJA!</button>
      </div>
    </div>
    <img v-rellax="{ speed: 4 }" src="@/assets/img/hero/gunung.png" alt="gunung" class="background__image">
  </div>
</template>

<script>
export default {
  name: 'video-section'
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
.video-section {
  height: 100vh;
  background: linear-gradient(brown, rgb(216, 216, 46));
  position: relative;
  overflow: hidden;
  .background__image {
    position: absolute;
    left: 0;
    bottom: -1200px;
    width: 100%;
    height: 100%;
    z-index: 0;
  }
  .row-content {
    .video {
      width: 800px;
      height: 400px;
      border-radius: 12px;
      border: 5px solid $main-light;
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.32);
      position: relative;
      z-index: 1;
    }
    .btn {
      margin-left: 100px;
      width: 400px;
      position: relative;
      z-index: 1;
      font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-size: 20px;
      font-weight: 600;
      color: $main-light;
      background: rgb(175, 50, 175);
      outline: none;
      border: none;
      border-radius: 4px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.32);
      padding: 12px 32px;
      cursor: pointer;
      &:hover {
        background: darken(rgb(175, 50, 175), 5%);
      }
    }
  }
}
// Mobile Styles
@media only screen and (max-width: 400px) {
  .video-section {
    height: auto;
    .background__image {
      bottom: -1500px;
      object-fit: contain;
    }
    .row-content {
      height: auto;
      flex-direction: column;
      justify-content: flex-start !important;
      .video {
        width: 80%;
        height: 400px;
      }
      .btn {
        margin: 25px 0;
        width: 80%;
        font-size: 16px;
      }
    }
  }
}
// Tablet Styles
@media only screen and (min-width: 401px) and (max-width: 768px) {
  .video-section {
    padding: 25px 0;
    height: auto;
    .background__image {
      bottom: -2700px;
      object-fit: contain;
    }
    .row-content {
      height: auto;
      flex-direction: column;
      justify-content: flex-start !important;
      .video {
        width: 100%;
        height: 300px;
        margin: 25px 0;
      }
      .btn {
        margin-left: 0;
      }
    }
  }
}
// Laptop Styles
@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .video-section {
    padding: 25px 0;
    height: auto;
    .background__image {
      bottom: -2000px;
      object-fit: cover;
    }
    .row-content {
      height: auto;
      flex-direction: column;
      justify-content: flex-start !important;
      .video {
        width: 100%;
        height: 400px;
        margin: 25px 0;
      }
      .btn {
        margin-left: 0;
      }
    }
  }
}
// Desktop Styles
@media only screen and (min-width: 1025px) and (max-width: 1200px) {
  .video-section {
    padding: 25px 0;
    height: auto;
    .background__image {
      bottom: -1200px;
      object-fit: cover;
    }
    .row-content {
      height: auto;
      flex-direction: column;
      justify-content: flex-start !important;
      .video {
        width: 100%;
        height: 500px;
        margin: 25px 0;
      }
      .btn {
        margin-left: 0;
      }
    }
  }
}
</style>