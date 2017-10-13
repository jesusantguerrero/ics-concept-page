<template lang="pug">
  #home.content-fluid
    HomeHeader
    Slide
    .content-part#somos
      h2.content-title Nuestra Empresa
      h4.content-subtitle Nuestra Empresa
    .content-part#servcios
      h2.content-title Servicios
      h4.content-subtitle Descubre los Servicios Que tenemos para ti
      HomeServices
    .content-part#comercial
      p.remark-text El precio que ves es el precio que pagas
      p.remark-text tarifas mas bajas... misma calidad
    .content-part#sbeneficios
      h2.content-title Beneficios
    .content-part#cobertura
      h2.content-title Cobertura
      h4.content-subtitle Cobertura
    .content-part.bg-primary#vistanos
      h2.content-title Visitanos
      HomeMap
    .content-part#contactos
      h2.content-title Contactanos
      h4.content-subtitle Contactanos
    HomeFooter
</template>

<script>
  import HomeHeader from '@/components/HomeHeader';
  import Slide from '@/components/Slide';
  import HomeServices from '@/components/HomeServices';
  import HomeMap from '@/components/HomeMap';
  import HomeFooter from '@/components/HomeFooter';

  export default {
    name: 'home',
    components: {
      HomeHeader,
      Slide,
      HomeFooter,
      HomeServices,
      HomeMap
    },
    data() {
      return {
        credentials: {
          nickname: '',
          password: '',
        },
        appName: 'IC Payment 2',
        appStatement: 'El Sistema',
        message: '',
        hasError: false,
        logoSrc: 'assets/logo.png',
      };
    },
    methods: {
      login() {
        if (this.isEmpty()) {
          this.message = this.credentials;
        } else {
          this.hasError = true;
          this.message = 'LLene todos los campos por favor';
        }
      },
      isEmpty() {
        const data = this.credentials;
        if (!data.nickname) return false;
        if (!data.password) return false;
        return true;
      },
    },
  };
</script>

<style lang="sass">
  @import  '../../assets/sass/_base'

  #home
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #2c3e50
    heigth: 100vh
    background: #fdfdfd

  .content-title,
  .content-subtitle
    text-align: center
    margin-top: 20px
    margin-bottom: 5px
    color: $contrast-color
  .content-subtitle
    color: #2c3e50
    margin-bottom: 15px
    margn-top: 5px
  .content-part
    margin-top: 20px
    padding: 20px
    text-align: center
  .bg-primary
    background: $primary-color
    min-height: 400px
    .content-title,
    .content-subtitle
      color: white
  #comercial
    background: $contrast-color
    display: flex
    flex-direction: column
    align-content: center
    color: white
    height: 400px
    .content-title,
    .content-subtitle
      color: white
  .remark-text
    font-size: 35px
  @media (max-width: 768px)
    .content-part
      padding:
        left: 5px
        right: 5px
    .remark-text
      font-size: 15px
</style>
