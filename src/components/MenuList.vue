<template>
  <transition name="fade">
    <div class="menu" v-if="showMenu">
      <div class="menu-left">
        <div
          class="menu-left-content"
        >Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora laborum at molestiae possimus repudiandae doloribus expedita nihil distinctio vel quia! Blanditiis, laborum. Iusto, recusandae accusamus.</div>
      </div>

      <div class="menu-right">
        <div class="menu-right-content">
          <div class="menu-right-content-link">
            <router-link to="/" :class="{ animate: showMenu }">
              <span @click="closeMenu">Beranda</span>
            </router-link>
            <router-link to="/adhikara" :class="{ animate: showMenu }">
              <span @click="closeMenu">Adhikara Info</span>
            </router-link>
            <router-link to="/gallery" :class="{ animate: showMenu }">
              <span @click="closeMenu">Gallery</span>
            </router-link>
            <router-link to="/faq" :class="{ animate: showMenu }">
              <span @click="closeMenu">FAQ</span>
            </router-link>
          </div>
          <div class="menu-right-content-social">
            <a href="https://www.facebook.com/rajabrawijaya2019" target="_blank" :class="{ animate: showMenu }">
              <i class="fa fa-facebook facebook"></i>
            </a>
            <a href="https://twitter.com/raja_brawijaya?s=20" target="_blank" :class="{ animate: showMenu }">
              <i class="fa fa-twitter twitter"></i>
            </a>
            <a href="https://www.instagram.com/raja_brawijaya/" target="_blank" :class="{ animate: showMenu }">
              <i class="fa fa-instagram instagram"></i>
            </a>
            <a href="https://timeline.line.me/user/_dbvQNuFTqLQuF6MZ7s1pMIVRv64mnPCk8tMco30?utm_medium=windows&utm_source=desktop&utm_campaign=OA_Profile" target="_blank" :class="{ animate: showMenu }">
              <i class="fab fa-line line"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCpNS1e8i6pgkxqxbdIPnUNQ" target="_blank" :class="{ animate: showMenu }">
              <i class="fa fa-youtube youtube"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "menu-list",
  props: {
    showMenu: {
      type: Boolean,
      required: true,
    },
  },
  data: () => {
    return {
      hovered: false,
    };
  },
  methods: {
    closeMenu() {
      this.$eventBus.$emit("closeMenu");
    },
  },
};
</script>

<style lang="scss">
@mixin displayFlex() {
  display: flex;
  align-items: center;
  justify-content: center;
}

.menu {
  position: fixed;
  left: 0;
  top: 0;

  width: 100%;
  height: 100vh;
  background: #160716;
  // background: #f8f8f8;

  display: flex;
  color: #f8f8f8;

  z-index: 9;

  &-left {
    width: 50%;
    height: 100%;

    @include displayFlex();

    &-content {
      width: 250px;
    }
  }

  &-right {
    width: 50%;
    height: 100%;

    @include displayFlex();
    justify-content: flex-start;

    &-content {
      &-link {
        display: flex;
        flex-direction: column;

        a {
          display: inline-block;
          font-size: 48px;
          margin: 8px 0;
          opacity: 0;
          transition: 0.4s ease-out;
        }

        a:hover {
          margin-left: 8px;
        }

        a:nth-child(1) {
          animation-delay: 0.3s;
        }
        a:nth-child(2) {
          animation-delay: 0.2s;
        }
        a:nth-child(3) {
          animation-delay: 0.1s;
        }
        a:nth-child(4) {
          animation-delay: 0;
        }
      }

      &-social {
        margin-top: 32px;

        a {
          font-size: 24px;
          margin-right: 40px;

          i {
            transition: 0.2s ease-out;
          }
        }

        .facebook:hover {
          color: #3b5998;
        }

        .instagram:hover {
          color: #dd2a7b;
        }

        .twitter:hover {
          color: #00acee;
        }

        .line:hover {
          color: #0fcc00;
        }

        .youtube:hover {
          color: #ff1d25;
        }
      }
    }
  }
}

// Vue Transition
.fade-enter-active,
.fade-leave-active {
  transition: 0.4s ease-out;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

// Animation
.animate {
  animation: showLinks 0.5s ease-out forwards;
}

@keyframes showLinks {
  0% {
    transform: translateY(24px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>