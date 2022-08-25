import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import Home from './components/Home';
import GenOne from './components/GenOne';
import GenTwo from './components/GenTwo';
import GenThree from './components/GenThree';
import GenFour from './components/GenFour';
import GenFive from './components/GenFive';
import GenSix from './components/GenSix';
import GenSeven from './components/GenSeven';
import GenEight from './components/GenEight';

import { useState } from 'react';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <GenOne />
    <GenTwo />
    <GenThree />
    <GenFour />
    <GenFive />
    <GenSix />
    <GenSeven />
    <GenEight />
  </React.StrictMode>
);
