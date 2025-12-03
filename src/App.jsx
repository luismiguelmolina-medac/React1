import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Default from './paginas/Default'
import Pagina1 from './paginas/Pagina1'
import Pagina2 from './paginas/Pagina2'
import './App.css'
import { Routes, Route, Link } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  let mensaje = "Que tal?";
  return (
    <>
      <h1>Hola Mundo desde App.jsx</h1>
      <nav>
        <Link to="/">Pagina 1</Link> | <Link to="/pagina2">Pagina 2</Link>
      </nav>
      <main style={{ backgroundColor: "blue" }}>
        <Routes>
          <Route path='/' element={<Pagina1 />} />
          <Route path='/pagina2' element={<Pagina2 />} />
        </Routes>
      </main>
    </>
  )
}

export default App
