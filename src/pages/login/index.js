//SCSS
import './index.scss'
//React
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
//Components
import { ButtonPurple } from "../../components/button"
import { Input, Label } from "../../components/input"
import { Logo } from "../../components/logo"
import UserContext  from "../../components/useContext/userContext.js"
//Assets
import login from '../../assets/Login.jpg'
//Api
import api from '../../api/api'

export default function Login () {

    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const [Error, setError] = useState(false)
    const {setUser} = useContext(UserContext)
    
    function handleSubmit(e) {
        e.preventDefault()

        async function post() {
            const Data = {
                email: Email,
                password: Password,
            }

            api.post('users/login/', Data)
            .then((resp) => {
                sessionStorage.setItem('token', resp.data.auth_token);
                sessionStorage.setItem('id', resp.data.user_id)
                sessionStorage.setItem('admin', resp.data.is_Admin)
                setUser(resp.data.user_id)
                setError(false)
            })
            .catch((err) => {
                console.log(err)
                setError(true)
            })
        }post()
    }

    return (
        <div className="login">
            <img className="login__image" src={login} alt="gato"/>
            <div className="login__form">
                <form onSubmit={handleSubmit}>
                    <Logo/>
                    <Label htmlFor="email" >Email</Label>
                    <Input id="email" type="email" required value={Email} onChange={(event) => {setEmail(event.target.value)}}/>
                    <Label htmlFor="password">Senha</Label>
                    <Input id="password" type="password" required minLength="8" value={Password} onChange={(event) => {setPassword(event.target.value)}}/><br/>
                    <Label>{Error?<span className="login__form-error"> *Email e/ou senha incorreto(s)</span>:<></>}</Label>
                    <ButtonPurple>ENTRAR</ButtonPurple>
                </form>
                <div className="login__form-forgotPassword">
                    <Link className="login__form-forgotPassword__link" to="/recuperacao-de-senha">Esqueci minha senha</Link>
                </div>
                <div className="login__form-register">
                    <span className="login__form-register__span">Ainda não tem conta?</span> 
                    <Link className="login__form-register__link" to="/registro">Crie sua conta</Link>             
                </div>
            </div>
        </div>
    )
}