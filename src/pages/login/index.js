import { Link } from "react-router-dom"
import { ButtonPurple } from "../../components/button"
import { Input, Label } from "../../components/input"
import { Logo } from "../../components/logo"
import login from '../../assets/Login.jpg'
import './index.scss'

function Login () {
    return (

        <div className="login-div">
            <img className="login-image" src={login} alt="gato"/>
            <div className="login-div-form">
                <form>
                    <Logo/>
                    
                    <Label htmlFor="email" >Email</Label>
                    <Input id="email" type="email" required/>
                    <Label htmlFor="password">Senha</Label>
                    <Input id="password" type="password" required minLength="8"/><br/>
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