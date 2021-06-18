import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBphtsnILSF0uLlbx06oubuFamqag5TN68",
    authDomain: "gladysecommerce-3d252.firebaseapp.com",
    projectId: "gladysecommerce-3d252",
    storageBucket: "gladysecommerce-3d252.appspot.com",
    messagingSenderId: "710121760941",
    appId: "1:710121760941:web:5a61552340995df7d67e24"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();

  export {auth}