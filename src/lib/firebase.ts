// Import the functions you need from the SDKs you need
import { initializeApp, getApps, type FirebaseApp } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getAnalytics, type Analytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB8ZGm-QRR8O1KG9KxnzFW5ZvMuwlMkJc",
  authDomain: "starlet-6a380.firebaseapp.com",
  projectId: "starlet-6a380",
  storageBucket: "starlet-6a380.firebasestorage.app",
  messagingSenderId: "684411364007",
  appId: "1:684411364007:web:9e43258f990bfe2d5b7182",
  measurementId: "G-SMEQ060LHE"
};

// Initialize Firebase only if no apps exist (prevents duplicate app error in SSR)
const app: FirebaseApp = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firebase services
const auth: Auth = getAuth(app);
const analytics: Analytics = getAnalytics(app);

// Export the services
export { auth, analytics, app };