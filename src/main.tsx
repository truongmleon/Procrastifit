import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar';
import GenOne from './components/GenOne';

import { useState } from 'react';

/*
fetch(link)
.then(response => response.json())
.then(data => {
  console.log(data)
});
*/

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <GenOne />
  </React.StrictMode>
);
