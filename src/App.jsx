import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Login } from './components/login'
import { RegisterUser } from './components/registration'
import Hero from './components/hero' // Correctly import the Hero component
import Payment from './components/payment'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/home" element={<Hero />} /> {/* Use Hero component */}
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
