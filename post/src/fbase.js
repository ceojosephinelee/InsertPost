// Import the functions you need from the SDKs you need
import * as firestore from "firebase/app";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-vd-UltX19xrt71NM_Pk7PA5fRwiyE3k",
  authDomain: "insert-post-7bcc9.firebaseapp.com",
  projectId: "insert-post-7bcc9",
  storageBucket: "insert-post-7bcc9.appspot.com",
  messagingSenderId: "767100847552",
  appId: "1:767100847552:web:b2a1c866fd825c78c63425",
  measurementId: "G-NJF6KMNMCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const authService = getAuth();
export const dbService = getFirestore();
export {firestore};
