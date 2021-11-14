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

    const Ask = styled.span`
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
                <form>
                    <Logo/>
                    <Input id="name" type="String" label="Nome"/>
                    <Input id="email" type="String" label="Email"/>
                    <Input id="password" type="Password" label="Senha"/>
                    <Input id="confirm_password" type="Password" label="Confirme sua senha"/><br/>
                    <Button BackGround="Purple" Label="CADASTRAR"/>
                </form>
                <div className="Register-Bottom">
                    <Ask>Já possui conta? </Ask> 
                    <Link className="Register-Link" to="/">Faça login</Link>
                </div>
            </div>
        </div>
    )
}

export default Register