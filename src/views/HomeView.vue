<template>
  <the-counter></the-counter>
</template>

<script setup>
// import { storeToRefs} from 'pinia';
// import { computed, ref } from 'vue';
// import { counterStore } from '@/store/store.js'
import TheCounter from '@/components/counter/TheCounter.vue'

// /*
// Count
// */
// // countStore 
// const countStore = counterStore();
// const { increaseCount, decreaseCount} = countStore;    // use to get methods from store
// const { count, oddOrEven } = storeToRefs(countStore);    // use to get state from store

</script>

<style scoped>
.count-container{
    width: 40%;
    background: #d49ef3;
    margin: 10px auto;
    padding: 10px;
}
.count-button{
    display: flex;
    gap: 5px;
    justify-content: center;
}

</style>