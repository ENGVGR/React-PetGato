import styled from 'styled-components'
import cadastro from '../assets/Cadastro.jpg'



function Register() {

    const Image = styled.img`
        width:55%;
    `;

    return (
        <div className="Register">
            <Image src={cadastro}/>
            <div style={{"border": "2px solid green"}}>Teste</div>
        </div>
    )
}

export default Register