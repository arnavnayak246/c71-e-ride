import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyB5-fVN16XrMcDVkjAptttc0LHQWvmf8xY",
    authDomain: "e-library-cd7c6.firebaseapp.com",
    projectId: "e-library-cd7c6",
    storageBucket: "e-library-cd7c6.appspot.com",
    messagingSenderId: "701665597408",
    appId: "1:701665597408:web:f06b4a6885a999ab3cbd85"
  };
  
firebase.initializeApp(firebaseConfig);
export default firebase.firestore();


