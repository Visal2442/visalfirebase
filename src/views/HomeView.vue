<template>
  <the-counter></the-counter>
</template>

<script setup>
import TheCounter from '@components/counter/TheCounter.vue'

</script>

<style scoped>
.count-container{
    width: 40%;
    background: #deebea;
    margin: 10px auto;
    padding: 10px;
}
.count-button{
    display: flex;
    gap: 5px;
    justify-content: center;
}

</style>