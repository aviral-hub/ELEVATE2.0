import { initializeApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBTxwhEuoVQ8WebwwiHyV7MWa23c3VgVXs",
    authDomain: "contact-bff3b.firebaseapp.com",
    projectId: "contact-bff3b",
    storageBucket: "contact-bff3b.appspot.com",
    messagingSenderId: "662457261159",
    appId: "1:662457261159:web:168c11827e0e162a7c08c2"
};

// Initialize Firebase
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApps()[0];
}

// Initialize Firestore
const db = getFirestore(app);

export { db };
