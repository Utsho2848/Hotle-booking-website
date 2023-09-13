// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWSlbmdeEPUdCtTUUuMbEgIzyUFRGImkU",
  authDomain: "mern-stack-project-8eec3.firebaseapp.com",
  projectId: "mern-stack-project-8eec3",
  storageBucket: "mern-stack-project-8eec3.appspot.com",
  messagingSenderId: "1000216494996",
  appId: "1:1000216494996:web:007e4042cc91b722fac581"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;