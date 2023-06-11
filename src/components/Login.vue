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
    <div class="card" v-for="user in users" :key="user.name">
      <h1>{{ user.name }}</h1>
      <p>{{ user.password }}</p>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from "vue";
import db from "../firebase/init";
import { collection, addDoc, getDoc, setDoc, doc, query, getDocs,onSnapshot } from "firebase/firestore";


export default {
  setup() {
    const name = ref("");
    const password = ref("");
    const users = ref([]);

    // Get users 
    let getUsers = ()=>{
      
      // users.value = [];
      // db.collection('users').get().then(allUsers=>{
      //   allUsers.forEach(user=>{
      //     users.value.push(user.data());
      //   })
      // })
      // let q = query(collection(db, 'users'));
      // let docUsers = await getDocs(q)
      // docUsers.forEach(user=>{
      //   allUsers.push(user.data());
      // })
      // users.value= allUsers
     
    };
    
    // Computed 
    // let allUsers = computed(()=>{
    //   return users.value;
    // })

    // Mounted 
    onMounted(()=>{
      onSnapshot(collection(db, 'users'), (querySnapshot)=>{
        users.value = [];
        querySnapshot.forEach((doc) =>{
          users.value.push(doc.data());
        })
      })
      
    })

    // Create new use 
    let createUser =  () => {
      // data to send
      let userData = {
        name: name.value,
        password: password.value,
      };
      // create document and return references to it
      // ----- collectionReference = doc(db, "collectionName", "key")-----
      // const docRef = await setDoc(doc(db, "users", userData.name), userData);  // use this to prevent overwrite data
      if(name.value != '' && password.value != ''){
        setDoc(doc(db, "users", userData.name), userData);  // use this to prevent overwrite data
        name.value = "";
        password.value = "";
        // getUsers();
      }
    };
    // getUsers();  

    return {
      users,
      name,
      password,
      createUser,
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
h1{
  color: black;
}
</style>
