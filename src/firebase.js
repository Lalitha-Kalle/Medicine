
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// Just remove the analytics import from here coz you don't need it

// after creating your app you must get a confi codes you just need to replace with below config 
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-id",
  storageBucket: "your-bucket",
  messagingSenderId: "your-id",
  appId: "your-id"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

