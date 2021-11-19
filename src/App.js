import {BrowserRouter as Router, Route} from "react-router-dom";
import { Routes } from "react-router";
import './index.css'
import Register from './pages/register/index'
import Reset_Password_Page from './pages/reset-password/index'
import Login from "./pages/login";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/registro" element={<Register/>}/>
        <Route path="/recuperacao-de-senha" element={<Reset_Password_Page/>}/>
      </Routes>
    </Router>
  )
}

export default App
