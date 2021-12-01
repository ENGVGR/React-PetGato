import {BrowserRouter as Router, Route} from "react-router-dom";
import { Routes } from "react-router";
import './index.css';
import Register from './pages/register/index';
import ForgotPassword from './pages/forgotPassword/index';
import Login from "./pages/login";
import ResetPassword from "./pages/resetPassword";
import Profile from "./pages/profile";
import Posts from "./pages/posts";
import Post from './pages/specificPost/index'
import  UserContext  from "./components/usecontext";
import { useState } from "react";
import { CreatePost } from "./pages/createPost";

function App() {

  const [user, setUser] = useState(sessionStorage.getItem('id'))

  return (

    <UserContext.Provider value={{user, setUser}}>
      <Router>
        <Routes>
          <Route path="/" element={<Posts/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registro" element={<Register/>}/>
          <Route path="/recuperacao-de-senha" element={<ForgotPassword/>}/>
          <Route path="/recuperar-senha/:id/:token" element={<ResetPassword/>}/>
          <Route path="/perfil" element={<Profile/>}/>  
          <Route path="/post/:post_id" element={<Post/>}/>
          <Route path="/create-post" element={<CreatePost/>}/>
        </Routes>
      </Router>
    </UserContext.Provider>
  )
}

export default App
