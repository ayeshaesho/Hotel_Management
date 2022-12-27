// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
 
//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKMviWG94j5CMheTcrdwDatMu4ghbWb2Y",
  authDomain: "hotel-2b552.firebaseapp.com",
  projectId: "hotel-2b552",
  storageBucket: "hotel-2b552.appspot.com",
  messagingSenderId: "1073326084946",
  appId: "1:1073326084946:web:2913ab17625da4b266a08b",
  measurementId: "G-9BPYKKPS8C"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;