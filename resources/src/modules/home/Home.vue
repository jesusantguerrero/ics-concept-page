<template lang="pug">
  #home.content-fluid
    HomeHeader
    Slide
    .content-part.hide.bg-white#somos
      h2.content-title Nuestra Empresa
      h5.content-subtitle Lema o eslogan de la empresa aqui
      p.content-text {{ company.description }}
    .content-part.bg-gray#servicios
      h2.content-title Servicios
      h5.content-subtitle Descubre los Servicios Que tenemos para ti
      HomeServices
    .content-part#comercial
      h2.content-title Se parte de nosotros
      p.remark-text Selecciona el servicio que prefieras y contactanos.
      #vivus-icon.animation
    .content-part#sbeneficios
      h2.content-title Beneficios
    .content-part#comunicados
      h2.content-title Comunicados
      h5.content-subtitle Informaciones para clientes
    .content-part.bg-gray#contactanos
      h2.content-title Visitanos
      HomeMap
    HomeFooter
</template>

<script>
  import HomeHeader from '@/components/HomeHeader';
  import Slide from '@/components/Slide';
  import StrokeLine from '@/components/StrokeLine';
  import HomeServices from '@/components/HomeServices';
  import HomeMap from '@/components/HomeMap';
  import HomeFooter from '@/components/HomeFooter';
  import Vivus from 'vivus';

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
      HomeMap
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
    mounted() {
      const person = this.setVivusIcon('vivus-icon', './assets/img/ic_people_outline_white_24px.svg');
      person.play(1000);
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

      shortLorem(wordNumber) {
        return this.company.description.slice(0, wordNumber);
      },

      setVivusIcon(divId, linkToIcon) {
        return new Vivus(divId, {
          duration: 2000,
          file: linkToIcon,
          type: 'oneByOne',
          onReady(myVivus) {
            myVivus.el.setAttribute('height', '100px');
          }
        });
      }
    },
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
    color: $contrast-color
  .content-subtitle
    color: #2c3e50
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
  .bg-primary
    background: $primary-color
    .content-title,
    .content-subtitle
      color: white
  .bg-white
    background: white
  .bg-gray
    background: #fcfcfc
  #comercial
    background: $contrast-color
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
  .remark-text
    font-size: 25px
  @media (max-width: 768px)
    .content-part
      padding:
        left: 5px
        right: 5px
    .remark-text,
    .content-subtitle
      font-size: 18px
    .content-subtitle
      color: $primary-color
    #comercial
      height: 200px
    .content-text
      padding: 20px
      font-size: 18px
</style>
