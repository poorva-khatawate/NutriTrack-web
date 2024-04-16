// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjP0MUixaamdRsXKb82XELVGZ-N9YWg00",
  authDomain: "nutritrack-f18b7.firebaseapp.com",
  projectId: "nutritrack-f18b7",
  storageBucket: "nutritrack-f18b7.appspot.com",
  messagingSenderId: "460099590556",
  appId: "1:460099590556:web:2b6a42e7f3cbf262de5059"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();

