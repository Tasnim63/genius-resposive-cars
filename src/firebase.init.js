// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZzyWiC3sSWvjcTF8Sxb40Q_HNpQY0ucg",
  authDomain: "genius-cars-service-4ae09.firebaseapp.com",
  projectId: "genius-cars-service-4ae09",
  storageBucket: "genius-cars-service-4ae09.appspot.com",
  messagingSenderId: "36096316101",
  appId: "1:36096316101:web:24094913fed1380ce5d6ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default app;