import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '../components/Navbar';
import Contact from '../components/Contact';

ReactDOM.createRoot(document.getElementById('contact') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Contact />
  </React.StrictMode>
);