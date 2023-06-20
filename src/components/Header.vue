<template>
    <nav>
        <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
        <RouterLink :to="{ name: 'Books' }">Books</RouterLink>
        <RouterLink :to="{ name: 'User' }">Users</RouterLink>
    </nav>


</template>
<script setup>
// const tap = ref(null)

</script>

<style scoped>
nav {
    display: flex;
    justify-content: center;
    gap: 10px;
}
</style>