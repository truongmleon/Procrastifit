import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '../components/Navbar';
import Resources from '../components/Resources';
import { useState } from 'react';

ReactDOM.createRoot(document.getElementById('resources') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Resources />
  </React.StrictMode>
);