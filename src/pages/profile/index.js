import { NavBar } from "../../components/navbar/index"
import foto from "../../assets/Cíntia Lorenzzo.jpg"
import "./index.scss"
import { Link } from "react-router-dom"
import camera from "../../assets/icons/Icon awesome-camera.svg"

function Profile() {
    return(
        <div>
            <NavBar/>
            <img className="perfil-photo" src={foto} alt="foto-de-perfil"/>
            <Link className="perfil-photo-link" to="/"><img className="perfil-photo-icon" src={camera} alt="camera"/> Alterar foto de perfil</Link>
        </div>        
    )
}

export default Profile