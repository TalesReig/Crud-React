// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC65S6XShYdodPNqx4Cx1rwxWPP52lV5Ek",
  authDomain: "crudplanta-14e70.firebaseapp.com",
  projectId: "crudplanta-14e70",
  storageBucket: "crudplanta-14e70.appspot.com",
  messagingSenderId: "330333139224",
  appId: "1:330333139224:web:0bd90eb8a1ff88914dae6d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const DB = getFirestore(app);

export{ DB }; 