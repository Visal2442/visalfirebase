<template>
    <h1>ID : {{ route.params.userId }}</h1>
    <h1>Name : {{ getUser.name }}</h1>
    <RouterLink :to="{ name: 'Books' }">Go Back</RouterLink>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
// Firebase ==========
import db from '@/firebase/init'
import { doc, onSnapshot } from "firebase/firestore";

const route = useRoute();
let user = ref({});

const getUser = computed(() => {
    const docRef = doc(db, 'users', route.params.userId);
    onSnapshot(docRef, (doc) => {
        user.value = doc.data();
    });
    return user.value;
})
</script>

<style></style>