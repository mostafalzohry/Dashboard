// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics"; 

const firebaseConfig = {

  apiKey: "AIzaSyAXrDFzNDXR-LX5pZO05hdVEpMX7cQ2Fts",
  authDomain: "dashboard-8ece8.firebaseapp.com",
  projectId: "dashboard-8ece8",
  storageBucket: "dashboard-8ece8.appspot.com",
  messagingSenderId: "218375136658",
  appId: "1:218375136658:web:ab498272c7443282458d4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;
