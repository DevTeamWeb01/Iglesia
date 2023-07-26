import './App.css'
import Home from './components/Pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import Creencia from './components/Pages/creencia/creencia'
import Servicios from './components/Pages/servicios/servicios'

function App() {

  return (
    <>
       <Routes>
          <Route path='/' element={<Home/>} />
          {/* Nosotros */}
          <Route path='/creencia' element={<Creencia />}/>
          {/* Que hacemos */}
          <Route path='/servicios' element={<Servicios />} />
          <Route path='/bautisos' />
          {/* Eventos */}
          <Route path='/eventos' />
        </Routes>
    </>
  )
}

export default App
