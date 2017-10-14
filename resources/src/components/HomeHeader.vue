<template lang="pug">
  .header-container.hide-xs
    .top-header.row
    header.row
      .brand-name
        img(src="./../assets/img/logo.svg").responsive-img
        h1: a(href="#", class="text") IC Services
      .nav-container
        nav.main-nav
          li: a(href="#inicio").nav-button Inicio
          li: a(href="#somos").nav-button Somos
          li: a(href="#servcios").nav-button Servicios
          li: a(href="#cobertura").nav-button Cobertura
          li: a(href="#App").nav-button App
          li: a(href="#contacto").nav-button Contacto
      .hamburger-menu: i.material-icons menu
</template>

<style lang="sass">
  @import  '../assets/sass/_vars'
  .header-container
    position: fixed
    width: 100%
    z-index: 100
  .top-header
    height: 20px
    background: whitesmoke
    padding: 0 50px
    text-align: right
    border-bottom: 1px sold #ccc
    display: none
  .responsive-img
    height: 110%
    margin-right: 15px
  header.row
    width: 100%
    margin: 0
    padding: 15px 50px
    background: #fff
    height: 90px
    box-shadow: 1px 2px 2px transparentize(#000, .8)
    display: flex
    align-content: center
    position: relative
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

  .nav-container,
  .hamburger-menu
    display: flex
    justify-self: flex-end
    overflow: hidden
    align-self: flex-end
    margin-left: auto
    align-items: center

  .hamburger-menu
    display: none

  .main-nav
    display: table
    color: $primary-color
    list-style: none
    height: 100%
    li
      display: table-cell
      padding: 0 8px
  .nav-button
    color: lighten($dark-color, 10%)
    display: block
    font:
      size: 22px
      weight: bolder
    text-decoration: none
    transition: all ease .5s
    &:hover
      text-decoration: none
      color: $contrast-color

  @media (max-width: 768px)
    .top-header
      display: none
    header.row
      justify-content: left
      height: 70px
      padding:
        left: 7%
        right: 7%
    .nav-container
      display: none
    .hamburger-menu
      display: block
      font:
        size: 20px
        weight: 900
    .brand-name
      a
        font-size: 20px


</style>


<script>
  export default {
    name: 'HomeHeader'
  };
</script>
