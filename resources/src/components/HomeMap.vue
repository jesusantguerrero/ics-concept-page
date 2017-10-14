<template lang="pug">
  .contact-wrapper
    .map-wrapper#map-wrapper
      #contancts(v-if="sections.contact")
      #map(v-if="sections.map")
      #email-form(v-if="sections.email")
      #report-averia-form(v-if="sections.averia")
    .contact-options.row
      .contact-option.col-3.col-md-3(v-for="option in options",:data-id="option.id", @click="changeContactView(option.id)")
        img(:src="option.src")
        p.control-title {{ option.text}}
</template>

<script>
  import mapHelper from '@/assets/js/mapHelper';

  const options = [
    {
      id: 'contacts',
      src: './../assets/img/',
      text: 'Contactos'
    }, {
      id: 'map',
      src: './../assets/img/',
      text: 'Mapa'
    }, {
      id: 'email',
      src: './../assets/img/',
      text: 'Email'
    }, {
      id: 'ticket',
      src: './../assets/img/',
      text: 'Averia'
    }
  ];

  export default {
    data() {
      return {
        options,
        sections: {
          contacts: true,
          map: false,
          email: false,
          ticket: false
        }
      };
    },
    mounted() {

    },
    methods: {
      initMap() {
        mapHelper.init();
      },

      changeContactView(sectionName) {
        const self = this;
        const sections = Object.keys(this.sections);
        sections.forEach((section) => {
          self.sections[section] = (section === sectionName);
        });
        this.checkMap();
      },

      checkMap() {
        setTimeout(() => {
          if (this.sections.map) this.initMap();
        }, 200);
      }
    }
  };
</script>

<style lang="sass">
  @import '../assets/sass/_base.sass'
  .map-wrapper
    width: 100%
    height: 500px
    background: #fff
    margin-top: 30px
  #map
    height: 100%
    width: 100%
  .contact-option-row
    min-height: 50px
    color: white
    cursor: pointer
    margin: 0 0 0 0
  .contact-option
    cursor: pointer
    p.control-title
      color: white
    &:hover
      background: transparentize(#fff, .9)
</style>
