import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
require("dotenv").config();
const firebaseConfig = {
  apiKey: "AIzaSyDToLLe1MwiW3q1KO_oCj_k0Sn-Oel64iQ",
  authDomain: "parkway-56221.firebaseapp.com",
  projectId: "parkway-56221",
  storageBucket: "parkway-56221.appspot.com",
  messagingSenderId: "390683954202",
  appId: "1:390683954202:web:4495dc679aa2a87afd95a3"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const usersCollection = db.collection("users");
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export default db;
export { db, usersCollection, provider, auth, firebase };
