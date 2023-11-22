import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3zkUw_LGsq6x5RvViBNAG0tacyYJSkaY",
  authDomain: "paulas-adventskalender.firebaseapp.com",
  projectId: "paulas-adventskalender",
  storageBucket: "paulas-adventskalender.appspot.com",
  messagingSenderId: "1058395368676",
  appId: "1:1058395368676:web:e3f457873aad2c0beb50f1"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const daysRef = collection(db, "days");