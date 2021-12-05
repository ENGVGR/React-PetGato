//SCSS
import './index.scss'
//React
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";
//Components
import { Input, Label } from '../../components/input';
import { Logo } from '../../components/logo'
import { ButtonPurple } from '../../components/button';
//Assets
import cadastro from '../../assets/Cadastro.jpg'
//Api
import api from '../../api/api';

export default function Register() {

    const [Name, setName] = useState()
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const [PasswordConfirm, setPasswordConfirm] = useState()
    const [ErrorPassword, setErrorPassword] = useState(false)
    const [ErrorEmail, setErrorEmail] = useState(false)
    const navigate = useNavigate();

    function handleSubmit(e) {
        e.preventDefault()

        Password===PasswordConfirm?setErrorPassword(false):setErrorPassword(true)

        async function post() {
            const Data = {
                name: Name,
                email: Email,
                password: Password,
                password_confirmation: PasswordConfirm
            }

            api.post('users/', Data)
            .then(() => {
                navigate("/login")
            })
            .catch(() => {
                setErrorEmail(true)
            })
        } if (Password===PasswordConfirm) { post() }
    }

    return (
        <div className="register">
            <img className="register__image" src={cadastro} alt="gato"/>
            <div className="register__form">
                <form onSubmit={handleSubmit}>
                    <Logo/>
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" value={Name} onChange={(event) => {setName(event.target.value)}} required/>
                    <Label htmlFor="email" >Email{ErrorEmail?<span className="register__form-error"> *Já existe uma conta com esse email!</span>:<></>}</Label>
                    <Input id="email" type="email" value={Email} onChange={(event) => {setEmail(event.target.value)}} required/>
                    <Label htmlFor="password">Senha</Label>
                    <Input id="password" type="password" value={Password} onChange={(event) => {setPassword(event.target.value)}} required minLength="8"/>
                    <Label htmlFor="password_confirm">Confirme sua senha{ErrorPassword?<span className="register__form-error"> *Precisa ser a mesma senha!</span>:<></>}</Label>
                    <Input id="password_confirm" type="password" value={PasswordConfirm} onChange={(event) => {setPasswordConfirm(event.target.value)}} required minLength="8"/><br/>
                    <ButtonPurple>CADASTRAR</ButtonPurple>
                </form>
                <div className="register__form-login">
                    <span className="register__form-login__span">Já possui conta?</span> 
                    <Link className="register__form-login__link" to="/login">Faça login</Link>
                </div>
            </div>
        </div>
    )
}