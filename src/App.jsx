import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Basic from './components/login'


function App() {

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Basic />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
