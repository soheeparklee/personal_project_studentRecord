import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import {getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQpHvQNUY7bkdsmdsBNZHYcge30p23qh4",
  authDomain: "personal-student-record.firebaseapp.com",
  databaseURL: "https://personal-student-record-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "personal-student-record",
  storageBucket: "personal-student-record.appspot.com",
  messagingSenderId: "1000565429549",
  appId: "1:1000565429549:web:886cd14e20b8f2b83e2fa4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);

const auth= getAuth(app);