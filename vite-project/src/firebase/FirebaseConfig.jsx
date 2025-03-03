// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAoZGkgBYfMR20vSE2-KZ_v6IScg-ZBPqs",
  authDomain: "myecommerce-d83cf.firebaseapp.com",
  projectId: "myecommerce-d83cf",
  storageBucket: "myecommerce-d83cf.appspot.com",
  messagingSenderId: "965301010445",
  appId: "1:965301010445:web:37c7a5146b8b7d57495544",
  measurementId: "G-1FLG5WTW8B",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth };
