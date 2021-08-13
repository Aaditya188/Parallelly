
  import firebase from 'firebase';
  
  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAibdLrADND_2OSJ7F6jYY88_OSPUNxpJY",
    authDomain: "zeta-hacks-90ea7.firebaseapp.com",
    databaseURL: "https://zeta-hacks-90ea7-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "zeta-hacks-90ea7",
    storageBucket: "zeta-hacks-90ea7.appspot.com",
    messagingSenderId: "214713492848",
    appId: "1:214713492848:web:4012577e8c883f0cf09bb5"
  })

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();


  export{ db, auth, storage};