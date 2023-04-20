import styled from "styled-components"
import logo from '../../imgs/logo-mobile.png'

export const ContainerCartoes = styled.div`
    display: flex;

    @media (max-width: 880px) {
        flex-direction: column;
        gap: 1rem;
    }
`

export const ContainerCartaoInfo= styled.form`
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

export const CartaoImg = styled.div`
    width: 400px;
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: auto;
    padding: 5rem;
    gap: 1rem;
    padding: .5rem;
    box-shadow: 2px 2px 5px 0px #000000;
    border-radius: 15px;
    background-image: url(${logo});
    background-size: 70px;
   
    background-repeat: no-repeat;
    font-size: smaller;

`

export const ModalFinalCompra = styled.div`
    position: absolute;
    width: 100vw;
    height: 70vh;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    z-index: 1;
    background: #000000cf;

    p{
        color: white;
    }

    .btnFinal{
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
    
`