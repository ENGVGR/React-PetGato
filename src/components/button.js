import styled from 'styled-components';

const ButtonPurple = styled.button`
    cursor: pointer;
    font-size: 1.4em;
    width: auto;
    height: 2em;
    margin-top: 1.1em;
    background-color: #C882B4;
    color: white;
    border: none;
    border-radius: 5px;
    &:hover {
        background-color: #BA66A3;
        color: white;
    }
`;

const ButtonWhite = styled.button`
    cursor: pointer;
    font-size: 1.5em;
    width: 6em;
    height: 2em;
    margin-top: 1.1em;
    background-color: #ffffff;
    color: #707070;
    border: solid 1px #C882B4;
    border-radius: 5px;
    &:hover {
        background-color: #C882B4;
        color: #ffffff;
    }
`;

export {ButtonPurple, ButtonWhite}