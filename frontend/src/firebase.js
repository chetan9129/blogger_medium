// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtqThp6d1z0iXi5zqI_MrfLy3gPCSDPD0",

  authDomain: "mediumclone-780a8.firebaseapp.com",

  projectId: "mediumclone-780a8",

  storageBucket: "mediumclone-780a8.appspot.com",

  messagingSenderId: "1051581730858",

  appId: "1:1051581730858:web:c861aad1ea1dff84b9b353",

  measurementId: "G-SD64RH1G3E",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export { auth, provider };
