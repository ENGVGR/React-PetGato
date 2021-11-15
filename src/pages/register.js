import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import cadastro from '../assets/Cadastro.jpg'
import Button from '../components/button';
import { Input, Label } from '../components/input';
import Logo from '../components/logo';


function Register() {

    const [Name, setName] = useState('')
    const [Email, setEmail] = useState()
    const [Password, setPassword] = useState()
    const [PasswordConfirm, setPasswordConfirm] = useState()

    function handleSubmit(event) {
        event.preventDefault()

        async function post() {
            const Data = {
                name: Name,
                email: Email,
                password: Password,
                password_confirmation: PasswordConfirm
            }

            console.log(Data)
        }
        post()
    }


    return (

        <Div>
            <Image src={cadastro}/>
            <DivForm>
                <form onSubmit={handleSubmit}>
                    <Logo/>
                    <Label for="name">Nome</Label>
                    <Input id="name" value={Name} onChange={(event) => {setName(event.target.value)}} required/>
                    <Label for="email" >Email</Label>
                    <Input id="email" type="email" value={Email} onChange={(event) => {setEmail(event.target.value)}} required/>
                    <Label for="password">Senha</Label>
                    <Input id="password" type="password" value={Password} onChange={(event) => {setPassword(event.target.value)}} required minLength="8"/>
                    <Label for="password_confirm">Confirme sua senha</Label>
                    <Input id="password_confirm" type="password" value={PasswordConfirm} onChange={(event) => {setPasswordConfirm(event.target.value)}} required minLength="8"/><br/>
                    <Button backGround="Purple" label="CADASTRAR"/>
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

export default Register