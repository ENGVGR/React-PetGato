import styled from "styled-components";


function Button(prop) {
    
    function ButtonBackGroundPurple(Label) {
    
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
            <Button>{Label.Label}</Button>
        )
    }

    if (prop.BackGround === "Purple") {
        return (
            <ButtonBackGroundPurple Label={prop.Label}/>
        )
    }
}

export default Button