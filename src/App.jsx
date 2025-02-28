import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Login } from './components/login'
import { RegisterUser } from './components/registration'
import Home from './components/home' // Correctly import the Hero component
import Payment from './components/payment'
import  Footer  from './lib/footer'
import { Canvas } from './lib/canvas' // Correct the import path
import { Dashbord } from './components/dashbord'
import './styles.css';
import Reset from './Login/reset';
import Send from './Login/send';
import { Loginn } from './Admin/login';
import { Manage } from './Admin/adashbord';
import { DLogin } from './doctor/login'
import { Doctor } from './doctor/doctor'



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/" element={<Home />} /> {/* Use Hero component */}
          <Route path="/payment" element={<Payment />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/canvas" element={<Canvas />} />
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/send" element={<Send />} />
          <Route path="/admin" element={<Loginn />} />
          <Route path="/manage" element={<Manage />} />
          <Route path="/doctor" element={<DLogin />} />
          <Route path='ddash' element={ < Doctor />} />

        </Routes>
      </div>
    </Router>
  )
}

export default App
