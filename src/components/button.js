import styled from "styled-components";


function Button(props) {

    if (props.BackGround === "Purple") {
        return (
            <ButtonBackGroundPurple Label={props.Label}/>
        )
    }
}

function ButtonBackGroundPurple({Label}) {
    
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
        <Button>{Label}</Button>
    )
}

export default Button