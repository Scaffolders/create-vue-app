<script lang="ts">
  import { defineComponent } from 'vue';
  import Body from './components/Body.vue';
  import Footer from './components/Footer.vue';

  export default defineComponent({
    name: "App",
    components: { Body, Footer },
  });
</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Body/>
  <Footer />
</template>

<style lang="scss">
  @import './style/App';
</style>
