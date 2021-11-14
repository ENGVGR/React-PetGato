import styled from "styled-components"

function Input({id,type,label}) {

    if (type === "String") {
        return (
            <InputString id={id} label={label}/>
        )
    }
    else if (type === "Password") {
        return (
            <InputPassword id={id} label={label}/>
        )
    }
}

function InputString({id,label}) {

    const Input = styled.input`
        border: 1px solid #C882B4;
        width: 50%;
        height: 1.7em;
        font-size: 1.3em;
        text-align: center;
    `;

    const Label = styled.label`
        font-size: 1.2em;
        width: 50%;
        margin: auto;
        text-align: left;
        display: block;
        color: #C882B4;
        margin-top: 0.6em
    `;

    return (
        <div>
            <Label for={id}>{label}</Label>
            <Input id={id}/>
        </div>
    )
}

function InputPassword({id,label}) {
    
    const Input = styled.input.attrs({type: 'password'})`
        border: 1px solid #C882B4;
        width: 50%;
        height: 1.7em;
        font-size: 1.3em;
        text-align: center;
    `;

    const Label = styled.label`
        font-size: 1.2em;
        width: 50%;
        margin: auto;
        text-align: left;
        display: block;
        color: #C882B4;
        margin-top: 0.6em;
    `;

    return (
        <div>
            <Label for={id}>{label}</Label>
            <Input id={id}/>
        </div>
    )
}

export default Input
