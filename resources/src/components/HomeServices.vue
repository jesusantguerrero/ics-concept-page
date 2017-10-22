<template lang="pug">
  article.services.row
      .service-contaner.col-md-4.justify-content-center(v-for="service in services")
        .service-card
          .card-custom-header
            p.great-text {{ service.megas}}
              small.caption MB
          .card-details
            .detail-content
          .card-content
            h4.top-plan {{ service.plan }}
            p.price RD$ {{ service.price }} / mes
            .button-container
              button.btn.call Seleccionar
</template>

<style lang="sass">
  @import '../assets/sass/_base.sass'

  .services
    margin: 50px 0 20px 0
    padding: 20px

  .service-contaner
  .service-card
    display: flex
    flex-direction: column
    align-items: center
    width: 100%
    max-width: 300px
    background: white
    border: 1px solid #ccc
    box-shadow: 2px 2px 4px transparentize(#272727, .8)
    height: 400px
    border-radius: 2px
    margin: auto
    margin-bottom: 15px
    cursor: pointer
    transition: all ease .4s
    &:hover
      transform: scale(1.01)

    .card-custom-header
      height: 50%
      width: 100%
      text-align: center
      background: dodgerblue
      color: white
      border-radius: 2px 2px 0 0
    .great-text
      color: white
      margin: 0 0 0 0
      font:
        size: 70px
    .caption
      margin: 0 0 0 0
    .card-detalis
    .card-content
      padding: 30px
      width: 100%
      text-align: center
      border-radius: 0 0 2px 2px
    .call
      border-color: #fff
      cursor: pointer
      background: transparentize(#000, .9)
      color: #fff
      transition: all ease .5s
      &:hover
        background: #fff
        color: dodgerblue
  .top-plan
    color: $dark-color
  .button-container
    display: flex
    justify-content: center
    margin: 0 0 0 0
  .price
    color: $contrast-color
    font:
      size: 18px
      weight: bolder
  @media (max-width: 768px)
    .service-card
      height: 360px
</style>

<script>

  const services = [
    {
      megas: '2',
      plan: 'Plan Bronce',
      price: '800'
    }, {
      megas: '3',
      plan: 'Plan Plata',
      price: '1,400'
    }, {
      megas: '5',
      plan: 'Plan Oro',
      price: '2,700'
    }
  ];

  export default {
    data() {
      return {
        services,
        indicators: ['indicator-one', 'indicator-two', 'indicator-three']
      };
    }
  };

</script>
