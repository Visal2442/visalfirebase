<template>
  <h1>ID   : {{ route.params.id }}</h1>
  <h1>Name : {{ getUser }}</h1>
    <RouterLink :to="{name:'Login'}">Go Back</RouterLink>
</template>

<script>
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
// Firebase ==========
import db from '../firebase/init'
import { collection,where, addDoc, getDoc, setDoc, doc, query, getDocs, onSnapshot, orderBy, deleteDoc } from "firebase/firestore";

export default {
    setup(){
        const route = useRoute();
        let user = ref({});

        // onMounted(()=>{
        //     const docRef = doc(db, 'users', route.params.id);
        //     getDoc(docRef).then(doc=>{
        //         user.value = doc.data();
        //     })
        // })
        const getUser = computed(()=>{
            const docRef = doc(db, 'users', route.params.id);
            getDoc(docRef).then(doc=>{
                return user.value = doc.data();
            })
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