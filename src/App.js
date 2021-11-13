import {BrowserRouter as Router, Route} from "react-router-dom";
import { Routes } from "react-router";
import './index.css'
import Register from './pages/register'

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Register/>}/>
      </Routes>
    </Router>
  )
}

export default App
