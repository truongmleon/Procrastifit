import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import GenOne from './components/GenOne';
import Home from './components/Home';

import { useState } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <GenOne />
  </React.StrictMode>
);
