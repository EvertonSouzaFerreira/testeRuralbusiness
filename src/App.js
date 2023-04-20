import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import { useEffect, useState } from "react";

//componentes
import RegistroInfo from "./componentes/registro/RegistroInfo";
import Header from "./componentes/header/Header";
import MetodoPagamento from "./componentes/metodoPagamento/MetodoPagamento.jsx";
import Assinatura from "./componentes/assinatura/Assinatura";
import Cartao from "./componentes/Cartao/Cartao";

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    text-decoration: none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />

      {/* <SignUp /> */}
      {/* <MetodoPagamento /> */}
      {/* <Assinatura /> */}

      <Router>
        <Header />

        <Routes>
          <Route exact path='/' element={<Assinatura />} />
          <Route path='/metodopagamento' element={<MetodoPagamento />} />
          <Route path='/pagamento' element={<RegistroInfo />} />
          <Route path='/cartao' element={<Cartao />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
