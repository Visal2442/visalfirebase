<template>
  <h1>ID   : {{ route.params.userId }}</h1>
  <h1>Name : {{ getUser.name }}</h1>
    <RouterLink :to="{name:'Login'}">Go Back</RouterLink>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
// Firebase ==========
import db from '@/firebase/init'
import { doc, onSnapshot } from "firebase/firestore";

export default {
    setup(){
        const route = useRoute();
        let user = ref({});

        const getUser = computed(()=>{
            const docRef = doc(db, 'users', route.params.userId);
            onSnapshot(docRef, (doc)=>{
                user.value = doc.data();
            });
            return user.value;
        })

        return {
            route,
            user,
            getUser
        }
    }
}
</script>

<style>

</style>