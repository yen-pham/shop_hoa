import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyDt2srz5_w7QItX_0AUeJAGCjPzlGH5-eY",
    authDomain: "shophoa-70eaf.firebaseapp.com",
    databaseURL: "https://shophoa-70eaf.firebaseio.com",
    projectId: "shophoa-70eaf",
    storageBucket: "shophoa-70eaf.appspot.com",
    messagingSenderId: "239719727492",
    appId: "1:239719727492:web:1c637d011cfe1ec55cddd1",
    measurementId: "G-RYMZ261QKX"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export const users = firebase.database().ref('shophoa-70eaf');