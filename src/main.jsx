import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Landing from './Landingpage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LandingPage />
  </StrictMode>,
)
