import './Styles/reset-password.css'
import Foto_Esqueci_Minha_Senha from '../assets/Esqueci minha senha.jpg'
import Logo from '../components/logo'
import { InputString, Label } from '../components/input'
import Button from '../components/button'

const Reset_Password_Page = () => {
    return(
        <div className="page-container">
            <div className="image-container">
                <img className="image" src={Foto_Esqueci_Minha_Senha}></img>
            </div>
            <div className="content-container">
                <div className="content">
                    <Logo/>
                    <div className="form-container">
                        <label for="email">Email</label>
                        <input id="email"></input>
                        <span>Insira seu email para recuperar a senha</span>
                    </div>
                    <Button backGround="Purple" label="RECUPERAR SENHA"/>
                    <div className="links-text">
                        <span>Lembrou a senha? <a href="/">Faça Login</a></span>
                        <span>Ainda não tem conta? <a href="/">Cadastre-se aqui</a></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reset_Password_Page