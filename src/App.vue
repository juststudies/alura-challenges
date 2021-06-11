<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style scoped>
@import url('./assets/css/__reset.css');
@import url('./assets/css/__global.css');
@import url('./assets/css/dracula.css');

#app {
  width: 100%;
  height: 100%;
  font-family: var(--font-family);
  padding: 2rem 2rem;
}

</style>
