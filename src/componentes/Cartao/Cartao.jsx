import React, { useState } from "react";
import { Link } from "react-router-dom";

import {ContainerCartaoInfo, CartaoImg, ContainerCartoes, ModalFinalCompra} from './CartaoStyled'

const Cartao = ({setNoError}) => {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [cardType, setCardType] = useState("");
  const [securityCode, setSecurityCode] = useState("");
  const [expirationMonth, setExpirationMonth] = useState("");
  const [expirationYear, setExpirationYear] = useState("");
  const [fimCompra, setFimCompra] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aqui você pode fazer o que desejar com os dados do cartão
    setFimCompra(true)
  };

  const handleVoltar = () => {
    setNoError(false)
  }

  return (

    
    <ContainerCartoes>
      {fimCompra && <ModalFinalCompra>
            <p>Parabes pela sua compra <strong>{cardName}</strong></p>
           <Link to={'/'}><button className="btnFinal">Voltar para pagina inicial</button></Link> 
      </ModalFinalCompra>}
    <ContainerCartaoInfo onSubmit={handleSubmit}>
      <div>
        <label htmlFor="cardName">Nome no cartão:</label>
        <input
          type="text"
          id="cardName"
          value={cardName}
          onChange={(e) => setCardName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="cardNumber">Número do cartão:</label>
        <input
          type="number"
          id="cardNumber"
          value={cardNumber}
          onChange={(e) => setCardNumber(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="cardType">Bandeira do cartão:</label>
        <select
          id="cardType"
          value={cardType}
          onChange={(e) => setCardType(e.target.value)}
          required
        >
          <option value="">Selecione</option>
          <option value="visa">Visa</option>
          <option value="mastercard">Mastercard</option>
          <option value="amex">American Express</option>
          <option value="elo">Elo</option>
        </select>
      </div>
      <div>
        <label htmlFor="securityCode">Código de segurança:</label>
        <input
          type="number"
          id="securityCode"
          value={securityCode}
          onChange={(e) => setSecurityCode(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="expirationMonth">Mês de expiração:</label>
        <select
          id="expirationMonth"
          value={expirationMonth}
          onChange={(e) => setExpirationMonth(e.target.value)}
          required
        >
          <option value="">Selecione</option>
          <option value="01">01</option>
          <option value="02">02</option>
        </select>
      </div>
      <div>
        <label htmlFor="expirationYear">Ano de expiração:</label>
        <select
          id="expirationYear"
          value={expirationYear}
          onChange={(e) => setExpirationYear(e.target.value)}
          required
        >
          <option value="">Selecione</option>
          <option value="22">2022</option>
          <option value="23">2023</option>
          <option value="24">2024</option>
          <option value="25">2025</option>
        </select>
      </div>
      <div style={{display: 'flex'}}>
      <button type="submit">Finalizar</button>
      <button onClick={handleVoltar}> Voltar</button>
      </div>
      
    </ContainerCartaoInfo>

    <CartaoImg>
    
      <p>Nome no Cartao: <span>{cardName}</span></p>
      <p>Numero do cartao: <span>{cardNumber}</span></p>
      <p>Bandeira: <span>{cardType}</span></p>
      <p>CVC: <span>{securityCode}</span></p>
      <p>Mes: <span>{expirationMonth}</span></p>
      <p>Ano <span>{expirationYear}</span></p>
    </CartaoImg>
    </ContainerCartoes>
    

  );
};

export default Cartao;
