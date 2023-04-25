

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
//  web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwQckcHgEBF-QWnNQOGIY4xhrzPUXm_Zo",
  authDomain: "ingressive-ad517.firebaseapp.com",
  projectId: "ingressive-ad517",
  storageBucket: "ingressive-ad517.appspot.com",
  messagingSenderId: "124001843071",
  appId: "1:124001843071:web:e792b713189532760c4c4a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();