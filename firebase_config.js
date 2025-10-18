// 1. Impor fungsi yang diperlukan
import { initializeApp } from "firebase/app"; 
import { getAuth } from "firebase/auth"; // Jika Anda menggunakan Authentication

// 2. Gunakan konfigurasi yang Anda berikan tadi
const firebaseConfig = {
  apiKey: "AIzaSyCIKKXwLPMnzYvoMSDAxZYoAz35vjbIKgQ",
  authDomain: "learnhub-app-92559.firebaseapp.com",
  projectId: "learnhub-app-92559",
  storageBucket: "learnhub-app-92559.firebasestorage.app",
  messagingSenderId: "525051273065",
  appId: "1:525051273065:web:81f14a687e8632f3b7a7f8",
  measurementId: "G-XT0GQQSM17"
};

// 3. Bangun Pondasi Aplikasi
const app = initializeApp(firebaseConfig); 

// 4. Ambil Layanan Auth untuk Login/Daftar
const auth = getAuth(app); 

// Catatan: Setelah ini, Anda menggunakan variabel 'auth' untuk semua fungsi login dan daftar.
