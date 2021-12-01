import { Link } from "react-router-dom"
import { useNavigate } from "react-router";
import { ButtonPurple } from "../../components/button"
import { Input, Label } from "../../components/input"
import { Logo } from "../../components/logo"
import login from '../../assets/Login.jpg'
import './index.scss'
import { useContext, useState } from "react"
import api from '../../api/api';
import UserContext  from "../../components/usecontext";

function Login () {

    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const [Error, setError] = useState(false)
    const navigate = useNavigate();
    const {user, setUser} = useContext(UserContext)

    function handleSubmit(event) {
        event.preventDefault()

        async function post() {
            const Data = {
                email: Email,
                password: Password,
            }

            api.post('users/login/', Data)
            .then((resp) => {
                sessionStorage.setItem('token', resp.data.auth_token);
                sessionStorage.setItem('id', resp.data.user_id)
                setUser(resp.data.user_id)
                setError(false)
                navigate('/')
            })
            .catch((err) => {
                console.log(err)
                setError(true)
            })
        }
            post()
    }

    return (

        <div className="login-div">
            <img className="login-image" src={login} alt="gato"/>
            <div className="login-div-form">
                <form onSubmit={handleSubmit}>
                    <Logo/>
                    <Label htmlFor="email" >Email</Label>
                    <Input id="email" type="email" required value={Email} onChange={(event) => {setEmail(event.target.value)}}/>
                    <Label htmlFor="password">Senha</Label>
                    <Input id="password" type="password" required minLength="8" value={Password} onChange={(event) => {setPassword(event.target.value)}}/><br/>
                    <Label>{Error?<span className="login-span-error"> *Email e/ou senha incorreto(s)</span>:<></>}</Label>
                    <ButtonPurple>ENTRAR</ButtonPurple>
                </form>
                <div className="login-div-bottom">
                    <Link className="login-link" to="/recuperacao-de-senha">Esqueci minha senha</Link>
                </div>
                <div className="login-div-bottom-2">
                    <span className="login-span-ask">Ainda não tem conta?</span> 
                    <Link className="login-link" to="/registro">Crie sua conta</Link>             
                </div>
            </div>
        </div>
    )
}

export default Login