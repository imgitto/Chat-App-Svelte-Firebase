import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

 const firebaseConfig = {
    apiKey: "AIzaSyAH-eqptQFvKbuxKV5a_2SdBNhLYUQW5j4",
    authDomain: "okfog-ae729.firebaseapp.com",
    projectId: "okfog-ae729",
    storageBucket: "okfog-ae729.appspot.com",
    messagingSenderId: "141293025292",
    appId: "1:141293025292:web:724192e8174e193f37d629"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();