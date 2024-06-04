import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from "./components/navbar.jsx";

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar
      li={[
        ["Lorenzo", "vite.svg"],
        ["Mauro", "vite.svg"],
        ["Matteo", "vite.svg"]
      ]}
    />
    </>
  )
}

export default App
