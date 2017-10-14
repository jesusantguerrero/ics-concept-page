<template lang="pug">
  .contact-wrapper
    .map-wrapper#map-wrapper
      transition(name="slide-fade")
        #contancts(v-if="sections.contact")
      transition(name="slide-fade")
        #map(v-if="sections.map")
      transition(name="slide-fade")
        #email-form(v-if="sections.email")
      transition(name="slide-fade")
        #report-averia-form(v-if="sections.averia")
    .contact-options.row.bg-primary
      .contact-option.col-3.col-md-3(v-for="option in options",:data-id="option.id", @click="changeContactView(option.id)")
        p.control-title: i.material-icons {{ option.icon}}
        p.control-title {{ option.text}}
</template>

<script>
  import mapHelper from '@/assets/js/mapHelper';

  const options = [
    {
      id: 'contacts',
      src: './../assets/img/',
      text: 'Contactos',
      icon: 'cellphone'
    }, {
      id: 'map',
      src: './../assets/img/',
      text: 'Mapa',
      icon: 'map'
    }, {
      id: 'email',
      src: './../assets/img/',
      text: 'Email',
      icon: 'mail_outline',
    }, {
      id: 'ticket',
      src: './../assets/img/',
      text: 'Averia',
      icon: 'fix'
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
    display: flex
    justify-content: center
    align-items: center
    p.control-title
      color: white
    &:hover
      background: transparentize(#fff, .9)
</style>
