import styled from "styled-components";

export const ContainerPagamento= styled.div`
    width: 80vw;
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
    .containerPlanosPagamnetos{
        display: flex;
        flex-direction: column;
        gap: 1rem;
       
    }
`

export const OpcoesPagamentos = styled.div`
    display: flex;
    gap: 1rem;
`

export const Botoes = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    .disabled{
        background-color: gray;
        :hover{
            background-color: gray;
        }
    }

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
`