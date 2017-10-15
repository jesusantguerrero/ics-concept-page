<template lang="pug">
  form.col-md-10.align-center
    .form-header
      h1 Igresa a la App
      p {{ appStatement}}
    .form-group(:class="{error: hasError}")
      label Tipo de Cuenta
      select(class="form-control", required="true")
        option(:val="option.id", v-for="option in options") {{option.text}}
    .form-group(:class="{error: hasError}")
      label Usuario
      input(type="name", placeholder='usuario', v-model="credentials.nickname", class="form-control", required="true")
    .form-group(:class="{error: hasError}")
      label Contraseña
      input(type="password", placeholder='usuario', v-model="credentials.password", class="form-control", required="true")
    p(v-if="message" :class="{'text-error': hasError}") {{ message }}
    .form-group
      input(type="submit", class="btn btn-primary btn-block", value="INGRESAR", @click.prevent="login")
</template>

<script>
  export default {
    name: 'login',
    data() {
      return {
        credentials: {
          nickname: '',
          password: '',
        },
        options: [{
          id: 'tecnico',
          text: 'Tecnico'
        }, {
          id: 'cliente',
          text: 'Cliente'
        }],
        appName: 'IC Payment 2',
        appStatement: 'El Sistema',
        message: '',
        hasError: false,
        logoSrc: 'assets/logo.png',
      };
    },
    methods: {
      login() {
        if (this.isEmpty()) {
          this.message = this.credentials;
        } else {
          this.hasError = true;
          this.message = 'LLene todos los campos por favor';
        }
      },
      isEmpty() {
        const data = this.credentials;
        if (!data.nickname) return false;
        if (!data.password) return false;
        return true;
      },
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
    heigth: 100vh

  .form-header
    text-align: center
    margin-bottom: 15px
  @media (max-width: 768)
    heigth: fix-content
</style>
