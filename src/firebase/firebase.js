import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
require("dotenv").config();
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: "parkway-56221",
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const usersCollection = db.collection("users");
const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

export default db;
export { db, usersCollection, provider, auth, firebase };
