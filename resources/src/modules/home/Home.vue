<template lang="pug">
  #home.content-fluid
    HomeHeader
    Slide
    .content-part#somos
      h2.content-title Nuestra Empresa
    .content-part#somos
      h2.content-title Servicios
    .content-part#somos
      h2.content-title Cobertura
    .content-part#somos
      h2.content-title Vistanos
    .content-part#somos
      h2.content-title Contactanos

</template>

<script>
  import HomeHeader from '@/components/HomeHeader';
  import Slide from '@/components/Slide';

  export default {
    name: 'home',
    components: {
      HomeHeader,
      Slide
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

  .content-title
    text-align: center
    margin-bottom: 15px
    color: $contrast-color
  .content-part
    margin-top: 50px
  @media (max-width: 768)
    heigth: fix-content
</style>
