import * as firebase from 'firebase/app'
import 'firebase/database'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyD_v5CdI1122_8MNsuA7hC_uoCkJwfkTSg",
  authDomain: "react-on-firebase-with-todo.firebaseapp.com",
  projectId: "react-on-firebase-with-todo",
  databaseURL:"https://react-on-firebase-with-todo-default-rtdb.firebaseio.com/",
  storageBucket: "react-on-firebase-with-todo.appspot.com",
  messagingSenderId: "369579736450",
  appId: "1:369579736450:web:426bde9063c0109f0aa39b",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase

export default firebase.initializeApp(firebaseConfig)

