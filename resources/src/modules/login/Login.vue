<template lang="pug">
  #login.row
    .col-md-8
      img(src="../../assets/logo.png")
      p Hello World
    .col-md-4
      form
        .form-group
          label Tipo de Cuenta
          select(type="name", placeholder="tipo", v-model="credentials.type", class="form-control")
            option(v-for="{id, text} in options", value="id") {{ text }}
        .form-group
          label Usuario
          input(type="name", placeholder='usuario', v-model="credentials.nickname", class="form-control")
        .form-group
          label Contraseña
          input(type="password", placeholder='usuario', v-model="credentials.password", class="form-control")
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        credentials: {
          type: 'empresa',
          nickname: '',
          password: '',
        },
        options: [
          { id: 'empresa', text: 'empresa' },
          { id: 'cliente', text: 'cliente' },
        ],
      };
    },
  };
</script>

<style lang="sass">
  #login
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    color: #2c3e50
    margin-top: 60px

</style>
