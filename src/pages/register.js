import { Link } from 'react-router-dom';
import styled from 'styled-components'
import cadastro from '../assets/Cadastro.jpg'
import Button from '../components/button';
import Input from '../components/input';
import Logo from '../components/logo';



function Register() {

    const Image = styled.img`
        width:50%;
        object-fit: cover;
    `;

    const Subtitle = styled.h3`
        margin: auto;
        margin-bottom: 0.1em;
        margin-top: 1em;
        width: 50%;
        text-align: left;
        color: #C882B4;
    `

    const Ask = styled.h3`
        font-size: 1.3em;
        opacity: 0.4;
        width: auto;
        margin-top: 1.5em;
        margin-right: 6px;
    `;

    return (
        <div className="Register">
            <Image src={cadastro}/>
            <div className="Register-form">
                <Logo/>
                <Subtitle>Nome</Subtitle>
                <Input Type="String"/>
                <Subtitle>Email</Subtitle>
                <Input Type="String"/>
                <Subtitle>Senha</Subtitle>
                <Input Type="Password"/>
                <Subtitle>Confirme sua senha</Subtitle>
                <Input Type="Password"/><br/>
                <Button BackGround="Purple" Label="CADASTRAR"/>

                <div className="Register-Bottom">
                    <Ask>Já possui conta? </Ask> 
                    <Link className="Register-Link" to="/">Faça login</Link>
                </div>
            </div>
        </div>
    )
}

export default Register