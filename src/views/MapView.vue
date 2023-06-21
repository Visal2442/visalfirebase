<template>
  <h1>Hello Map</h1>
  <GoogleMap api-key="AIzaSyAU_BotDdo0o7O6a1dOMv6O_7UxFfgOuzs" style="width: 100%; height: 500px" :center="center" :zoom="15">
    <Marker :options="{ position: center }" />
  </GoogleMap>
</template>

<script setup>
import { ref } from 'vue';
import { GoogleMap, Marker } from "vue3-google-map";

const center =ref({
    lat: 40.689247, 
    lng: -74.044502
})

</script>

<style>

</style>