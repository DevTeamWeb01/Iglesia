import './App.css'
import Home from './components/Pages/home/Home'
import { Route, Routes } from 'react-router-dom'
import Creencia from './components/Pages/creencia/creencia'
import Ubicacion from './components/Pages/ubicacion/ubicacion'

function App() {

  return (
    <>
       <Routes>
          <Route path='/' element={<Home/>} />
          {/* Que hacemos */}
          <Route path='/servicios' />
          <Route path='/bautisos' />
          {/* Nosotros */}
          <Route path='/donde-nos-encontramos' element={<Ubicacion />}/>
          <Route path='/creencia' element={<Creencia />}/>
          <Route path='/pastores' />
          {/* Eventos */}
          <Route path='/eventos' />
        </Routes>
    </>
  )
}

export default App
