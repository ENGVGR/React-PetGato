import {BrowserRouter as Router, Route} from "react-router-dom";
import { Routes } from "react-router";
import './index.css'
import Register from './pages/register/index'
import ForgotPassword from './pages/forgotPassword/index'
import Login from "./pages/login";
import ResetPassword from "./pages/resetPassword";
import Profile from "./pages/profile";
import Posts from "./pages/posts"
import Teste from "./pages/teste";

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/registro" element={<Register/>}/>
        <Route path="/recuperacao-de-senha" element={<ForgotPassword/>}/>
        <Route path="/recuperar-senha/:id/:token" element={<ResetPassword/>}/>
        <Route path="/perfil" element={<Profile/>}/>
        <Route path="/posts" element={<Posts/>}/>
      </Routes>
    </Router>
  )
}

export default App
