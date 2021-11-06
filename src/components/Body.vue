<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: "Body",
    data() {
      return {
        message: "Create Vue App"
      };
    },
  });

</script>

<template>
  <h1>{{ message }}</h1>
</template>

<style lang="scss">
  @import '../style/Body';
</style>