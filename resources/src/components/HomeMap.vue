<template lang="pug">
  .map-wrapper#map-wrapper
    #map
</template>

<script>
  import mapHelper from '@/assets/js/mapHelper';

  export default {
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

<style lang="sass" scoped>
  @import '../assets/sass/_base.sass'
  .map-wrapper
    width: 100%
    height: 500px
    background: #fff
    margin-top: 30px
  #map
    height: 100%
    width: 100%
</style>
