// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKljaRnSAcrxCYIKPTAH7YPGNUWUqvyc0",
  authDomain: "contact-manager-8b7b8.firebaseapp.com",
  projectId: "contact-manager-8b7b8",
  storageBucket: "contact-manager-8b7b8.appspot.com",
  messagingSenderId: "1018034688733",
  appId: "1:1018034688733:web:7efd183c1efab407750134"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export {
  db,
  auth
}

