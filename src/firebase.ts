import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Default config from the JSON file
const defaultConfig = {
  projectId: "ai-studio-applet-webapp-ccc6f",
  appId: "1:105614025887:web:d4b123b52d25871000eeaa",
  apiKey: "AIzaSyCAnFPd7GcHAxtbxqYd6IO48RIuJP-bcJM",
  authDomain: "ai-studio-applet-webapp-ccc6f.firebaseapp.com",
  firestoreDatabaseId: "ai-studio-726a4207-d2b3-472b-bb4f-4c57c6f07ce0",
  storageBucket: "ai-studio-applet-webapp-ccc6f.firebasestorage.app",
  messagingSenderId: "105614025887",
  measurementId: ""
};

// Use environment variables if available, otherwise fallback to defaults
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || defaultConfig.apiKey,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || defaultConfig.authDomain,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || defaultConfig.projectId,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || defaultConfig.storageBucket,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || defaultConfig.messagingSenderId,
  appId: import.meta.env.VITE_FIREBASE_APP_ID || defaultConfig.appId,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || defaultConfig.measurementId
};

const app = initializeApp(firebaseConfig);
// The database ID is also needed for getFirestore if using a named database
export const db = getFirestore(app, import.meta.env.VITE_FIREBASE_DATABASE_ID || defaultConfig.firestoreDatabaseId);
export const auth = getAuth(app);
