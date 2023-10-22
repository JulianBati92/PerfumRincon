import React from 'react';
import { createRoot } from 'react-dom/client'; // Importa createRoot desde react-dom/client
import 'bootstrap/dist/css/bootstrap.min.css';
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const firebaseConfig = {
  apiKey: "AIzaSyCjePcPfMzz0lGnKisrQJTuzo0SEx4obXU",
  authDomain: "perfumrincon-3dae2.firebaseapp.com",
  projectId: "perfumrincon-3dae2",
  storageBucket: "perfumrincon-3dae2.appspot.com",
  messagingSenderId: "649763374063",
  appId: "1:649763374063:web:c3f0b2a6bec674180d6c1a",
  measurementId: "G-LHG0LNRMGN"
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
