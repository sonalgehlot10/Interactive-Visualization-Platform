// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSabX3MiTfNeYqyLQYGs6e2wIPmG6L4Fk",
  authDomain: "justmethods-ee62f.firebaseapp.com",
  projectId: "justmethods-ee62f",
  storageBucket: "justmethods-ee62f.firebasestorage.app",
  messagingSenderId: "92252808098",
  appId: "1:92252808098:web:737992567f12f74f63c8fb",
  measurementId: "G-9N401W3E3H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export { app, auth };