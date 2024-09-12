// js/firebase.js
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.6.1/firebase-auth.js';

const firebaseConfig = {
  apiKey: "AIzaSyDhn51-a_k3jGFgt1pWf_fNnr3gAd02cCM",
  authDomain: "inferno---the-secret-syndicate.firebaseapp.com",
  databaseURL: "https://inferno---the-secret-syndicate-default-rtdb.firebaseio.com",
  projectId: "inferno---the-secret-syndicate",
  storageBucket: "inferno---the-secret-syndicate.appspot.com",
  messagingSenderId: "87319334121",
  appId: "1:87319334121:web:272b2c1e3f2f4d29447478",
  measurementId: "G-V920H01CTQ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
