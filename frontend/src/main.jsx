import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MatrixCubesLogo from './components/MatrixCubesLogo';
import LandingPage from './components/LandingPage';
import './styles/index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
)
