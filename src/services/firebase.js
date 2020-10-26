import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyBzkkTeZLyVKXXAPTXgc9x5Afb027GTbZI",
  authDomain: "yelutech.firebaseapp.com",
  databaseURL: "https://yelutech.firebaseio.com",
  projectId: "yelutech",
  storageBucket: "yelutech.appspot.com",
  messagingSenderId: "151580757700",
  appId: "1:151580757700:web:197b0ad2b173e074390391",
  measurementId: "G-LNFD59T908"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const firestore = firebase.firestore();