import { useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api/api';
import cadastro from '../../assets/Cadastro.jpg'
import '../../components/button/index.scss';
import '../../components/input/index.scss';
import { Logo } from '../../components/logo/index.js';
import '../Register/index.scss'


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
                    <label className="label-form" htmlFor="name">Nome</label>
                    <input className="input-form" id="name" value={Name} onChange={(event) => {setName(event.target.value)}} required/>
                    <label className="label-form" htmlFor="email" >Email{ErrorEmail?<span className="register-span-error"> *Já existe uma conta com esse email!</span>:<span></span>}</label>
                    <input className="input-form" id="email" type="email" value={Email} onChange={(event) => {setEmail(event.target.value)}} required/>
                    <label className="label-form" htmlFor="password">Senha</label>
                    <input className="input-form" id="password" type="password" value={Password} onChange={(event) => {setPassword(event.target.value)}} required minLength="8"/>
                    <label className="label-form" htmlFor="password_confirm">Confirme sua senha{ErrorPassword?<span className="register-span-error"> *Precisa ser a mesma senha!</span>:<span></span>}</label>
                    <input className="input-form" id="password_confirm" type="password" value={PasswordConfirm} onChange={(event) => {setPasswordConfirm(event.target.value)}} required minLength="8"/><br/>
                    <button className="button-purple">CADASTRAR</button>
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