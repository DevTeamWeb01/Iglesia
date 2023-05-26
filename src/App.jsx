
import './App.css'
import Home from './components/home/Home'
import { Route, Routes, Link } from 'react-router-dom'
import Services from './components/services/Services'
import NavBar from './components/navbar/NavBar'
function App() {
  

  return (
    <>
    <NavBar/>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/services' element={<Services/>} />
        </Routes>
    </>
  )
}

export default App
