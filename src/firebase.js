import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAmVboIoPUoq7JNQ2WSAfnuAoK1cPMFOwI",
  authDomain: "mini-netflix-eb25f.firebaseapp.com",
  projectId: "mini-netflix-eb25f",
  storageBucket: "mini-netflix-eb25f.appspot.com",
  messagingSenderId: "1063379427710",
  appId: "1:1063379427710:web:7c14cbe8a73c7ad00cd32f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
