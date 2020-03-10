import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyCvVHZ-tsg6cF9Z1U5uPglOf1aQmwnnxV8",
  authDomain: "marioplan-d84e6.firebaseapp.com",
  databaseURL: "https://marioplan-d84e6.firebaseio.com",
  projectId: "marioplan-d84e6",
  storageBucket: "marioplan-d84e6.appspot.com",
  messagingSenderId: "56651587701",
  appId: "1:56651587701:web:39ae986196396b13b2983c",
  measurementId: "G-S7CBWDMXYR"
};
// Initialize Firebase

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase
