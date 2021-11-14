import styled from "styled-components"

function Input({type}) {

    if (type === "String") {
        return (
            <InputString/>
        )
    }
    else if (type === "Password") {
        return (
            <InputPassword/>
        )
    }
}

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
    `;

    return (
        <Input/>
    )
}

export default Input
