<template>
  <div class="what-to-do-section" ref="observe">
    <div class="container">
      <h2 class="section-title">What You Have To Do</h2>
      <div class="card-box">
        <div class="card" v-for="card in cards" :key="card.id">
          <h3 class="card-title">{{ card.title }}</h3>
          <p class="card-text">{{ card.text }}</p>
          <div class="card-footer" :style="'background:' + card.color">
            <a href="#">Lihat lebih</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'what-to-do',
  data: () => {
    return {
      cards: [
        {
          id: 0,
          title: 'Twibbon',
          text: 'Jangan lupa untuk posting twibbon RAJA ke instagram kamu dengan foto favoritmu ya!',
          color: 'rgb(60, 60, 177)',
        },
        {
          id: 1,
          title: 'Penugasan',
          text: 'Segala macam keperluan Ospek Online kamu ada di sini. Yuk langsung dicek penugasannya di RAJA Apps!',
          color: 'rgb(60, 177, 138)',
        },
        {
          id: 2,
          title: 'Panduan',
          text: 'Kalau kamu ada pertanyaan atau kebingungan jangan khawatir. Langsung aja dicek panduannya di sini!',
          color: 'rgb(177, 60, 171)',
        },
      ]
    }
  },
  mounted() {
    this.checkScroll()
  },
  methods: {
    checkScroll() {
      
      window.addEventListener('scroll', () => {
        const observed = this.$refs.observe
        const observedTop = observed.getBoundingClientRect().top
        const observedHeight = observed.clientHeight - 100

        if ( observedTop < 100 && observedTop > parseInt(`-${observedHeight}`) ) {
          this.Fire.$emit('changeHamburgerColor')
        } else {
          this.Fire.$emit('resetHamburgerColor')
        }
      })
    }
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.what-to-do-section {
  background: $main-light;

  .card-box {
    display: flex;
    justify-content: space-between;
    padding-bottom: 50px;

    .card {
      width: 300px;
      border-radius: 8px;
      background-color: $main-light;
      box-shadow: 4px 16px 16px rgba(0, 0, 0, 0.16);
      overflow: hidden;

      transition: .4s ease-out;

      &:hover {
        transform: translateY(-8px);
      }

      .card-title {
        font-size: 30px;
        padding: 16px 0 0 16px;
      }

      .card-text {
        font-size: 14px;
        line-height: 1.5;
        color: lighten($main-dark, 25%);
        padding: 16px;
      }

      .card-footer {
        background: rgb(177, 60, 171);
        padding: 16px;
        
        a {
          color: $main-light;
          display: inline-block;
          transition: .4s ease-out;

          &:hover {
            transform: translateX(4px);
          }
        }
      }
    }
  }
}
</style>