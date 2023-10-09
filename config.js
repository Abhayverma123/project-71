import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBaSMX-EXrquexpIRDBytc8Zoe81Q5oM64",
  authDomain: "project-71-2ed86.firebaseapp.com",
  projectId: "project-71-2ed86",
  storageBucket: "project-71-2ed86.appspot.com",
  messagingSenderId: "134681766766",
  appId: "1:134681766766:web:0bc66550ebebc5ad4a2f7f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
