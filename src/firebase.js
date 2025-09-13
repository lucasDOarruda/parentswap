// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIza...yourKey...",
  authDomain: "parentswap.firebaseapp.com",
  projectId: "parentswap",
  storageBucket: "parentswap.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdefg12345"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
