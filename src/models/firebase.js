// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import dotenv from "dotenv";  


// dotenv.config();

// const apiKey = process.env.apiKey;
// const authDomain = process.env.authDomain;
// const projectId = process.env.projectId;
// const storageBucket = process.env.storageBucket;
// const messagingSenderId = process.env.messagingSenderId;
// const appId = process.env.appId;

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey,
//   authDomain,
//   projectId,
//   storageBucket,
//   messagingSenderId,
//   appId
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const db = getFirestore(app);

//console.log('Firebase initialized', app, "BASE DE DATOS", db);

// Export the initialized Firebase app if needed



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";  
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAwaePJE7SzwlID4589cVNittMpijF_fwQ",
  authDomain: "prueba-de-conexion-e505d.firebaseapp.com",
  projectId: "prueba-de-conexion-e505d",
  storageBucket: "prueba-de-conexion-e505d.firebasestorage.app",
  messagingSenderId: "628175692600",
  appId: "1:628175692600:web:d65345c5d74839b89757cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);