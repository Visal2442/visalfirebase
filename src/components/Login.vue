<template>
  <form action="">
    <div class="input username">
      <label for="username">Username</label>
      <input type="text" name="username" v-model="name" />
    </div>
    <div class="input password">
      <label for="password">Password</label>
      <input type="password" name="password" v-model="password" />
    </div>
    <div class="input">
      <button type="button" @click="createUser">Add</button>
    </div>
  </form>
  <div class="card-container">
    <div class="card" v-for="(user, index) in users" :key="index">
      <div>
        <h1>{{ user.name }}</h1>
        <p>{{ user.password }}</p>
      </div>
      <button @click="deleteUser(user.id)">Delete</button>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import db from "../firebase/init";
import { collection, addDoc, getDoc, setDoc, doc, query, getDocs, onSnapshot, orderBy, deleteDoc } from "firebase/firestore";


export default {
  setup() {
    const name = ref("");
    const password = ref("");
    const users = ref([]);

    // Mounted  (Get users )
    onMounted(() => {
      let q = query(collection(db, 'users'), orderBy('date', 'desc'))
      onSnapshot(q, (allUsers) => {
        users.value = [];
        allUsers.forEach((doc) => {
          users.value.push({
            id: doc.id,
            name: doc.data().name,
            password: doc.data().password,
          });
        })
      })


    })

    // Create new user 
    let createUser = () => {
      // data to send
      let userData = {
        name: name.value,
        password: password.value,
        date:Date.now()
      };
      // ========= Way 1 ==========
      // ----- collectionReference = doc(db, "collectionName", "key")-----
      // if(name.value != '' && password.value != ''){
      //   setDoc(doc(db, "users", userData.name), userData);  // use this to prevent overwrite data
      //   name.value = "";
      //   password.value = "";
      // }
      // ========= Way 2 ==========
      if (name.value != '' && password.value != '') {
        addDoc(collection(db, 'users'), userData);
        name.value = "";
        password.value = "";
      }
    };
    let deleteUser = (id) => {
      // console.log(id);
      deleteDoc(doc(db, "users", id))
      // console.log();
    }

    return {
      users,
      name,
      password,
      createUser,
      deleteUser
    };
  },

};
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
}</style>
