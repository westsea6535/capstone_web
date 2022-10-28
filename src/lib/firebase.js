import * as firebase from 'firebase/app';



import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyACiqhginGeZ6FWXt4V0I3G1ZmIQP2XME4",
  authDomain: "idol-goods-database.firebaseapp.com",
  projectId: "idol-goods-database",
  storageBucket: "idol-goods-database.appspot.com",
  messagingSenderId: "525989001820",
  appId: "1:525989001820:web:ba003e71f0ace2103c8499"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
export default firebaseApp;