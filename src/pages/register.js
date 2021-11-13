import styled from 'styled-components'
import cadastro from '../assets/Cadastro.jpg'
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

    const Button = styled.button`
        cursor: pointer;
        font-size: 1.4em;
        width: 8em;
        height: 2em;
        margin-top: 1.1em;
        background-color: #C882B4;
        color white;
        border: none;
        border-radius: 5px;
        &:hover {
            background-color: #BA66A3;
            color: white;
        }
    `;

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
                <Button>CADASTRAR</Button>

                <div className="Register-Botton">
                    <Ask>Já possui conta? </Ask> 
                    <a className="Register-Link" href>Faça login</a>
                </div>
            </div>
        </div>
    )
}

export default Register