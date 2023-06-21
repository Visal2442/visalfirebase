<template>
  <v-app>
    <TheHeader></TheHeader>
    <v-main>
      <!-- <v-parallax class="" src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"> -->
      <router-view></router-view>
      <!-- </v-parallax> -->
    </v-main>
  </v-app>
</template>

<script setup>
import TheHeader from '@components/Header.vue'

</script>
