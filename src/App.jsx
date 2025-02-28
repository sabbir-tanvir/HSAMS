import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import { Login } from './components/Auth/login'
import { RegisterUser } from './components/Auth/registration'
import Home from './components/Home/home' // Correctly import the Hero component
import Payment from './components/Payment/payment'
import { Canvas } from './components/Home/lib/canvas' // Correct the import path
import { Dashbord } from './components/Home/dashbord'
import './styles.css';
import Reset from './components/Auth/reset';
import Send from './components/Auth/send';
import { Loginn } from './components/Admin/login';
import { Manage } from './components/Admin/adashbord';
import { DLogin } from './components/Doctor/login';
import { Doctor } from './components/Doctor/doctor';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<RegisterUser />} />
          <Route path="/" element={<Home />} /> {/* Use Hero component */}
          <Route path="/payment" element={<Payment />} />
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
