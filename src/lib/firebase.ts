// Import the functions you need from the SDKs you need
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyDK0nc91Ly5mUbvVzmGCcUPwHLaFs1jqEc",
  authDomain: "kimlistings-eb0d8.firebaseapp.com",
  projectId: "kimlistings-eb0d8",
  storageBucket: "kimlistings-eb0d8.firebasestorage.app",
  messagingSenderId: "480865172622",
  appId: "1:480865172622:web:d961036d85555b13365ddf",
  measurementId: "G-GX8J2XRHLG"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
export const auth = getAuth(app);