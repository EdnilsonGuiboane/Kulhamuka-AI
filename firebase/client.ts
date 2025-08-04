// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBoRkK7lajOyXVDUX0rG9q-colmuTE0dRI",
  authDomain: "kuhlamukaai.firebaseapp.com",
  projectId: "kuhlamukaai",
  storageBucket: "kuhlamukaai.firebasestorage.app",
  messagingSenderId: "147001052983",
  appId: "1:147001052983:web:7f99eed55b501d455bd4b2",
  measurementId: "G-G9E6Z4GSD8"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp()

export const auth = getAuth(app);
export const db = getFirestore(app);