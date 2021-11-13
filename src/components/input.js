import styled from "styled-components"

function Input(Type) {

    function InputString() {

        const Input = styled.input`
            border: 1px solid #C882B4;
            width: 50%;
            height: 1.7em;
            font-size: 1.3em;
            text-align: center;
        `;

        return (
            <Input/>
        )
    }

    function InputPassword() {
        const Input = styled.input.attrs({type: 'password'})`
            border: 1px solid #C882B4;
            width: 50%;
            height: 1.7em;
            font-size: 1.3em;
            text-align: center;
        `

        return (
            <Input/>
        )
    }

    if (Type.Type === "String") {
        return (
            <InputString/>
        )
    }
    else if (Type.Type === "Password") {
        return (
            <InputPassword/>
        )
    }
    
}

export default Input
