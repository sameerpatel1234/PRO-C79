import firebase from 'firebase';
require('@firebase/firestore');


const firebaseConfig = {
  apiKey: "AIzaSyBBQAv0RGH-nVlPAmFRr2flhOf9WcgK3pQ",
  authDomain: "barter-system-3aa5b.firebaseapp.com",
  databaseURL: "https://barter-system-3aa5b-default-rtdb.firebaseio.com",
  projectId: "barter-system-3aa5b",
  storageBucket: "barter-system-3aa5b.appspot.com",
  messagingSenderId: "464762477441",
  appId: "1:464762477441:web:9ab269016a11c19180e680"
};
firebase.initializeApp(firebaseConfig)
export default firebase.firestore();