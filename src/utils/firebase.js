import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

  apiKey: "AIzaSyAXrDFzNDXR-LX5pZO05hdVEpMX7cQ2Fts",
  authDomain: "dashboard-8ece8.firebaseapp.com",
  projectId: "dashboard-8ece8",
  storageBucket: "dashboard-8ece8.appspot.com",
  messagingSenderId: "218375136658",
  appId: "1:218375136658:web:ab498272c7443282458d4b"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app); 
const auth = getAuth(app); 

export { firestore, auth };
