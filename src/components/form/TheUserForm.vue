<template>
  <!-- <form action="">
    <div class="input username">
      <label for="username">Username</label>
      <input type="text" name="username" v-model="usersStore.name" />
    </div>
    <div class="input password">
      <label for="password">Password</label>
      <input type="password" name="password" v-model="usersStore.password" />
    </div>
    <div class="input">
      <button type="button" @click="usersStore.createUser">Add</button>
    </div>
  </form> -->
  <v-sheet width="300" class="mx-auto">
    <v-form fast-fail v-model="usersStore.isValid">
      <v-text-field v-model="usersStore.name" label="First name" :rules="[rules.requiredInput, rules.firstNameRules]"></v-text-field>
      <v-text-field type="password" v-model="usersStore.password" label="Password" :rules="[rules.requiredInput, rules.passwordRules] "></v-text-field>
      <v-btn type="button" block class="mt-2 bg-blue-accent-4" @click="usersStore.createUser" :disabled="!usersStore.isValid" :loading="usersStore.isTrue">Submit</v-btn>
    </v-form>
  </v-sheet>
</template>

<script setup>
import { onUpdated, ref } from "vue";
import { userStore } from "../../store/UserStore";

// User store
const usersStore = userStore();

// Validaton rules 
const rules = ref({
  firstNameRules:value=> value.length >= 3 || "First name at least 3 characters",
  passwordRules: value => value.length >= 3 || "Password at least 3 characters",
  requiredInput : value => !!value || 'Required input'
}

)
onUpdated(()=>{
  usersStore.isValid = true;
})
</script>

<style scoped>
/* form {
  
  background:rgb(173, 160, 186);
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
} */
</style>
