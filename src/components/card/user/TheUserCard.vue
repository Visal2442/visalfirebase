<template>
  <!-- <div class="card-container">
    <div class="card" v-for="(user, index) in usersStore.allUsers" :key="index">
      <div>
        <h1>{{ user.name }}</h1>
        <p>{{ user.password }}</p>
      </div>
      <button @click="usersStore.deleteUser(user.id)">Delete</button>
      <button @click="usersStore.userDetail(user.id)">Detail</button>
    </div>
  </div> -->

  <!-- <v-card v-for="(user, index) in usersStore.allUsers" :key="index" title="{{user.name}}" :subtitle="Subtitle" text="...">
  <v-card-actions>
    <v-btn @click="usersStore.deleteUser(user.id)">Delete</v-btn>
    <v-btn @click="usersStore.userDetail(user.id)">Detail</v-btn>
  </v-card-actions>
</v-card> -->
  <v-container class="w-50">
    <v-card class="mb-5" v-for="(user, index) in usersStore.allUsers" :key="index" variant="tonal">
      <v-card-item>
        <v-card-title>Name : {{ user.name }}</v-card-title>
      </v-card-item>
      <v-card-text> Password : {{ user.password }} </v-card-text>
      <v-card-actions>
        <v-btn @click="usersStore.deleteUser(user.id)" prepend-icon="mdi-delete-forever" variant="tonal" class="bg-red-accent-4">Delete</v-btn>
        <v-btn @click="usersStore.userDetail(user.id)" prepend-icon="mdi-card-account-details" variant="outlined" class="detailBtn">Detail</v-btn>
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
.detailBtn{
  border: 1px solid rgb(17, 111, 252);
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
