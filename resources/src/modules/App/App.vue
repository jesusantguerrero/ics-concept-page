<template>
  <div id="app">
    <h1>This is the {{ title }}</h1>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        title: 'APP',
      };
    },

    mounted() {
      this.pageTitle = $('head title');
      this.setTitle();
    },

    methods: {
      setTitle() {
        this.pageTitle.text(this.title);
      },
    },

  };
</script>

<style lang="sass" scoped>
  #app
    h1
      color: #00ff00
</style>
