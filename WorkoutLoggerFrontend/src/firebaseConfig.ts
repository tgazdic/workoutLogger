import { initializeApp } from "@react-native-firebase/app";
import firestore from "@react-native-firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB0tyRVOBHBHALTa53uQ8uxhKKyI0gVdvE",
    authDomain: "workoutlogger-220d7.firebaseapp.com",
    projectId: "workoutlogger-220d7",
    storageBucket: "workoutlogger-220d7.appspot.com",
    messagingSenderId: "848057746310",
    appId: "1:848057746310:web:2d0e1fefdd9ba87fb8e207"
};

const firebaseApp = initializeApp(firebaseConfig);
export const db = firestore(); // Add this for Firestore access
export default firebaseApp;
