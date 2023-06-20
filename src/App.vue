<template>
    <Header/>
    <router-view/>    <!-- Use RouterView to display contents in route.  -->
    <Footer v-if="route.name !== 'UserDetail'" ></Footer>
</template>

<script setup>
import { ref, computed } from "vue";
import Header from "@components/Header.vue";
import Footer from "@components/Footer.vue";
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();


</script>

<style>

</style>