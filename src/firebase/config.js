import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth'; 
import 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyAu0tDXTX6ICXsmk97E7-sXUNaAxVkhldA",
  authDomain: "olx-clone-adfbd.firebaseapp.com",
  projectId: "olx-clone-adfbd",
  storageBucket: "olx-clone-adfbd.appspot.com",
  messagingSenderId: "603600139444",
  appId: "1:603600139444:web:387d82fbb00bbb89bf53e1",
  measurementId: "G-L30VDSYZM9"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app); // Initialize Firebase Authentication

export { app as Firebase, firestore as Firestore, auth as FirebaseAuth };
