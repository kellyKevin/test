// src/firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyA0uwZ3ZfkJcNMqrs1mB0Amc1BQBIo4tjE",
    authDomain: "farming-4558c.firebaseapp.com",
    projectId: "farming-4558c",
    storageBucket: "farming-4558c.appspot.com",
    messagingSenderId: "576460772617",
    appId: "1:576460772617:web:05112cbe778522afd02fd8",
    measurementId: "G-DCE5FPLQKH"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
