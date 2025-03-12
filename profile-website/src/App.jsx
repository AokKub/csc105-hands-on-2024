import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navabar from './pages/navbar'
import Home from './pages/home'
import AboutMe from './pages/aboutme'
import Gallary from './pages/gallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navabar />
      <Home />
      <AboutMe />
      <Gallary />
    </>

  )
}

export default App;
