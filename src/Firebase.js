// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBW_fY1Dae2gDvIxa04W3VqOicJ97eL3jQ",
  authDomain: "expense-traacker.firebaseapp.com",
  databaseURL: "https://expense-traacker-default-rtdb.firebaseio.com/",
  projectId: "expense-traacker",
  storageBucket: "expense-traacker.appspot.com",
  messagingSenderId: "762508514815",
  appId: "1:762508514815:web:dd1002f74780c4ab7483ca",
  measurementId: "G-V17PGKKGS8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
export const auth = getAuth();
