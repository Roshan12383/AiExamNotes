import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
    authDomain: "authexamnote-8f0ad.firebaseapp.com",
    projectId: "authexamnote-8f0ad",
    storageBucket: "authexamnote-8f0ad.firebasestorage.app",
    messagingSenderId: "862119106418",
    appId: "1:862119106418:web:68c47eed7458093b95afeb"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export { auth, provider }