import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDeCw6MVzmAwcCvnETTVF4DIhtKCgumjQU",
  authDomain: "finance-tracker-app-51cb5.firebaseapp.com",
  projectId: "finance-tracker-app-51cb5",
  storageBucket: "finance-tracker-app-51cb5.firebasestorage.app",
  messagingSenderId: "858089061680",
  appId: "1:858089061680:web:2e47417276be21ca955cf5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export { app, db };
