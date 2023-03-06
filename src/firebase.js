// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyD39zBAL8LwHhFljpSWGTablw5IE0ZpePU",
  authDomain: "firabase-auth-fb215.firebaseapp.com",
  databaseURL: "https://firabase-auth-fb215-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "firabase-auth-fb215",
  storageBucket: "firabase-auth-fb215.appspot.com",
  messagingSenderId: "712001564101",
  appId: "1:712001564101:web:b70aa35448c0883b802fac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);