import styled from 'styled-components';
import logo from '../assets/gatinho_petgato.svg'

function Logo() {

    const Image = styled.img `
        width: 170px
    `;

    return (
        <Image src={logo}/>
    )
}

export default Logo