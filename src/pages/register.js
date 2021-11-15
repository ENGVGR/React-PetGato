import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import api from '../api/api';
import cadastro from '../assets/Cadastro.jpg'
import { ButtonPurple } from '../components/button';
import { Input, Label } from '../components/input';
import { Logo } from '../components/logo';



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

        <Div>
            <Image src={cadastro}/>
            <DivForm>
                <form onSubmit={handleSubmit}>
                    <Logo/>
                    <Label htmlFor="name">Nome</Label>
                    <Input id="name" value={Name} onChange={(event) => {setName(event.target.value)}} required/>
                    <Label htmlFor="email" >Email{ErrorEmail?<ErrorMensage> *Já existe uma conta com esse email!</ErrorMensage>:<ErrorMensage></ErrorMensage>}</Label>
                    <Input id="email" type="email" value={Email} onChange={(event) => {setEmail(event.target.value)}} required/>
                    <Label htmlFor="password">Senha</Label>
                    <Input id="password" type="password" value={Password} onChange={(event) => {setPassword(event.target.value)}} required minLength="8"/>
                    <Label htmlFor="password_confirm">Confirme sua senha{ErrorPassword?<ErrorMensage> *Precisa ser a mesma senha!</ErrorMensage>:<ErrorMensage></ErrorMensage>}</Label>
                    <Input id="password_confirm" type="password" value={PasswordConfirm} onChange={(event) => {setPasswordConfirm(event.target.value)}} required minLength="8"/><br/>
                    <ButtonPurple>CADASTRAR</ButtonPurple>
                </form>
                <DivBottom>
                    <Ask>Já possui conta?</Ask> 
                    <StyledLink to="/">Faça login</StyledLink>
                </DivBottom>
            </DivForm>
        </Div>
    )
}

const Div = styled.div`
        width: auto;
        min-height:100vh;
        display: flex;
    `;

const Image = styled.img`
    width:50%;
    object-fit: cover;
`;
const DivForm = styled.div`
    width: 50%;
    text-align: center;
    background-color: #FBE9F6;
    padding-top: 3em;
`;
const DivBottom = styled.div`
    display: flex;
    margin: auto;
    width: 100%;
    justify-content: center;
`;
const Ask = styled.span`
    font-size: 1.3em;
    opacity: 0.4;
    width: auto;
    margin-top: 1.5em;
    margin-right: 6px;
`;
const StyledLink = styled(Link)`
    color: #BA66A3;
    font-size: 1.3em;
    margin-top: 1.5em;
    font-weight: bold;
    width: auto;
    text-decoration: none;
    cursor: pointer;
    &:hover {
        color: #C882B4;
    }
`;

const ErrorMensage = styled.span`
    color: red;
    font-size: 0.8em;
    display: block;
`

export default Register