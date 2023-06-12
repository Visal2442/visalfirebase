<template>
  <h1>About</h1>
  <button type="button" @click="showRoute">Show Route</button>
</template>

<script>
import { useRoute } from 'vue-router';

export default {
  setup(){
      const route = useRoute();

      const showRoute =()=>{
        console.log(route.name);
      }

      return {
        showRoute,
      }
    }
}
</script>

<style>

</style>