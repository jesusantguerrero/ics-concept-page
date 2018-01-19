<template lang="pug">
  footer.site-footer.media-row
    .bigfooter
      article.foot-menu-container.col-md-4
        h4.content-subtitle Empresa
        .page-info
          a.foot-brand
            img(src="./../assets/img/logo_white.svg").responsive-img
          .brand-description
            p {{ appname }}
            p S.R.L
      article.foot-menu-container.col-md-5#contacto
        h4.content-subtitle Contacto
        p <i class="material-icons"> place</i> C/ Nombre de calle, #0, La Romana, RD
        p <i class="material-icons"> phone</i> 829 000 000
        p <i class="material-icons"> mail</i> me@example.com
      article.foot-menu-container.col-md-3
        h4.content-subtitle Redes
        .network
          a(href="#").network-ic: span.icon.icon-facebook
          a(href="#").network-ic: span.icon.icon-twitter
          a(href="#").network-ic: span.icon.icon-play


    p.copyright-info {{ appname }} - &copy; {{ copyRightsYears() }}  All right reserved
      | | Code and Design with  <span class="love"> &#x2764;</span>  by <span class="the-company"><a target="_blank" href="https://jesusantguerrero.com">Insane Code (Jesus Guerrero)</a></span>
</template>

<script>
export default {
  name: 'home-footer',
  data() {
    return {
      appname: 'Island Communication Services'
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
  @import '../assets/sass/_photon_icons'
  @import '../assets/sass/_base'
  @import '../assets/sass/_footer'
  .responsive-img
    width: 80px
    height: 70px
    margin-right: 10px

  .material-icons
    vertical-align: middle

  @media (max-width: 768px)
    .responsive-img
      width: 100px
      height: 90px
      margin-right: 5px

    .page-info
      display: flex
      justify-content: center
      width: 100%

</style>
