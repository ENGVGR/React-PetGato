import styled from "styled-components";


function Button({backGround, label}) {

    if (backGround === "Purple") {
        return (
            <ButtonBackGroundPurple label={label}/>
        )
    }
}

function ButtonBackGroundPurple({label}) {
    
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

    return (
        <Button>{label}</Button>
    )
}

export default Button