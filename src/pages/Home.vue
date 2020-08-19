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
    <center><button v-on:click="subscribeToNotifications">NOTIF ME</button></center>
  </div>
</template>

<script>
import About from './sections/About'
import LogoIntroduction from './sections/LogoIntroduction'
// import RangkaianAcara from './sections/RangkaianAcara'
import WhatToDo from './sections/WhatToDo'
import VideoIntroduction from './sections/VideoIntroduction'
import * as firebase from 'firebase/app'
import 'firebase/messaging'
import 'firebase/database'

// Your web app's Firebase configuration
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
  name: 'home',
  components: {
    About,
    LogoIntroduction,
    // RangkaianAcara,
    WhatToDo,
    VideoIntroduction,
  },
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
button{color: black; font-weight:bold; padding: 12px; margin: 20px;}
</style>