import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCBxjn484I83Yt4I_qiDEyROxtKSgtW-50",
  authDomain: "crwn-db-d4710.firebaseapp.com",
  databaseURL: "https://crwn-db-d4710.firebaseio.com",
  projectId: "crwn-db-d4710",
  storageBucket: "crwn-db-d4710.appspot.com",
  messagingSenderId: "132763476338",
  appId: "1:132763476338:web:4096154b7deab6364f7deb",
  measurementId: "G-S908KWYNC9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
