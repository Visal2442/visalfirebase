<template>
  <div class="count-container">
    <div class="count">
        <h1>{{ count }}</h1>
    </div>
    <div class="count-button">
        <button @click="decreaseCount()">-</button>
        <button @click="increaseCount()">+</button>
        <button @click="increaseFive()">5+</button>
    </div>
    <p>The Counter is : {{ oddOrEven }}</p>
  </div>
</template>

<script setup>
import { storeToRefs} from 'pinia';
import { counterStore } from '@/store/CounterStore.js'

/*
Count
*/
// countStore 
const countStore = counterStore();
const { increaseCount, decreaseCount} = countStore;    // use to get methods from store
const { count, oddOrEven } = storeToRefs(countStore);    // use to get state from store

let increaseFive =()=>{
    countStore.count = countStore.count+5
}
</script>

<style>

</style>