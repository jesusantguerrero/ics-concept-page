<template lang="pug">
  article.slide#slide
    .slide-show
      .slide-item(v-for="slide in slides")
        .slide-text.row
          .col-md-6.offset-md-3.justify-content-center
            h2.slide-title {{ slide.title }}
            p {{ slide.text }}
            .row.justify-content-center.button-container

    ul.slide-indicator
      li.indicator-item(v-for="indicator in indicators")
        .line(:class="indicator", rol='low-indicator')
</template>

<style lang="sass">
  @import '../assets/sass/_vars.sass'
  @import '../assets/sass/_slide.sass'
  .slide
    background-image: url('./../assets/img/ipad-tablet.jpg')
</style>

<script>
  import StrokeLine from '@/components/StrokeLine';
  import ipadTablet from '@/assets/img/ipad-tablet.jpg';

  const slides = [
    {
      title: 'Island Communication Services',
      text: 'Nuestra meta es brindar internet de calidad a un mejor precio',
      buttonText: 'La Empresa'
    }, {
      title: 'Servicios',
      text: 'Tenemos varios planes economicos y potentes',
      buttonText: 'Ver Servcios'
    }, {
      title: 'Cobertura',
      text: 'Contamos con cobertura en La Romana y Villa Hermosa',
      buttonText: 'Ver Cobertura'
    }
  ];

  export default {
    name: 'slide',
    components: {
      StrokeLine
    },
    data() {
      return {
        slides,
        indicators: ['indicator-one', 'indicator-two', 'indicator-three']
      };
    },
    computed: {
      image() {
        return ipadTablet;
      }
    }
  };

</script>
