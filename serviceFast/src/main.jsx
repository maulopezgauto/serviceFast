import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar.jsx'
import 'leaflet/dist/leaflet.css';
import ContactPage from './contactPage.jsx'
import PricingPage from './pricingPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/App" element={<App />} />
      <Route path="pricingPage" element={<PricingPage />} />
      <Route path="contactPage" element={<ContactPage />} />
    </Routes>
    </BrowserRouter>
  </StrictMode>,
)
