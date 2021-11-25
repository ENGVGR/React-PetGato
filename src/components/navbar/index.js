import logo from "../../assets/gatinho_petgato_branco.svg"
import "./index.scss"
import { Link } from "react-router-dom"

const NavBar = () => {
    return(
        <div className="navbar-div">
            <img className="navbar-img" src={logo} alt="logo"/>
            <div className="navbar-div-link">
                <Link className="navbar-link" to="/">Página inicial</Link>
                <Link className="navbar-link" to="/">Sobre nós</Link>
                <Link className="navbar-link" to="/">Fale conosco</Link>
                <Link className="navbar-link-2" to="/">Minha conta</Link>
            </div>
            
        </div>
    )
}

export {NavBar}