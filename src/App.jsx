
import './App.css'
import Home from './components/home/Home'
import { Route, Routes } from 'react-router-dom'
import Services from './components/services/Services'
import NavBar from './components/Pages/navbar/NavBar'
function App() {

  return (
    <>
    <NavBar/>
       <Routes>
          <Route path='/' element={<Home/>} />
          {/* Que hacemos */}
          <Route path='/services' element={<Services/>} />
          <Route path='/actividades' />
          <Route path='/misiones' />
          {/* Nosotros */}
          <Route path='/acerca-de-nosotros' />
          <Route path='/creencia' />
          <Route path='/nuestra-doctrina' />
          {/* Donde estamos */}
          <Route path='/donde-estamos' />
          {/* Recursos */}
          <Route path='/predicaciones' />
          {/* Eventos */}
          <Route path='/eventos' />
        </Routes>
    </>
  )
}

export default App
