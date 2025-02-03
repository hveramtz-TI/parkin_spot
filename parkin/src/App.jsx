import { useState, useEffect } from 'react'
import './App.css'
import EsPWA from './components/esPWA/esPWA.jsx'
import NoPWA from './components/noPWA/noPWA.jsx'

function App() {
  const [isPWA, setIsPWA] = useState(false);

  useEffect(() => {
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    setIsPWA(isStandalone);
  }, []);

  return (
    <>
      <EsPWA></EsPWA>
    </>
  )
}

export default App