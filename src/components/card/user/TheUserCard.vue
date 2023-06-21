<template>
  <v-container class="w-50">
    <v-card class="mb-5" v-for="(user, index) in usersStore.allUsers" :key="index" variant="tonal">
      <v-card-item>
        <v-card-title>Name : {{ user.name }}</v-card-title>
      </v-card-item>
      <v-card-text> Password : {{ user.password }} </v-card-text>
      <v-card-actions>
        <v-btn @click="usersStore.deleteUser(user.id)" variant="tonal" class="bg-red-accent-4"><v-icon icon="mdi-delete-forever"></v-icon>Delete</v-btn>
        <v-btn @click="usersStore.userDetail(user.id)" variant="outlined" class="detailBtn"><v-icon icon="mdi-card-account-details"></v-icon> Detail</v-btn>
      </v-card-actions> 
    </v-card>
  </v-container>
</template>

<script setup>
import { userStore } from "../../../store/UserStore";

// User store
const usersStore = userStore();

</script>

<style scoped>
button {
  margin-top: 10px;
}

.card-container {
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
