<template lang='pug'>
  #message-box
    form.message-form(v-if="active")
      input.form-control.name(placeholder="Nombre")
      input.form-control.email(placeholder="email")
      input.form-control.cellphone(placeholder="telefono")
      textarea.form-control.message(placeholder="escribe tu mensaje o duda", rows="3")
      button.btn.call-to-action.special(type="submit") Enviar
    .message-caller(:class="{active:active}", @click="change")

</template>

<script>
  import img from '../assets/img/ic_mail.svg';

  export default {
    name: 'message-box',
    data() {
      return {
        body: {
          name: '',
          email: '',
          phone: '',
          message: ''
        },
        active: false
      };
    },
    computed: {
      img() {
        return img;
      }
    },
    methods: {
      change() {
        this.active = !this.active;
      }
    }
  };
</script>


<style lang="sass" scoped>
  @import  '../assets/sass/_vars'
  #message-box
    position: fixed
    width: 300px
    right: 20px
    bottom: 30px
    display: flex
    flex-direction: column
    align-items: flex-end
    z-index: 1000
  form
    margin-bottom: 7px
    text-align: right
    position: relative
    width: 100%
  input,
  textarea,
  button
    margin: 5px 0
    width: 100%
    padding: 0 5%
    border: 1px solid #ccc
    box-shadow: 2px 4px 3px rgba(0,0,0,.1)
  input,
  button
    height: 38px
  button
    background: $contrast-color
    color: white
    cursor: pointer

  .message-caller
    height: 60px
    width: 60px
    background: $contrast-color
    border-radius: 50%
    box-shadow: 2px 4px 3px  rgba(0,0,0,.2)
    position: relative
    cursor: pointer
    border: 1px solid white
    &:after
      content: ''
      background: $contrast-color
      height: 0
      width: 0
      position: absolute
      border-radius: 4px
      transition: all ease .3s
    &:before
      content: url('../assets/img/ic_mail.svg')
      background: $contrast-color
      height: 100%
      width: 100%
      +makeFlex(100%,row, center, center)
      position: absolute
      border-radius: 4px
      transition: all ease .3s
      border-radius: 50%
      z-index: 100
    &.active:after
      height: 30px
      width: 30px
      border: 1px solid white

  @media (max-width: 768px)
    #message-box
      width: 100%
      right: 0
      padding: 0 7%

</style>


