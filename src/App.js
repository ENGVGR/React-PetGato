import {BrowserRouter as Router, Route} from "react-router-dom";
import { Routes } from "react-router";
import './index.css'
import Register from './pages/register'
import Reset_Password_Page from './pages/reset-password'

function App() {
  return (

    <Router>
      <Routes>
        <Route exact path="/" element={<Register/>}/>
        <Route path="/reset-password" element={<Reset_Password_Page/>}/>
      </Routes>
    </Router>
  )
}

export default App
