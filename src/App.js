import {BrowserRouter as Router, Route} from "react-router-dom";
import { Routes } from "react-router";
import './index.css'
import Register from './pages/register/index'
import ResetPassword from './pages/resetPassword/index'
import Login from "./pages/login";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/registro" element={<Register/>}/>
        <Route path="/recuperacao-de-senha" element={<ResetPassword/>}/>
      </Routes>
    </Router>
  )
}

export default App
