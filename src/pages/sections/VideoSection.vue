<template>
  <div class="video-section">
    <div class="container" data-aos="fade-up" data-aos-delay="100" data-aos-duration="400">
      <h2 class="section-title mb-5" data-aos="fade-right">Lihat Keseruan RAJA Brawijaya Tahun Sebelumnya!</h2>
      <div class="wrapper">
        <iframe src="https://www.youtube.com/embed/SJ9GCuu-riw" data-aos="flip-down" data-aos-duration="400" class="video" frameborder="0"></iframe>
        <button class="btn btn-block" v-on:click="subscribeToNotifications">Aktifkan Notifikasi RAJA!</button>
      </div>
    </div>
    <img v-rellax="{ speed: 2 }"  src="@/assets/img/hero/gunung.png" alt="gunung" class="background__image">
  </div>
</template>

<script>
import * as firebase from 'firebase/app'
import 'firebase/messaging'
import 'firebase/database'
var firebaseConfig = {
    apiKey: "AIzaSyCppZPGspEMOoxRWCq3RVbaC0G17ktwILs",
    authDomain: "rajabrawijaya.ub.ac.id",
    //authDomain: "raja-brawijaya-1b316.firebaseapp.com",
    databaseURL: "https://raja-brawijaya-1b316.firebaseio.com",
    projectId: "raja-brawijaya-1b316",
    storageBucket: "raja-brawijaya-1b316.appspot.com",
    messagingSenderId: "315789839205",
    appId: "1:315789839205:web:06312e4608c4cb63faef8c",
    measurementId: "G-15TNG0D62W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.usePublicVapidKey("BM-ehVX421lBOerft4KhkFwls_E3cobUSZCBRNWOdtAErGmDdE8TqHsFnmUNlPRKtgOA_xo2A1Az2WV8_Iwy-Uk");


export default {
  name: 'video-section',
  methods: {
    subscribeToNotifications(){
      messaging.requestPermission()
        .then(() => {
          console.log('Have Permission');
          return messaging.getToken();
        })
        .then(function(token){
          console.log(token);
        });
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
.video-section {
  height: 100vh;
  background: linear-gradient(brown, rgb(216, 216, 46));
  position: relative;
  overflow: hidden;
  padding: 50px 0;
  
  .wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .background__image {
    position: absolute;
    left: 0;
    bottom: -800px;
    max-width: 100%;
    z-index: 0;
  }
  .video {
    flex: 2;
    height: 400px;
    border-radius: 12px;
    border: 5px solid $main-light;
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.32);
    position: relative;
    z-index: 1;
  }
  .btn {
    flex: 1;
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 20px;
    font-weight: 600;
    color: $main-light;
    background: rgb(175, 50, 175);
    outline: none;
    border: none;
    border-radius: 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.32);
    padding: 12px 0;
    margin-left: 50px;
    position: relative;
    z-index: 1;
    cursor: pointer;
    &:hover {
      background: darken(rgb(175, 50, 175), 5%);
    }
  }
}
@media only screen and (max-width: 400px) {
  .video-section {
    height: auto;    
    .wrapper {
      flex-direction: column;
      max-width: 90%;
      margin: auto;
    }
    .background__image {
      display: none;
    }
    .video {
      flex: 1;
      height: auto;
    }
    .btn {
      font-size: 1rem;
      margin-left: 0;
      margin-top: 25px;
    }
  }
}
@media only screen and (min-width: 401px) and (max-width: 768px) {
  .video-section {
    height: auto;    
    .wrapper {
      flex-direction: column;
      max-width: 90%;
      margin: auto;
    }
    .background__image {
      display: none;
    }
    .video {
      flex: 1;
      width: 100%;
      height: auto;
    }
    .btn {
      font-size: 1rem;
      margin-left: 0;
      margin-top: 25px;
    }
  }
}
@media only screen and (min-width: 769px) and (max-width: 1024px) {
  .video-section {
    height: auto;    
    .wrapper {
      flex-direction: column;
      max-width: 90%;
      margin: auto;
    }
    .background__image {
      display: none;
    }
    .video {
      flex: 1;
      width: 100%;
      height: 300px;
    }
    .btn {
      font-size: 1rem;
      margin-left: 0;
      margin-top: 25px;
    }
  }
}
</style>