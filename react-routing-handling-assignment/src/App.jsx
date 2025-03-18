import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { NavLink } from 'react-router'

function App() {
  const [count, setCount] = useState(0)

  return (
    <header>
      <div className='flex flex-row bg-black text-white text-xl'>
        <NavLink className='m-3 hover:text-blue-500' to="/">Home</NavLink>
        <NavLink className='m-3 hover:text-blue-500' to="/login">Login</NavLink>
        <NavLink className='m-3 hover:text-blue-500' to="/fav">Favorites</NavLink>
      </div >

    </header>
  )
}

export default App
