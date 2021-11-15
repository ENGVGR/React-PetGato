import { Link } from 'react-router-dom';
import styled from 'styled-components'
import cadastro from '../assets/Cadastro.jpg'
import Button from '../components/button';
import { InputPassword, InputString, Label } from '../components/input';
import Logo from '../components/logo';


function Register() {

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

    return (

        <Div>
            <Image src={cadastro}/>
            <DivForm>
                <form>
                    <Logo/>
                    <Label for="name">Nome</Label>
                    <InputString id="name"/>
                    <Label for="email">Email</Label>
                    <InputString id="email"/>
                    <Label for="password">Senha</Label>
                    <InputPassword id="password"/>
                    <Label for="password_confirm">Confirme sua senha</Label>
                    <InputPassword id="password_confirm"/><br/>
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

export default Register