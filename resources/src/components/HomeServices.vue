<template lang="pug">
  article.services.row
      .service-contaner.col-md-4.justify-content-center(v-for="service in services")
        .service-card
          .card-custom-header
            h2.title {{ service.plan }}
            p.great-text {{ service.megas}}
              span.caption MB
          .card-content
            p.price RD$ {{ service.price }} / mes
            .button-container
              button.btn.call-to-action.special Seleccionar
</template>

<style lang="sass">
  @import '../assets/sass/_base.sass'

  .services
    margin: 50px 0 20px 0
    padding: 20px

  .service-container
  .service-card
    display: flex
    flex-direction: column
    align-items: center
    width: 100%
    max-width: 300px
    background: white
    border: 1px solid #aaa
    box-shadow: 3px 3px 4px transparentize(#000, .8)
    height: 400px
    border-radius: 2px
    margin: auto
    margin-bottom: 15px
    cursor: pointer
    overflow: hidden
    border-radius: 10px
    transition: all ease .4s
    &:hover
      transform: scale(1.01)

    &:nth-child(2)
      transform: scale(1.02)
      border: 1px solid $contrast-color

    .card-custom-header
      height: 50%
      width: 100%
      text-align: center
      background: linear-gradient(to top, #48c6ef 0%, #6f86d6 100%);
      border-radius: 2px 2px 0 0
      display: block
      padding-top: 10px
      .top-plan
        color: white
        font-size: 40px
    .title
      color: white
    .great-text
      color: white
      font:
        size: 90px
        weight: bolder
    .caption
      margin: 0 0 0 0
      font-size: 16px
    .card-content
      height: 50%
      padding: 30px
      width: 100%
      text-align: center
      border-radius: 0 0 2px 2px
    .call
      border-color: #fff
      cursor: pointer
      color: #fff
      transition: all ease .5s
      &:hover
        background: #fff
        color: $primary-color
  .button-container
    display: flex
    justify-content: center
    margin: 10px 0
  .price
    color: $primary-color
    margin: 0 0 0 0
    font:
      size: 22px

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
