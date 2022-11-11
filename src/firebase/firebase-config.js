// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "@firebase/firestore"
// import firebase from "firebase";
// import "firebase/firestore";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB8f2lHWsLZrz01G0TK5jRLblKNLMCCCJM",
    authDomain: "lil-pot.firebaseapp.com",
    projectId: "lil-pot",
    storageBucket: "lil-pot.appspot.com",
    messagingSenderId: "1050132146786",
    appId: "1:1050132146786:web:81d404fc8f74d10199ff3b",
    measurementId: "G-44Z0S93NGN"
}

// const firebaseApp=firebase.initializeApp(firebaseConfig);
// const db=firebase.firestore();



// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);