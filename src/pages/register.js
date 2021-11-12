import styled from 'styled-components'
import cadastro from '../assets/Cadastro.jpg'



function Register() {

    const Image = styled.img`
        width:50%;
        object-fit: cover;
    `;

    return (
        <div className="Register">
            <Image src={cadastro}/>
            <div className="Register-Formulario">Teste</div>
        </div>
    )
}

export default Register