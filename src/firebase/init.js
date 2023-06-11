// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBopA9077664ZJA6ZFJfbhhN6MvuZOicuY",
  authDomain: "add-user-9f54b.firebaseapp.com",
  projectId: "add-user-9f54b",
  storageBucket: "add-user-9f54b.appspot.com",
  messagingSenderId: "273681165157",
  appId: "1:273681165157:web:ccb93c0a2bad9a01cbcf8c",
  measurementId: "G-M56470NEFD"
};

// Init firebase 
const app =initializeApp(firebaseConfig);

// init firebase service 
const db = getFirestore(app);
export default db;

