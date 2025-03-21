import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MatrixCubesLogo from './components/MatrixCubesLogo';
import './styles/index.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MatrixCubesLogo />
  </StrictMode>,
)
