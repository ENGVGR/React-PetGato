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
    
    

    return (
        <div className="Register">
            <Image src={cadastro}/>
            <div className="Register-Formulario">
                <Logo/>
                <Subtitle>Nome</Subtitle>
                <Input/>
                <Subtitle>Email</Subtitle>
                <Input/>
                <Subtitle>Senha</Subtitle>
                <Input/>
                <Subtitle>Confirme sua senha</Subtitle>
                <Input/>
            </div>
        </div>
    )
}

export default Register