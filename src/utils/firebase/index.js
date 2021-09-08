import firebase from "firebase/app"
import "firebase/firestore"
import "firebase/auth"

var firebaseConfig = {
    apiKey: "AIzaSyDyiMz18nJ480ID-SBygWKl0qxlSc-WROI",
    authDomain: "reactfire-80a7b.firebaseapp.com",
    projectId: "reactfire-80a7b",
    storageBucket: "reactfire-80a7b.appspot.com",
    messagingSenderId: "1097422135492",
    appId: "1:1097422135492:web:d4228ebb3133dc4006e991"
  };

firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth();
console.log(db, auth)
export { db, auth }
