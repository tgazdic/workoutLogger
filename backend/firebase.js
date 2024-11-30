// Import the Firebase SDK modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase configuration object
const firebaseConfig = {
  apiKey: "AIzaSyB0tyRVOBHBHALTa53uQ8uxhKKyI0gVdvE",
  authDomain: "workoutlogger-220d7.firebaseapp.com",
  projectId: "workoutlogger-220d7",
  storageBucket: "workoutlogger-220d7.appspot.com",
  messagingSenderId: "848057746310",
  appId: "1:848057746310:web:2d0e1fefdd9ba87fb8e207",
  measurementId: "G-TRMFSZZZ67"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

// Export the Firestore instance
export default db;
