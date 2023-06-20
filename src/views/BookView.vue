<template>
  <h1>Books</h1>
  <button type="button" @click="showRoute">Show Route</button>
</template>

<script setup>

import { useRoute } from 'vue-router';
const route = useRoute();

const showRoute =()=>{
  console.log(route.name);
}
</script>

<style>

</style>