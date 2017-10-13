<template lang="pug">
  .stroke-line(:class="side")
    .stroke-line_inner
</template>

<style lang="sass" scoped>
  @import '../assets/sass/_vars.sass'

  .stroke-line
    display: flex
    height: 7px
    background: transparent

    .right
      justify-content: flex-end
    .center
      justify-content: center
  .stroke-line_inner
    height: 100%
    width: 10%
    background: $primary-color
</style>

<script>
export default {
  props: {

  },
  data() {
    return {
      side: 'right'
    };
  }
};
</script>

