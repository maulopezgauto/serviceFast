import { useState } from 'react'
import './index.css'
import LandingPageHeader from './components/landingPage/landingPageHeader.jsx'
import LandingPageContent from './components/landingPage/landingPageContent.jsx'
import Footer from './components/footer.jsx'

function App() {
  

  return (
    <>
      <LandingPageHeader/>
      <LandingPageContent/>
      <Footer/>
    </>
  )
}

export default App
