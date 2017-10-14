<template lang="pug">
  article.slide#slide
    .slide-show
      .slide-item(v-for="slide in slides")
        .slide-img
        .slide-text.row
          .col-md-6.justify-content-center
            h2.slide-title {{ slide.title }}
            small {{ slide.text }}
            .row.justify-content-center.button-container
              button.btn.call-to-action(href='#') {{slide.buttonText}}
          .col-md-6
    ul.slide-indicator
      li.indicator-item(v-for="indicator in indicators")
        .line(:class="indicator", rol='low-indicator')
</template>

<style lang="sass">
  @import '../assets/sass/_vars.sass'
  @import '../assets/sass/_slide.sass'
</style>

<script>
  import StrokeLine from '@/components/StrokeLine';

  const slides = [
    {
      title: 'Island Communication Services',
      text: 'Nuestra meta es brindar internet a un mejor costo',
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
    mounted() {
      const img = './assets/img/cropped-home.png';
      $('.slide').css('background-image', `url(${img})`);
    },
    data() {
      return {
        slides,
        indicators: ['indicator-one', 'indicator-two', 'indicator-three']
      };
    }
  };

</script>
