import React from "react";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from "./App";

import MatrixCubesLogo from './components/MatrixCubesLogo';
import LandingPage from './pages/LandingPage';
import './styles/index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
)
