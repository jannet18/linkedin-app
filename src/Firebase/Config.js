import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDCXsS_xGsGHIUbbgo_7ac-4yrlgZc8Nfw",
  authDomain: "linkedin-app-1d885.firebaseapp.com",
  projectId: "linkedin-app-1d885",
  storageBucket: "linkedin-app-1d885.appspot.com",
  messagingSenderId: "231600522129",
  appId: "1:231600522129:web:d641bf299ef85fe72dd030"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export {db, app, auth }