// import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

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
  import dotenv from "dotenv";  
  
  
  dotenv.config();
  
  const apiKey = process.env.apiKey;
  const authDomain = process.env.authDomain;
  const projectId = process.env.projectId;
  const storageBucket = process.env.storageBucket;
  const messagingSenderId = process.env.messagingSenderId;
  const appId = process.env.appId;
  
  
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
  apiKey,
  authDomain,
  projectId,
  storageBucket,
  messagingSenderId,
  appId 
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);