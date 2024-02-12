import { useState } from 'react'
import './App.css'
import Types from './pages/Types';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Card from './components/Card';
function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route
        path='/'
        element={<Home/>}
        
        />
        <Route
        path='/types'
        element={<Types/>}
        
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
