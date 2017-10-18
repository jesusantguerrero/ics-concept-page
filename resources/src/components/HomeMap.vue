<template lang="pug">
  .contact-wrapper
    .map-wrapper#map-wrapper
      #map

</template>

<script>
  import mapHelper from '@/assets/js/mapHelper';


  export default {
    data() {
      return {
        sections: {
          contacts: true,
          map: false,
          email: false,
          ticket: false
        },
        imgStyles: {
          width: '200px',
          height: '200px'
        }
      };
    },
    mounted() {
      this.initMap();
    },
    methods: {
      initMap() {
        mapHelper.init();
      }
    }
  };

</script>

<style lang="sass">
  @import '../assets/sass/_base.sass'

  .map-wrapper
    width: 100%
    min-height: 300px
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
    flex-direction: column
    justify-content: center
    align-items: center
    text-align: center
    p.control-title
      color: white
      margin: 1rem 0
    &:hover
      background: transparentize(#fff, .9)

</style>
