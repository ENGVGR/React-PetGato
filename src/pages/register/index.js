import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/api';
import cadastro from '../../assets/Cadastro.jpg'
import { Input, Label } from '../../components/input';
import './index.scss'
import { Logo } from '../../components/logo'
import { ButtonPurple } from '../../components/button';


function Register() {

    const [Name, setName] = useState()
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const [PasswordConfirm, setPasswordConfirm] = useState()
    const [ErrorPassword, setErrorPassword] = useState(false)
    const [ErrorEmail, setErrorEmail] = useState(false)

    function handleSubmit(event) {
        event.preventDefault()

        Password===PasswordConfirm?setErrorPassword(false):setErrorPassword(true)

        async function post() {
            const Data = {
                name: Name,
                email: Email,
                password: Password,
                password_confirmation: PasswordConfirm
            }

            api.post('users/', Data)
            .then((resp) => {
                console.log(resp)
            })
            .catch((err) => {
                console.log(err)
                setErrorEmail(true)
            })
        }
        
        if (ErrorPassword === false) {
            post()
        }
    }


    return (

        <div className="register-div">
            <img className="register-image" src={cadastro} alt="gato"/>
            <div className="register-div-form">
                <form onSubmit={handleSubmit}>
                    <Logo/>
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" value={Name} onChange={(event) => {setName(event.target.value)}} required/>
                    <Label htmlFor="email" >Email{ErrorEmail?<span className="register-span-error"> *Já existe uma conta com esse email!</span>:<></>}</Label>
                    <Input id="email" type="email" value={Email} onChange={(event) => {setEmail(event.target.value)}} required/>
                    <Label htmlFor="password">Senha</Label>
                    <Input id="password" type="password" value={Password} onChange={(event) => {setPassword(event.target.value)}} required minLength="8"/>
                    <Label htmlFor="password_confirm">Confirme sua senha{ErrorPassword?<span className="register-span-error"> *Precisa ser a mesma senha!</span>:<></>}</Label>
                    <Input id="password_confirm" type="password" value={PasswordConfirm} onChange={(event) => {setPasswordConfirm(event.target.value)}} required minLength="8"/><br/>
                    <ButtonPurple>CADASTRAR</ButtonPurple>
                </form>
                <div className="register-div-bottom">
                    <span className="register-span-ask">Já possui conta?</span> 
                    <Link className="register-link" to="/">Faça login</Link>
                </div>
            </div>
        </div>
    )
}

export default Register