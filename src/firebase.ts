import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Firebase configuration using environment variables
// These must be prefixed with VITE_ to be accessible in the frontend
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Check if API key is missing
if (!firebaseConfig.apiKey) {
  console.error("Firebase API Key is missing! Check your environment variables.");
}

const app = initializeApp(firebaseConfig);

// The database ID is also needed for getFirestore if using a named database
const databaseId = import.meta.env.VITE_FIREBASE_DATABASE_ID || "(default)";

export const db = getFirestore(app, databaseId);
export const auth = getAuth(app);
