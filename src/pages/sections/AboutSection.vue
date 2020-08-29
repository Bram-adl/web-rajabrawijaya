<template>
  <div class="about-raja">
    <h2 class="section-title" data-aos="fade-right">Sekilas tentang RAJA Brawijaya</h2>
    <div class="wrapper">
      <img src="@/assets/img/Artboard 2.svg" class="artboard">

      <div class="text-box">
        <p>RAJA Brawijaya atau Rangkaian Acara Jelajah Almamater Universitas Brawijaya adalah serangkaian kegiatan yang bertujuan untuk memfasilitasi mahasiswa baru Universitas Brawijaya agar dapat mengetahui hal-hal yang terkait dengan kehidupan kampus. Rangkaian ini sendiri terdiri dari tiga rangkaian yaitu PKKMB, PBPK, dan OH.</p>
        <img src="@/assets/img/visual-identity.svg" class="visual__identity">
      </div>
    </div> 
  </div>
</template>

<script>
export default {
  name: 'about',
}
</script>

<style lang="scss">
@import "@/assets/scss/main.scss";
.about-raja {
  padding: 50px 0;
  .wrapper {
    max-width: 75%;
    margin: 75px auto 0;
    position: relative;
    line-height: 0;
    .text-box {
      border: 2px solid #ef5557;
      background-color: $main-light;
      width: 60%;
      height: 100%;
      margin: auto;
      padding: 2rem 1.5rem;
      box-shadow: .5rem .5rem 0 rgba(0, 0, 0, 0.24);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      overflow: hidden;
      p {
        display: inline-flex;
        align-items: center;
        height: 100%;
        color: $main-dark;
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        text-align: justify;
        line-height: 1.5;
      }
      .visual__identity {
        position: absolute;
        right: -100px;
        bottom: -100px;
        width: 200px;
      }
    }
  }
}
@media only screen and (max-width: 400px) {
  .about-raja {
    // background: mediumseagreen;
    height: auto;
    padding-bottom: 25px;
    h2 {
      font-size: 2rem;
      padding: 25px 0;
    }
    .artboard {
      display: none;
    }
    .wrapper {
      margin: 25px auto;
      .text-box {
        width: 100%;
        height: auto;
        position: relative;
        top: unset;
        left: unset;
        transform: unset;
        .visual__identity {
          right: -50px;
          bottom: -50px;
          width: 100px;
        }
      }
    }
  }
}
@media only screen and (min-width: 401px) and (max-width: 768px) {
  .about-raja {
    // background: mediumseagreen;
    height: auto;
    padding-bottom: 25px;
    h2 {
      font-size: 2rem;
      padding: 25px 0;
    }
    .artboard {
      display: none;
    }
    .wrapper {
      margin: 25px auto;
      .text-box {
        width: 100%;
        height: auto;
        position: relative;
        top: unset;
        left: unset;
        transform: unset;
        .visual__identity {
          right: -50px;
          bottom: -50px;
          width: 100px;
        }
      }
    }
  }
}
</style>