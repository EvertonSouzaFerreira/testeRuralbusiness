import styled from "styled-components"

export const ContainerAssinatura= styled.form`
    width: 400px;
    height: fit-content;
    display: flex;
    flex-direction: column;
    margin: auto;
    padding: 5rem;
    gap: 1rem;
    padding: .5rem;
    box-shadow: 2px 2px 5px 0px #000000;
    /* background-color: aliceblue; */
    border-radius: 15px;

    button{
    width: 200px;
    height: 40px;
    border-radius: 5px;
    background: #49A149;
    border: none;
    color: white;
    box-shadow: 2px 2px 5px 0px #000000;
    :hover{
        background: #1f721f;
    }
    }
    .mensagem-erro{
        color: red;
    }
    .erro{
       border: solid red 1px;
    }
    .containerInput{
        display: flex;
        gap: 1rem;
    }
`