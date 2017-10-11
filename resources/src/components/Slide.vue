<template lang="pug">
  article.slide
    .slide-show
      .slide-item(v-for="slide in slides")
        .slide-img
        .slide-text.row
          .col-md-6.justify-content-center
            h2.slide-title {{ slide.title }}
            small {{ slide.text }}
            button.btn.call-to-action(href='#') {{slide.buttonText}}
          .col-md-6
    ul.slide-indicator
      li.indicator-item(v-for="indicator in indicators")
        .line(:class="indicator", rol='low-indicator')
</template>

<style lang="sass">
  @import '../assets/sass/_base.sass'
  @import '../assets/sass/_slide.sass'
</style>

<script>
  import StrokeLine from '@/components/StrokeLine';

  const slides = [
    {
      title: 'Island Communication Services',
      text: 'Coleccion de marcadores para aprender tecnologias web',
      buttonText: 'La Empresa'
    }, {
      title: 'Servicios',
      text: 'Has escuchado hablar de Electron?',
      buttonText: 'Ver Servcios'
    }, {
      title: 'Cobertura',
      text: 'Increibles librerias(que quizá conozcas o no) te pueden ayudar',
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
    }
  };

</script>
