// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBO5j4CPafukRBCGmnqEhRyy12EqWMutc",
  authDomain: "crud-dea64.firebaseapp.com",
  projectId: "crud-dea64",
  storageBucket: "crud-dea64.appspot.com",
  messagingSenderId: "221389296561",
  appId: "1:221389296561:web:e4fbab891bc19868836390"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const DB = getFirestore(app);

export{ DB }; 