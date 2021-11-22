import './index.scss'
import Foto_Esqueci_Minha_Senha from '../../assets/Esqueci minha senha.jpg'
import { Link } from 'react-router-dom'
import { Logo } from '../../components/logo'
import { Input, Label } from '../../components/input'
import { ButtonPurple } from '../../components/button'
import { useState } from 'react'
import api from '../../api/api';

function ForgotPassword() {

    const [Email, setEmail] = useState()
    const [Error, setError] = useState(false)
    const [Confirmation, setConfirmation] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()

        async function post() {
            const Data = {
                email: Email
            }

            api.post('users/recuperar-senha/', Data)
            .then((resp) => {
                setConfirmation(true)
                setError(false)
            })
            .catch((err) => {
                setError(true)
            })
        }
            post()
    }

    return(

        <div className="forgot-password-div">
            <img className="forgot-password-image" src={Foto_Esqueci_Minha_Senha} alt="foto"/>
            <div className="forgot-password-div-form">
                <Logo/>
                <form onSubmit={handleSubmit}>
                    <Label htmlFor="name">Email</Label>
                    <Input type="email" required value={Email} onChange={(event)=>(setEmail(event.target.value))}/>
                    <Label>{Error?<span className="forgot-password-span-error"> *Email incorreto</span>:<span className="forgot-password-span-message">Insira seu email para recuperar a senha</span>}</Label>
                    {Confirmation?<span className="forgot-password-span-error"> *Link para alteração de senha enviado para o email informado!</span>:<span></span>}
                    <ButtonPurple>RECUPERAR SENHA</ButtonPurple>
                    
                </form>
                <div className="forgot-password-div-bottom">
                    <span className="forgot-password-span-ask">Lembrou a senha?</span> 
                    <Link className="forgot-password-link" to="/">Faça login</Link>
                </div>
                <div className="forgot-password-div-bottom-2">
                    <span className="forgot-password-span-ask">Ainda não tem conta?</span> 
                    <Link className="forgot-password-link" to="/registro">Cadastre-se aqui</Link>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword