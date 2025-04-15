import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyARd6YgpOZFGijwAJ0gK272EyNUsVHvyiw",
  authDomain: "time2try-backend.firebaseapp.com",
  projectId: "time2try-backend",
  storageBucket: "time2try-backend.firebasestorage.app",
  messagingSenderId: "107778406657",
  appId: "1:107778406657:web:7a54fdb5d68d8f0ef64300",
  measurementId: "G-QLMVMJSN75"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

export default app; 