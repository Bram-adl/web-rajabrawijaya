<template>
  <div id="faq">
    <div>
      <svg xmlns="http://www.w3.org/2000/svg">
        <symbol viewBox="0 0 20 20" id="expand-more">
          <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </symbol>
        <symbol viewBox="0 0 20 20" id="close" style="opacity: 0%">
          <path
            d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </symbol>
      </svg>
    </div>

    <header>
      <h2 class="faq-title">Frequently Asked Question</h2>
      <p class="description">FAQ adalah kumpulan pertanyaan yang sering ditanyakan.</p>
    </header>

    <VueFaqAccordion :items="myItems" />
  </div>
</template>

<script>
  import VueFaqAccordion from 'vue-faq-accordion'

  export default {
    name: 'faq',
    components: {
      VueFaqAccordion
    },
    data: function () {
      return {
        myItems: [{
            title: 'Apakah ada grup resmi untuk Maba?',
            value: 'RAJA Brawijaya tidak menyediakan grup resmi, tetapi kamu bisa menanyakan ke bem fakultas untuk bergabung di grup yang disediakan oleh fakultas',
            category: 'Umum'
          },
          {
            title: 'Kapan PKKMB Akan dilaksanakan?',
            value: '19 - 20 September 2020',
            category: 'PKKMB'
          },
          {
            title: 'Bagaimana pelaksanaan PKKMB 2020?',
            value: 'Acara akan dilaksanakan secara online dan peserta mengikutinya melalui daerah masing - masing',
            category: 'PKKMB'
          }
        ]
      }
    },
    props: {

      /**
       * Array of items
       * Object style {questionProperty: string, answerProperty: string, tabName: string}
       * You can change object keys names using other props (questionProperty, answerProperty, tabName)
       */
      items: {
        type: Array,
        required: true
      },

      /**
       * Key name of object in items array for specifying title of question
       */
      questionProperty: {
        type: String,
        default: 'title'
      },

      /**
       * Key name of object in items array for specifying content text of open question
       */
      answerProperty: {
        type: String,
        default: 'value'
      },

      /**
       * Key name of object in items array for specifying navigation tab name
       */
      tabName: {
        type: String,
        default: 'category'
      },
    }
  }
</script>

<style scoped>
  #faq {
    min-height: 100vh;
    background-color: #381238;
    background-attachment: fixed;
  }

  .faq{
      --font-color: #ffffff !important;
      --active-color: #EFB64F !important;
  }

  @media screen and (min-width: 900px) {
    .faq{
      width:60% !important;
      margin: auto;
      --font-color: #ffffff !important;
    }
  }

  header {
    min-height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: space-between; */
  }

  .faq-title {
    color: white;
    text-shadow: 1px 1px 3px #000;
    font-size: 50px;
  }

  .description {
    color: white;
    text-shadow: 1px 1px 1px #000;
    font-size: 20px;
  }

  .faq-wrapper[data-v-5d9392b3] {
    margin: 0 auto !important;
  }


  @media screen and (max-width: 600px) {
    .faq-title {
      font-size: 30px;
    }

    .description {
      font-size: 12px;
      margin: 5px;
    }
  }
</style>