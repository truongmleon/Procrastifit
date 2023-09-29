import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from '../components/Navbar';
import Announcements from '../components/Announcements';

ReactDOM.createRoot(document.getElementById('announcements') as HTMLElement).render(
  <React.StrictMode>
    <Navbar />
    <Announcements />
  </React.StrictMode>
);