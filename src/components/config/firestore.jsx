import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_MY_KEY,
  authDomain: "firestore-learning-a25ac.firebaseapp.com",
  projectId: "firestore-learning-a25ac",
  storageBucket: "firestore-learning-a25ac.appspot.com",
  messagingSenderId: "388459169876",
  appId: "1:388459169876:web:92603eb3be727a407885c1",
  measurementId: "G-BM55M4K1RQ",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);