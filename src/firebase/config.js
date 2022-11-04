import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOOKMoB6kRPGWBOq2vKUcDcQyQIJR6c4A",
  authDomain: "ecommerce-5dad3.firebaseapp.com",
  projectId: "ecommerce-5dad3",
  storageBucket: "ecommerce-5dad3.appspot.com",
  messagingSenderId: "459400627731",
  appId: "1:459400627731:web:7f209791e057d3a94821e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
