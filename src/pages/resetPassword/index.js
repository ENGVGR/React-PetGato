import './index.scss'
import { Logo } from "../../components/logo"
import Foto_Esqueci_Minha_Senha from '../../assets/Esqueci minha senha.jpg'
import { Input, Label } from '../../components/input'
import { ButtonPurple } from '../../components/button'
import { useState } from 'react'
import api from '../../api/api';
import { useParams } from 'react-router'

function ResetPassword() {

    const [Password, setPassword] = useState()
    const [PasswordConfirm, setPasswordConfirm] = useState()
    const [ErrorPassword, setErrorPassword] = useState(false)
    const [ErrorExp, setErrorExp] = useState(false)
    const [Confirmation, setConfirmation] = useState(false)
    const { id, token } = useParams()
    
    

    function handleSubmit(event) {
        event.preventDefault()
        

        Password===PasswordConfirm?setErrorPassword(false):setErrorPassword(true)

        async function post() {
            const Data = {
                password: Password,
                password_confirmation: PasswordConfirm
            }


            api.patch(`recuperar-senha/${id}/${token}`, Data)
            .then((resp) => {
                console.log(resp)
                setConfirmation(true)
            })
            .catch((err) => {
                console.log(err)
                setErrorExp(true)
            })
        }
        
        if (ErrorPassword === false) {
            post()
        }
    }

    return(
        
        <div className="reset-password-div">
        <img className="reset-password-image" src={Foto_Esqueci_Minha_Senha} alt="foto"/>
        <div className="reset-password-div-form">
            <Logo/>
            <form onSubmit={handleSubmit}>
                <Label htmlFor="password">Senha</Label>
                <Input id="password" type="password" value={Password} onChange={(event) => {setPassword(event.target.value)}} required minLength="8"/>
                <Label htmlFor="password_confirm">Confirme sua senha{ErrorPassword?<span className="reset-password-span-error"> *Precisa ser a mesma senha!</span>:<span></span>}</Label>
                <Input id="password_confirm" type="password" value={PasswordConfirm} onChange={(event) => {setPasswordConfirm(event.target.value)}} required minLength="8"/><br/>
                {ErrorExp?<span className="reset-password-span-error"> *Token já utilizado ou expirado!</span>:<></>}
                {Confirmation?<span className="reset-password-span-error"> *Senha alterada</span>:<></>}
                <ButtonPurple>ALTERAR A SENHA</ButtonPurple>
            </form>
        </div>
    </div>

    )
}

export default ResetPassword