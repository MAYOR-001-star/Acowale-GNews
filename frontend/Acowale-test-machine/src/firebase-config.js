// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAN7LamX1FB_fdELREQ1xSzGiEZZbuoUCg",
  authDomain: "acowale-gnews-5c84c.firebaseapp.com",
  projectId: "acowale-gnews-5c84c",
  storageBucket: "acowale-gnews-5c84c.appspot.com",
  messagingSenderId: "592804960088",
  appId: "1:592804960088:web:d34af4cd8b13205053772d",
  measurementId: "G-EC4RP1NJTD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);