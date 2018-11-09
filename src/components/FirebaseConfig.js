import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyDRryWwT46VTVXUj0bV8rQT9f7KowpnIV0",
    authDomain: "fir-rn-fc123.firebaseapp.com",
    databaseURL: "https://fir-rn-fc123.firebaseio.com",
    projectId: "fir-rn-fc123",
    storageBucket: "fir-rn-fc123.appspot.com",
    messagingSenderId: "535162169573"
  };
export const firebaseApp = firebase.initializeApp(config);