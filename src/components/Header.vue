<template>
    <nav>
        <!-- Way 1 -------->
      <!-- <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink> -->
      
        <!-- Way 2 ------ Using name is better  -->
      <RouterLink :to="{name: 'Home'}">Home</RouterLink>
      <RouterLink :to="{name: 'About'}" >About</RouterLink>
      <RouterLink :to="{name: 'Login'}" >Login</RouterLink>
    </nav>
</template>
<script setup>


</script>

<style scoped>
    nav{
        display: flex;
        justify-content: center;
        gap: 10px;
    }
</style>