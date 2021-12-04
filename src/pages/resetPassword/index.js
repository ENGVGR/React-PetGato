//SCSS
import './index.scss'
//React
import { useState } from 'react'
import { useNavigate, useParams } from "react-router";
//Components
import { Logo } from "../../components/logo"
import { Input, Label } from '../../components/input'
import { ButtonPurple } from '../../components/button'
//Assets
import Foto_Esqueci_Minha_Senha from '../../assets/Esqueci minha senha.jpg'
//Api
import api from '../../api/api';

export default function ResetPassword() {

    const [Password, setPassword] = useState()
    const [PasswordConfirm, setPasswordConfirm] = useState()
    const [ErrorPassword, setErrorPassword] = useState(false)
    const [ErrorExp, setErrorExp] = useState(false)
    const { id, token } = useParams()  
    const navigate = useNavigate(); 

    function handleSubmit(e) {
        e.preventDefault()
        
        Password===PasswordConfirm?setErrorPassword(false):setErrorPassword(true)

        async function post() {
            const Data = {
                password: Password,
                password_confirmation: PasswordConfirm
            }

            api.patch(`recuperar-senha/${id}/${token}`, Data)
            .then(() => {
                navigate("/login")
            })
            .catch(() => {
                setErrorExp(true)
            })
        }if (Password===PasswordConfirm) { post() }
    }

    return(       
        <div className="resetPassword">
            <img className="resetPassword__image" src={Foto_Esqueci_Minha_Senha} alt="foto"/>
            <div className="resetPassword__form">
                <Logo/>
                <form onSubmit={handleSubmit}>
                    <Label htmlFor="password">Senha</Label>
                    <Input id="password" type="password" value={Password} onChange={(event) => {setPassword(event.target.value)}} required minLength="8"/>
                    <Label htmlFor="password_confirm">Confirme sua senha{ErrorPassword?<span className="resetPassword__form-error"> *Precisa ser a mesma senha!</span>:<></>}</Label>
                    <Input id="password_confirm" type="password" value={PasswordConfirm} onChange={(event) => {setPasswordConfirm(event.target.value)}} required minLength="8"/><br/>
                    {ErrorExp?<span className="resetPassword__form-error"> *Token já utilizado ou expirado!</span>:<></>}
                    <ButtonPurple>ALTERAR A SENHA</ButtonPurple>
                </form>
            </div>
        </div>
    )
}