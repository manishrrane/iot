// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getDatabase,ref,onValue} from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAHHLE2f8NkGLZDG6u_F8JjwuAwZCJ7mYo",
  authDomain: "project1-dc140.firebaseapp.com",
  databaseURL: "https://project1-dc140-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "project1-dc140",
  storageBucket: "project1-dc140.firebasestorage.app",
  messagingSenderId: "962827754639",
  appId: "1:962827754639:web:3be2f81fa684eb535424fa",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database=getDatabase(app);
export {database,ref,onValue}