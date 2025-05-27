// firebase-config.js
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCe_rO7pcw66UBAzwzS3P2v5wpdwnGdGfU",
  authDomain: "table-form-app.firebaseapp.com",
  projectId: "table-form-app",
  storageBucket: "table-form-app.firebasestorage.app",
  messagingSenderId: "869688282010",
  appId: "1:869688282010:web:f2a520a6c860260a000823"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
