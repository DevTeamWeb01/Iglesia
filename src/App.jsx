
import './App.css'
import Home from './components/home/Home'
import { Route, Routes, Link } from 'react-router-dom'
import Services from './components/services/Services'
function App() {
  

  return (
    <>
       <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/services' element={<Services/>} />
        </Routes>
      
    </>
  )
}

export default App
