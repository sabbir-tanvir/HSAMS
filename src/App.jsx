import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Login } from './components/login'
import { RegisterUser } from './components/registration'
import Home from './components/home' // Correctly import the Hero component
import Payment from './components/payment'
import  Footer  from './lib/footer'
import { Canvas } from './lib/canvas' // Correct the import path

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/home" element={<Home />} /> {/* Use Hero component */}
          <Route path="/payment" element={<Payment />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/canvas" element={<Canvas />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
