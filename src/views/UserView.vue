<template>

<the-user-form></the-user-form>
<the-user-card></the-user-card>

</template>

<script setup>
import { computed, onMounted } from "vue";
import { userStore } from '../store/UserStore';
// Components 
import TheUserForm from '../components/form/TheUserForm.vue';
import TheUserCard from '../components/card/user/TheUserCard.vue';

// User store 
const usersStore = userStore();

// =====================
// Lifecycle Hooks
// =====================
    // Mounted 
onMounted(() => {
  usersStore.getUsers();
})

</script>

<style scoped>
form {
  /* width: 100%; */
  background: rgb(173, 160, 186);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;
}

.input {
  display: flex;
  flex-direction: column;
  align-items: start;
  margin-top: 10px;
}

input {
  width: 100%;
}

button {
  margin-top: 10px;
}

.card-container {
  /* background: #b3d8d7; */
  width: 70%;
  margin: auto;
  padding: 1rem;
}

.card {
  background: #deebea;
  width: 50%;
  margin: 20px auto;
}

h1 {
  color: black;
}
</style>
