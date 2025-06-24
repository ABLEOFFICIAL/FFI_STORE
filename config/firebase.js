// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { Firestore, getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import firebase from "firebase/compat/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCBM4R9n4ejTnWWG96G5UhUiqQgH-1hYjw",
  authDomain: "ffi-store-db.firebaseapp.com",
  projectId: "ffi-store-db",
  storageBucket: "ffi-store-db.firebasestorage.app",
  messagingSenderId: "962253912750",
  appId: "1:962253912750:web:dbed1d05dd83aceb5ecb3f",
  measurementId: "G-LD06CBKNJT",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
