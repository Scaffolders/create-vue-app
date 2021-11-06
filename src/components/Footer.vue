<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: "Footer",
    data() {
      return {
        message: "Created with 💚 by:"
      };
    },
  });

</script>

<template>
    <footer>
        <p>{{ message }}<a href="https://github.com/TheLe0">TheLe0</a></p>
    </footer>
</template>

<style lang="scss">
  @import '../style/Footer';
</style>