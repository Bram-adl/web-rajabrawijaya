<template>
  <transition name="menu">
    <nav class="menu-list" v-if="menuOpen">
        <div class="container container-grid">
          <div class="menu-box">
            <img src="@/assets/img/LogoIntro.png" alt="logo" class="menu-logo">
          </div>
          <div class="menu-box">
            <div class="menu-links">
              <router-link 
                to="/" 
                class="menu-link" 
                :class="{ 'animate__animated animate__fadeInUp' : menuOpen }"
              >
                <span @click="closeMenu">Home</span>
              </router-link>
              <router-link 
                to="/adhikara" 
                class="menu-link" 
                :class="{ 'animate__animated animate__fadeInUp' : menuOpen }"
              >
                <span @click="closeMenu">Adhikara Info</span>
              </router-link>
              <router-link 
                to="/gallery" 
                class="menu-link" 
                :class="{ 'animate__animated animate__fadeInUp' : menuOpen }"
              >
                <span @click="closeMenu">Gallery</span>
              </router-link>
              <router-link 
                to="/faq" 
                class="menu-link" 
                :class="{ 'animate__animated animate__fadeInUp' : menuOpen }"
              >
                <span @click="closeMenu">FAQ</span>
              </router-link>
            </div>
            <div class="menu-socials">
              <a 
                href="#" 
                class="menu-social" 
                :class="{ 'animate__animated animate__fadeInUp' : menuOpen }"
                >
                <i class="fa fa-facebook"></i></a>
              <a 
                href="#" 
                class="menu-social" 
                :class="{ 'animate__animated animate__fadeInUp' : menuOpen }"
                >
                <i class="fa fa-twitter"></i></a>
              <a 
                href="#" 
                class="menu-social" 
                :class="{ 'animate__animated animate__fadeInUp' : menuOpen }"
                >
                <i class="fa fa-instagram"></i></a>
              <a 
                href="#" 
                class="menu-social" 
                :class="{ 'animate__animated animate__fadeInUp' : menuOpen }"
                >
                <i class="fab fa-line"></i></a>
              <a 
                href="#" 
                class="menu-social" 
                :class="{ 'animate__animated animate__fadeInUp' : menuOpen }"
                >
                <i class="fa fa-youtube"></i></a>
            </div>
          </div>
        </div>
      </nav>
    </transition>
</template>

<script>
export default {
  name: 'menu-navigation',
  props: {
    menuOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    closeMenu() {
      this.Fire.$emit('closeMenu')
    }
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/_variables.scss";

.menu-list {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9; /* Z-Index for Menu List: 5 */
  background: linear-gradient(to top right, $main-color, lighten($main-color, 5%));

  .container-grid {    
    height: 100%;
    
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: $gutter;

    align-items: center;
    align-content: center;

  }

  .menu-logo {
    display: block;
    height: 500px;
    margin: auto;
  }

  .menu-links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    
    .menu-link {
      color: $main-light;
      font-family: 'Kendal-Type', sans-serif;
      font-size: 54px;
      margin: 12px 0;
      
      span {
        display: inline-block;
        transition: .4s ease-out;

        &:hover {
          opacity: .5;
          color: darken($main-light, 15%);
          transform: translateX(8px);
        }
      }

      &:nth-child(4) { animation-delay: .1s; }
      &:nth-child(3) { animation-delay: .2s; }
      &:nth-child(2) { animation-delay: .3s; }
      &:nth-child(1) { animation-delay: .4s; }
    }
  }

  .menu-socials {
    margin-top: 50px;
    width: 300px;
    display: flex;
    justify-content: space-between;
    
    .menu-social {
      font-size: 24px;
      
      i { 
        display: inline-block;
        color: $main-light;
        transition: .4s ease-out; 

        &:hover {
          transform: translateY(-8px);
        }
      }

      .fa-facebook:hover { color: #3b5998; }
      .fa-twitter:hover { color: #00acee; }
      .fa-instagram:hover { color: #dd2a7b; }
      .fa-line:hover { color: #46aa42; }
      .fa-youtube:hover { color: #c4302b; }
    }
  }
}
</style>