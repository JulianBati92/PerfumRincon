import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const firebaseConfig = {
    apiKey: "AIzaSyDKzSGCrzgKDRrF7WzMy2Jfc6aeHFYWIX0",
    authDomain: "prayformojo-4a625.firebaseapp.com",
    projectId: "prayformojo-4a625",
    storageBucket: "prayformojo-4a625.appspot.com",
    messagingSenderId: "591740997621",
    appId: "1:591740997621:web:acdf0a76d021fadc6adabc",
    measurementId: "G-6STXJP9QFE"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

const root = createRoot(document.getElementById('root')); // Utiliza createRoot desde react-dom/client
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
);
