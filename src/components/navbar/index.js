import logo from "../../assets/gatinho_petgato_branco.svg"
import "./index.scss"
import { Link } from "react-router-dom"
import { useContext } from "react"
import UserContext from "../usecontext"
import { useNavigate } from "react-router";

const NavBar = ({props}) => {

    const {user, setUser} = useContext(UserContext)
    const navigate = useNavigate();
    console.log(user)

    function Logout() {
        sessionStorage.setItem('id', "")
        sessionStorage.setItem('token', "")
        sessionStorage.setItem('admin', "")
        setUser("")
        navigate("/login")
    }

    return(
        <div className="navbar-div">
            <img className="navbar-img" src={logo} alt="logo"/>
            <div className="navbar-div-link">
                <Link className={props.emphasis_t1?"navbar-link-2":"navbar-link"} to={props.link_1}>{props.text_1}</Link>
                <Link className={props.emphasis_t2?"navbar-link-2":"navbar-link"} to={props.link_2}>{props.text_2}</Link>
                <Link className={props.emphasis_t3?"navbar-link-2":"navbar-link"} to={props.link_3}>{props.text_3}</Link>
                <Link className={props.emphasis_t4?"navbar-link-2":"navbar-link"} to={props.link_4}>{props.text_4}</Link>
                {props.text_6!==""?<Link className={props.emphasis_t6?"navbar-link-2":"navbar-link"} to={props.link_6}>{props.text_6}</Link>:<></>}
                {props.text_5!==""?<button className="navbar-sair" onClick={() => {Logout()}}>{props.text_5}</button>:<></>}             
            </div>
            
        </div>
    )
}

export { NavBar }