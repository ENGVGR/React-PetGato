import './index.scss'
import Foto_Esqueci_Minha_Senha from '../../assets/Esqueci minha senha.jpg'
import { Link } from 'react-router-dom'
import { Logo } from '../../components/logo'
import { Input, Label } from '../../components/input'
import { ButtonPurple } from '../../components/button'

function ResetPassword() {

    return(

        <div className="reset-password-div">
            <img className="reset-password-image" src={Foto_Esqueci_Minha_Senha} alt="foto"/>
            <div className="reset-password-div-form">
                <Logo/>
                <form>
                    <Label htmlFor="name">Email</Label>
                    <Input type="email" required/>
                    <span className="reset-password-span-message">Insira seu email para recuperar a senha</span>
                    <ButtonPurple>RECUPERAR SENHA</ButtonPurple>
                </form>
                <div className="reset-password-div-bottom">
                    <span className="reset-password-span-ask">Lembrou a senha?</span> 
                    <Link className="reset-password-link" to="/">Faça login</Link>
                </div>
                <div className="reset-password-div-bottom-2">
                    <span className="reset-password-span-ask">Ainda não tem conta?</span> 
                    <Link className="reset-password-link" to="/registro">Cadastre-se aqui</Link>
                </div>
            </div>
        </div>
    )
}

export default ResetPassword