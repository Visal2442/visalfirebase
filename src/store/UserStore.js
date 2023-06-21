import { defineStore } from "pinia";
import db from "../firebase/init";
import {
  collection,
  addDoc,
  doc,
  query,
  onSnapshot,
  orderBy,
  deleteDoc,
} from "firebase/firestore";

import { useRouter, useRoute } from "vue-router";
import { ref } from "vue";

export const userStore = defineStore("userStore", () => {
  const name = ref("");
  const password = ref("");

  const allUsers = ref([]);
  const router = useRouter();
  const route = useRoute();
  
  const isValid = ref(false);

  // Get all users
  const getUsers = () => {
    let q = query(collection(db, "users"), orderBy("date", "desc"));
    onSnapshot(q, (userList) => {
      allUsers.value = [];
      userList.forEach((doc) => {
        allUsers.value.push({
          id: doc.id,
          name: doc.data().name,
          password: doc.data().password,
        });
      });
    });
  };
  //  Create new user
  const createUser = () => {
    let userData = {
      name: name.value,
      password: password.value,
      date: Date.now(),
    };
    if (isValid.value) {
      addDoc(collection(db, "users"), userData);
      name.value = "";
      password.value = "";
    }
  };
  // View User's detail =====
  const userDetail = (userId) => {
    router.push({ name: "UserDetail", params: { userId: userId } });
  };
  // Delete user ======
  const deleteUser = (userId) => {
    deleteDoc(doc(db, "users", userId));
  };
  return {
    name,
    password,
    allUsers,
    isValid,
    getUsers,
    createUser,
    userDetail,
    deleteUser,
  };
});
