<template>
  <v-sheet class="mt-10 mx-auto w-33 bg-white pa-5" elevation="2">
    <v-form fast-fail v-model="usersStore.isValid">   <!-- v-model : here use to validate input if all input is true it change to true  -->
      <v-text-field v-model="usersStore.name" label="First name" :rules="[rules.requiredInput, rules.firstNameRules]"></v-text-field>
      <v-text-field type="password" v-model="usersStore.password" label="Password" :rules="[rules.requiredInput, rules.passwordRules] "></v-text-field>
      <v-btn type="button" block class="mt-2 bg-blue-accent-4" @click="usersStore.createUser" :disabled="!usersStore.isValid" >Create</v-btn>
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
  firstNameRules:value => value.length >= 3 || "First name at least 3 characters",
  passwordRules: value => value.length >= 3 || "Password at least 3 characters",
  requiredInput : value => !!value || 'Required input'
}
)
onUpdated(()=>{
  // usersStore.isValid = true;
})
</script>

<style scoped>

</style>
