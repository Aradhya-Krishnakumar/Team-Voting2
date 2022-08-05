import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBjumQAj1CvroQDpY6gdZlUTTkE2skeH8k",
    authDomain: "voteteam-65320.firebaseapp.com",
    databaseURL: "https://voteteam-65320-default-rtdb.firebaseio.com",
    projectId: "voteteam-65320",
    storageBucket: "voteteam-65320.appspot.com",
    messagingSenderId: "238590279734",
    appId: "1:238590279734:web:34ac262d930b27f9d4d897"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();