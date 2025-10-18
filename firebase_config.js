// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCIKKXwLPMnzYvoMSDAxZYoAz35vjbIKgQ",
  authDomain: "learnhub-app-92559.firebaseapp.com",
  projectId: "learnhub-app-92559",
  storageBucket: "learnhub-app-92559.firebasestorage.app",
  messagingSenderId: "525051273065",
  appId: "1:525051273065:web:81f14a687e8632f3b7a7f8",
  measurementId: "G-XT0GQQSM17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
