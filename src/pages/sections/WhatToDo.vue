<template>
  <div class="what-to-do-section" ref="observe">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 705.24 688.59" class="circle-spash-1">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Sketch">
          <path class="cls-1" d="M361,0C170.8,0,16.65,154.15,16.65,344.3S170.8,688.59,361,688.59,705.24,534.45,705.24,344.3,551.1,0,361,0Zm0,672.32c-181.16,0-328-146.86-328-328s146.87-328,328-328,328,146.86,328,328S542.11,672.32,361,672.32Z"/>
          <circle class="cls-2" cx="502.02" cy="37.26" r="33.1"/>
          <circle class="cls-3" cx="502.02" cy="37.26" r="22.6"/>
          <circle class="cls-2" cx="582.55" cy="597.78" r="33.1"/>
          <circle class="cls-3" cx="582.55" cy="597.78" r="22.02"/>
          <circle class="cls-2" cx="33.1" cy="397.91" r="33.1"/>
          <circle class="cls-3" cx="33.1" cy="397.91" r="21.5"/>
        </g>
      </g>
    </svg>
    
    <div class="container">
      <div class="row-title">
       <h2 class="section-title title-dark">What You Have To Do</h2>
      </div>
      <div class="row-content height-auto justify-between">
        <div class="card" v-for="card in cards" :key="card.id">
          <h3 class="card-title">{{ card.title }}</h3>
          <p class="card-text">{{ card.text | formatText() }}</p>
          <div class="card-footer" :style="'background:' + card.color">
            <a href="#">Lihat lebih</a>
          </div>
        </div>
      </div>
    </div>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 705.24 688.59" class="circle-spash-2">
      <g id="Layer_2" data-name="Layer 2">
        <g id="Sketch">
          <path class="cls-1" d="M361,0C170.8,0,16.65,154.15,16.65,344.3S170.8,688.59,361,688.59,705.24,534.45,705.24,344.3,551.1,0,361,0Zm0,672.32c-181.16,0-328-146.86-328-328s146.87-328,328-328,328,146.86,328,328S542.11,672.32,361,672.32Z"/>
          <circle class="cls-2" cx="502.02" cy="37.26" r="33.1"/>
          <circle class="cls-3" cx="502.02" cy="37.26" r="22.6"/>
          <circle class="cls-2" cx="582.55" cy="597.78" r="33.1"/>
          <circle class="cls-3" cx="582.55" cy="597.78" r="22.02"/>
          <circle class="cls-2" cx="33.1" cy="397.91" r="33.1"/>
          <circle class="cls-3" cx="33.1" cy="397.91" r="21.5"/>
        </g>
      </g>
    </svg>
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
  filters: {
    formatText(text) {
      if ( text.length > 80 ) {
        return text.slice(0, 81) + '...'
      }
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/_variables.scss';

.what-to-do-section {
  height: auto;
  background: $main-light;
  padding: 25px 0 50px;
  position: relative;
  overflow: hidden;
  
  .card {
    width: 300px;
    border-radius: 8px;
    background-color: $main-light;
    box-shadow: 4px 16px 16px rgba(0, 0, 0, 0.16);
    overflow: hidden;

    position: relative;
    z-index: 1;

    transition: .4s ease-out;

    &:hover {
      transform: translateY(-8px);
    }

    .card-title {
      font-family: 'Kendal-Type', sans-serif;
      font-size: 30px;
      padding: 16px 0 0 16px;
    }

    .card-text {
      font-size: 14px;
      line-height: 1.5;
      color: lightslategray !important;
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

.cls-1 {
  fill: #47b39d;
}

.cls-2 {
  fill: #ffc764;
}

.cls-3 {
  fill: #477f7e;
}

.circle-spash-1,
.circle-spash-2 {
  position: absolute;
  z-index: 0;
  width: 100px;
  height: 100px;
  animation: rotation 10s ease-out infinite alternate;
  transition: .4s ease-out;
}

.circle-spash-2 {
  animation: rotation 24s ease-out infinite alternate-reverse;
}

@keyframes rotation {
  0% {
    left: 0;
    top: 15%;
  }
  25% {
    left: 50%;
    top: 70%;
    transform: rotate(360deg);
  }
  33% {
    left: 54%;
    top: 65%;
    transform: rotate(-180deg);
  }
  50% {
    left: 32%;
    top: 30%;
    transform: rotate(360deg) scale(3);
  }
  75% {
    left: 76%;
    top: 55%;
  }
  100% {
    left: 100%;
    top: 0;
  }
}
</style>