
import firebase from 'firebase/firestore';
import { initializeApp } from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDh4ZbIgIilbmVKkibMKZhxvt0fMXbgQmI",
  authDomain: "blog-react-hooks-1c401.firebaseapp.com",
  projectId: "blog-react-hooks-1c401",
  storageBucket: "blog-react-hooks-1c401.appspot.com",
  messagingSenderId: "683306883340",
  appId: "1:683306883340:web:526f20f95e68f7c5eb5129"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firestore=firebase.firestore();