import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '../components/Navbar';
import Service from '../components/Service';

ReactDOM.createRoot(document.getElementById('service') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Service />
  </React.StrictMode>
);