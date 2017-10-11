<template lang="pug">
  footer.site-footer.media-row
    .bigfooter
      article.page-info.col-md-7
        a.foot-brand ICS
        .brand-description
          p Island Communnication Services
          p S.R.L
      article.foot-menu-container.col-md-5
        .network
          a(href="#").network-ic: span.icon.icon-facebook
          a(href="#").network-ic: span.icon.icon-twitter
          a(href="#").network-ic: span.icon.icon-play
          a(href="#").network-ic: span.icon.icon-facebook
    p.copyright-info {{ appname }} - &copy; {{ copyRightsYears() }}  All right reserved
      | | Code and Design with  <span class="love"> &#x2764;</span>  by <span class="the-company"><a target="_blank" href="https://jesusantguerrero.com">Insane Code</a></span>
</template>

<script>
export default {
  name: 'home-footer',
  data() {
    return {
      appname: 'Island Communnication Services'
    };
  },
  methods: {
    copyRightsYears() {
      return 2017;
    }
  }

};
</script>

<style lang="sass" scoped>
  @import '../assets/sass/_base'
  @import '../assets/sass/_footer'

</style>
