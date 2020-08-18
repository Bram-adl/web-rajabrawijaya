<template>
  <div class="video-section">
    <div class="container">
      <div class="row-title">
        <h2 class="section-title pt-3">Lihat Keseruan RAJA Tahun Lalu!</h2>
      </div>
      <div class="row-content">
        <img v-rellax="{ speed: 4 }" src="@/assets/img/gunung.png" alt="gunung">
        <iframe src="https://www.youtube.com/embed/SJ9GCuu-riw" class="video" frameborder="0"></iframe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'video-section'
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.video-section {
  height: 100vh;
  background: linear-gradient(brown, rgb(216, 216, 46));
  position: relative;
  overflow: hidden;

  img {
    position: absolute;
    bottom: -1200px;
    z-index: 0;
  }

  .video {
    width: 800px;
    height: 400px;
    display: block;
    margin: auto;
    border-radius: 12px;
    border: 5px solid $main-light;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.32);
    position: relative;

    z-index: 1;
  }
}
</style>