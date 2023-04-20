import styled from "styled-components";

export const ContainerSignUp = styled.form`
width: 80vw;
height: fit-content;
display: flex;
flex-direction: column;
margin: auto;
justify-items: center;
align-content: center;
gap: 1rem;
padding: .5rem;
box-shadow: 2px 2px 5px 0px #000000;
background-color: aliceblue;

.subContainerForm{
    width: 100%;
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    
    padding: 1rem;
   
    input, select{
        width: 80%;
        min-width: 300px;
        border-radius: #c3c3c3 10px solid;
        
    }
}
 .error{
    border: solid 1px red;
}
.error-message{
    color: red;
}

p{
    font-size: 8px;
}
div{
    display: flex;
}
`

export const Titulo = styled.h1`
    text-align: center;
    margin: 1rem;
`

export const Btn = styled.button`
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
`

