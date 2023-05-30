var firebaseConfig = {
    apiKey: "AIzaSyACzc4wTKVuYXssv30ykUwf4KLs8uys7Ow",
    authDomain: "verveci-demo.firebaseapp.com",
    databaseURL: "https://verveci-demo-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "verveci-demo",
    storageBucket: "verveci-demo.appspot.com",
    messagingSenderId: "956385268653",
    appId: "1:956385268653:web:ae0c7f2179a162b6c24724"
  };
  
  firebase.initializeApp(firebaseConfig);
  
  // Now you can use the Firebase Realtime Database
  var database = firebase.database();
