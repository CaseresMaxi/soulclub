// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxzznT7mIwSz3z3qNnOXiuxLQCuPdrjkU",
  authDomain: "sould-club.firebaseapp.com",
  projectId: "sould-club",
  storageBucket: "sould-club.appspot.com",
  messagingSenderId: "831067110556",
  appId: "1:831067110556:web:e46ed11c588d1d48280159",
  measurementId: "G-GS5LLEHVPC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const firestore = app.firestore();
const analytics = getAnalytics(app);
 export default getFirestore();


