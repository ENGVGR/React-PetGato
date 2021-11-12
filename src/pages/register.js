import styled from 'styled-components'
import cadastro from '../assets/Cadastro.jpg'
import Input from '../components/input';
import Logo from '../components/logo';



function Register() {

    const Image = styled.img`
        width:50%;
        object-fit: cover;
    `;

    return (
        <div className="Register">
            <Image src={cadastro}/>
            <div className="Register-Formulario">
                <Logo/>
                <p>Nome</p>
                <Input/>
                <Input/>
                <Input/>
                <Input/>
            </div>
        </div>
    )
}

export default Register