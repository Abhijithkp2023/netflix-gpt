// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJBtEuKpoYYcod8zrE_C0RCHGA17Fa834",
  authDomain: "netflixgpt-913ef.firebaseapp.com",
  projectId: "netflixgpt-913ef",
  storageBucket: "netflixgpt-913ef.appspot.com",
  messagingSenderId: "283002407695",
  appId: "1:283002407695:web:b6537e57a124ec99354c7a",
  measurementId: "G-C5WBYCCSVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();