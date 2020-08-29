<template>
  <div class="what-to-do-section" ref="observe">
    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 705.24 688.59" class="circle-spash-1">
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
    </svg> -->
    
    <div class="container">
      <h2 class="section-title title-dark" data-aos="fade-left">Persiapkan Dirimu</h2>

      <carousel 
        :perPage="3" 
        :perPageCustom="[[300, 1], [768, 2], [1024, 3]]"
        :easing="'ease-in-out'" 
        :scrollPerPage="false" 
        :paginationActiveColor="'#5784BA'" 
        :paginationColor="'#999'">
        <slide v-for="(todo, index) in todos" :key="todo.id" :data-aos-delay="'50' * index" data-aos-duration="1000" style="padding: 50px 0 50px;">
          <div class="card-wrapper" :style="'background:' + todo.background">
            <div class="card">
              <h3 class="card-title">{{ todo.title }}</h3>
              <p class="card-content">{{ todo.text }}</p>
              <button class="card-button">{{ todo.button }}</button>
            </div>
          </div>
        </slide>
      </carousel>

    </div>

    <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 705.24 688.59" class="circle-spash-2">
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
    </svg> -->
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  name: 'what-to-do',
  components: {
    Carousel,
    Slide
  },
  data() {
    return {
      todos: [
        {
          id: 0,
          title: 'Twibbon',
          text: 'Jangan lupa untuk posting twibbon RAJA ke instagram kamu dengan foto favoritmu ya!',
          background: 'linear-gradient(192.42deg, #F4CFDF 15.06%, #5784BA 79.96%);',
          button: 'Unduh Twibbon',
        },
        {
          id: 1,
          title: 'Penugasan',
          text: 'Semua keperluan Ospek Online kamu ada di sini. Yuk langsung dicek penugasannya !',
          background: 'linear-gradient(192.42deg, #E5E5E5 20.62%, #B6D8F2 60.03%);',
          button: 'RAJA Apps',
        },
        {
          id: 2,
          title: 'Panduan',
          text: 'Kalau kamu ada pertanyaan atau kebingungan langsung aja dicek panduannya di sini!',
          background: 'linear-gradient(192.42deg, #F7F6CF 15.06%, #5784BA 79.96%);',
          button: 'Unduh Panduan',
        },
      ]
    }
  },
}
</script>

<style lang="scss">
@import '@/assets/scss/main.scss';
.what-to-do-section {
  background: $main-light;
  padding: 50px 0;
  .card-wrapper {
    box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.24);
    border-radius: 16px;
    width: 275px;
    height: 325px;
    margin: auto;
    position: relative;
    .card {
      background: $main-light;
      padding: 20px;
      border-radius: 16px;
      box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.24);
      position: absolute;
      left: 30px;
      bottom: -30px;
      width: 275px;
      &-title {
        font-size: 2rem;
        font-family: 'Kendal-Type', sans-serif;
        color: $main-dark;
      }
      &-content {
        font-size: 1rem;
        margin: 25px 0;
        line-height: 1.5;
        color: lighten($main-dark, $amount: 10%);
      }
      &-button {
        width: 100%;
        height: auto;
        border: 0;
        border-radius: 4px;
        outline: 0;
        background: #5784BA;
        padding: 12px 0;
        margin-top: 50px;
        font-family: inherit;
        font-size: 1rem;
        color: $main-light;
        cursor: pointer;
      }
    }
  }
}
</style>