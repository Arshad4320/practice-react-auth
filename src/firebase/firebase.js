// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAfU8rrkA488e6UqVgYw1zu188GdUsOzgw",
  authDomain: "practice-react-auth-a6e4b.firebaseapp.com",
  projectId: "practice-react-auth-a6e4b",
  storageBucket: "practice-react-auth-a6e4b.firebasestorage.app",
  messagingSenderId: "114603744479",
  appId: "1:114603744479:web:6f0731b7c8dc2f69949d6a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
