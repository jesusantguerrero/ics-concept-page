<template lang="pug">
  .header-container
    .top-header.row
    header.row
      .brand-name
        img(src="./../assets/img/logo.png").responsive-img
        h1: a(href="#", class="text") ICS Services
      .nav-container
        nav.main-nav
          li: a(href="#inicio").nav-button Inicio
          li: a(href="#somos").nav-button Somos
          li: a(href="#servcios").nav-button Servicios
          li: a(href="#cobertura").nav-button Cobertura
          li: a(href="#App").nav-button App
          li: a(href="#contacto").nav-button Contacto
</template>

<style lang="sass"scoped>
  @import  '../assets/sass/_vars'
  .header-container
    position: fixed
    width: 100%
    z-index: 100
  .top-header
    height: 20px
    background: whitesmoke
  header.row
    width: 100%
    margin: 0
    padding: 15px 50px
    background: #fff
    height: 70px
    box-shadow: 1px 2px 2px transparentize(#000, .8)
    display: flex
    align-content: center
    position: relative
    .responsive-img
      height: 100%
      margin-right: 20px
    &:after
      content: ''
      height: 7px
      background: $primary-color
      width: 10%
      position: absolute
      bottom: -7px
      right: 0
      box-shadow: 1px 2px 2px transparentze(#000, .8)

    .brand-name
      display: flex
      align-items: center
      height: 100%
      a
        color: $primary-color
        text-decoration: none
        transition: all ease .5s
        &:hover
          color: $light-color

  .nav-container
    display: flex
    justify-self: flex-end
    overflow: hidden
    align-self: flex-end
    margin-left: auto
    align-items: center

  .main-nav
    display: table
    color: $primary-color
    list-style: none
    height: 100%
    li
      display: table-cell
      padding: 0 8px
  .nav-button
    color: $dark-color
    display: block
    font-size: 20px
    text-decoration: none
    &:hover
      text-decoration: none
      color: $contrast-color

  .img-responsive
    width: 100%
    border-radius: 2px

  @media (max-width: 768px)
    header
      justify-content: center
      text-align: center

</style>


<script>
  export default {
    name: 'HomeHeader'
  };
</script>
