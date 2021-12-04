import styled from 'styled-components';

const Input = styled.input`
    border: 1px solid #C882B4;
    width: 50%;
    height: 1.7em;
    font-size: 1.3em;
    text-align: center;
`;

const InputProfile = styled.input`
    border: 1px solid #C882B4;
    height: 1.7em;
    font-size: 1.1em;
    text-align: center;
    min-width: 45vh;
`;

const InputCreatePost = styled.input`
    border: 1px solid #C882B4;
    height: 2.5em;
    font-size: 1.1em;
    text-align: center;
    min-width: 99%;
    margin-top: 1%;
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

const LabelProfile = styled.label`
    font-size: 1.2em;
    width: 50%;
    display: block;
    color: #C882B4;
    font-weight: 700;
    margin-top: 1em;
`;

const LabelCreatePost = styled.label`
    font-size: 1.2em;
    display: block;
    color: #C882B4;
    font-weight: 700;
    margin-top: 1em;
`;

export {Input,InputProfile,InputCreatePost, Label, LabelProfile, LabelCreatePost}

