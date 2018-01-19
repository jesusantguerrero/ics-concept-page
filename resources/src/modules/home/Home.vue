<template lang="pug">
  #home.content-fluid
    HomeHeader
    Slide
    .content-part.hide.bg-white#somos
      h2.content-title Nuestra Empresa
      h5.content-subtitle Lema o eslogan de la empresa aqui
      p.content-text {{ company.description }}
      .row.sub-row#beneficios
        .col-md-4
          .md-image-container.animated-pulse: i.material-icons attach_money
          h3.content-subtitle Económico
          p {{ getLorem(100)}}
        .col-md-4
          .md-image-container.animated-pulse: i.material-icons flash_on
          h3.content-subtitle Rápido
          p {{ getLorem(100) }}
        .col-md-4
          .md-image-container.animated-pulse: i.material-icons dns
          h3.content-subtitle Calidad
          p {{ getLorem(100) }}

    .content-part.bg-gray#servicios
      h2.content-title Escoge tu servicio
      h5.content-subtitle Descubre los Servicios Que tenemos para ti
      HomeServices

    #comercial
      .content-part.cover.bg-contrast
        h2.content-title Se parte de nosotros
        p.remark-text Selecciona el servicio que prefieras y contactanos.

    .content-part#noticias
      h2.content-title Noticias
      h5.content-subtitle Informaciones para clientes
      .row.sub-row
        .col-md-6
          h3.content-subtitle Noticia 1
          p {{ getLorem(100)}}
        .col-md-6
          h3.content-subtitle Noticia 2
          p {{ getLorem(100) }}

    .content-part.bg-gray#contactanos
      h2.content-title Visitanos
      HomeMap

    #horarios
      .content-part.cover.custom-bg-primary
        h2.content-title Horarios
        p.remark-text Lunes a Viernes: 9:00 am - 5:00 pm.
        p.remark-text Sabados: 9:00 am - 12:00 pm.
        p.remark-text Domingo: No laboramos

    MessageBox
    HomeFooter
</template>

<script>
  import HomeHeader from '@/components/HomeHeader';
  import Slide from '@/components/Slide';
  import StrokeLine from '@/components/StrokeLine';
  import HomeServices from '@/components/HomeServices';
  import HomeMap from '@/components/HomeMap';
  import MessageBox from '@/components/MessageBox';
  import HomeFooter from '@/components/HomeFooter';
  import cover from '@/assets/img/office.jpeg';

  const company = {
    description: `
    dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.
    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
    Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.
    Donec pede justo.`
  };

  export default {

    name: 'home',
    components: {
      HomeHeader,
      Slide,
      HomeFooter,
      StrokeLine,
      HomeServices,
      HomeMap,
      MessageBox
    },

    data() {
      return {
        credentials: {
          nickname: '',
          password: '',
        },
        company,
        appName: 'ICS Services',
        appStatement: 'El Sistema',
        message: '',
        hasError: false,
        logoSrc: 'assets/logo.png',
      };
    },
    computed: {
      image() {
        return cover;
      }
    },
    methods: {
      getLorem(number) {
        return this.company.description.slice(0, number);
      }
    }
  };

</script>


<style lang="sass">
  @import  '../../assets/sass/_base'

  #home
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: lighten($dark-color, 15%)
    heigth: 100vh
    background: #fff

  .content-title,
  .content-subtitle
    text-align: center
    margin-top: 20px
    margin-bottom: 10px
    color: $primary-color

  .content-subtitle
    color: $contrast-color
    margin-bottom: 25px
    margin-top: 5px

  .content-part
    padding: 20px
    paddng-bottom: 50px
    text-align: center

  .content-text
    padding: 20px 150px
    font-size: 18px
    color: lighten($dark-color, 25%)

  .bg-white
    background: white

  .bg-gray
    background:linear-gradient(to top,  #fafafa 0%, #ffffff 100%)
    border-top: 1px solid #ddd

  .cover
    height: 100%
    width: 100%
    &.bg-contrast
      background: transparentize($contrast-color,.3)
    &.custom-bg-primary
      background: transparentize($primary-color,.2)

  #comercial,
  #horarios
    background: $contrast-color
    background-image: url('../../assets/img/office.jpeg')
    background-position: center
    display: flex
    flex-direction: column
    align-content: center
    align-items: center
    color: white
    height: 325px
    .content-title,
    .content-subtitle
      color: white


  #contactanos
    padding-bottom: 0
    padding:
      left: 0
      right: 0

  .sub-row
    margin: 50px 0
    padding: 50px

  .remark-text
    font-size: 25px

  .md-image
    width: 75px
    height: 75px
  .md-image-container
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    margin-bottom: 20px
    .material-icons
      font-size: 70px
      color: $contrast-color
      width: fit-content
  @media (max-width: 768px)
    .content-part
      padding:
        left: 5px
        right: 5px

    .remark-text,
    .content-subtitle
      font-size: 18px

    #comercial
      height: 200px
    .content-title
      font-size: 20px
    .content-text
      padding: 20px
      font-size: 14px
    .sub-row
      padding: 7%
</style>
