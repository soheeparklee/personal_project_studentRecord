import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";


// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
  // ...
  // The value of `databaseURL` depends on the location of the database
    databaseURL: "https://personal-student-record-default-rtdb.asia-southeast1.firebasedatabase.app/",
    storageBucket: 'gs://personal-student-record.appspot.com'
  
  
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);


// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);