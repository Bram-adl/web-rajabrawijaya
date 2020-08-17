<template>
  <div class="video-section">
    <img src="@/assets/img/gunung.png" alt="gunung">
    <div class="container">
      <h2 class="section-title title-light">Lihat Keseruan RAJA Tahun Lalu!</h2>
      <iframe src="https://www.youtube.com/embed/SJ9GCuu-riw" class="video" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.video-section {
  background: linear-gradient(brown, rgb(216, 216, 46));
  height: 100vh;
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    bottom: -500px;
  }
  
  .container {
    height: 100%;
  }

  .video {
    width: 800px;
    height: 400px;
    display: block;
    margin: auto;
    border-radius: 12px;
    border: 5px solid $main-light;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.32);
  }
}
</style>