var firebaseConfig = {
    apiKey: "AIzaSyAthOxDDTYcMK4Fd_NCLpkMWp9rLcUifFA",
    authDomain: "clone-2-20a1e.firebaseapp.com",
    projectId: "clone-2-20a1e",
    storageBucket: "clone-2-20a1e.appspot.com",
    messagingSenderId: "128750017419",
    appId: "1:128750017419:web:f08c159128d6e6eafbad8e",
    measurementId: "G-KTQTDBZ8C7"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.firestore();