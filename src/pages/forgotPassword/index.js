//SCSS
import './index.scss'
//React
import { useState } from 'react'
import { Link } from 'react-router-dom'
//Components
import { Logo } from '../../components/logo'
import { Input, Label } from '../../components/input'
import { ButtonPurple } from '../../components/button'
//Assets
import Foto_Esqueci_Minha_Senha from '../../assets/Esqueci minha senha.jpg'
//Api
import api from '../../api/api';

export default function ForgotPassword() {

    const [Email, setEmail] = useState()
    const [Error, setError] = useState(false)
    const [Confirmation, setConfirmation] = useState(false)

    function handleSubmit(e) {
        e.preventDefault()

        async function post() {
            const Data = {
                email: Email
            }

            api.post('users/recuperar-senha/', Data)
            .then(() => {
                setConfirmation(true)
                setError(false)
            })
            .catch(() => {
                setError(true)
            })
        }post()
    }

    return(
        <div className="forgotPassword">
            <img className="forgotPassword__image" src={Foto_Esqueci_Minha_Senha} alt="foto"/>
            <div className="forgotPassword__form">
                <Logo/>
                <form onSubmit={handleSubmit}>
                    <Label htmlFor="name">Email</Label>
                    <Input type="email" required value={Email} onChange={(event)=>(setEmail(event.target.value))}/>
                    <Label>{Error?<span className="forgotPassword__form-error"> *Email incorreto</span>:<span className="forgotPassword__form-message">Insira seu email para recuperar a senha</span>}</Label>
                    {Confirmation?<span className="forgotPassword__form-confirmation"> *Link para alteração de senha enviado para o email informado!</span>:<></>}
                    <ButtonPurple>RECUPERAR SENHA</ButtonPurple>                   
                </form>
                <div className="forgotPassword__form-login">
                    <span className="forgotPassword__form-login__span">Lembrou a senha?</span> 
                    <Link className="forgotPassword__form-login__link" to="/login">Faça login</Link>
                </div>
                <div className="forgotPassword__form-register">
                    <span className="forgotPassword__form-register__span">Ainda não tem conta?</span> 
                    <Link className="forgotPassword__form-register__link" to="/registro">Cadastre-se aqui</Link>
                </div>
            </div>
        </div>
    )
}