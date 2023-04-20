

import {ContainerAssinatura} from './AssinaturaStyled'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';


function Formulario() {
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmarSenha, setConfirmarSenha] = useState('');
    const [mostrarSenha, setMostrarSenha] = useState(false);
    const [cpfErro, setCpfErro] = useState(true);
    const [senhaErro, setSenhaErro] = useState(true);
    const [confirmarSenhaErro, setConfirmarSenhaErro] = useState(true);
    const [valid, setValid] = useState(false);
    const [termosAceitos, setTermosAceitos] = useState(false);

    const handleSubmit = (event) => {
      event.preventDefault();
      let isValid = true;
    
      if (cpf.length < 4) {
        setCpfErro(true);
        isValid = false;
      } else {
        setCpfErro(false);
      }
    
      if (senha.length < 4) {
        setSenhaErro(true);
        isValid = false;
      } else {
        setSenhaErro(false);
      }
    
      if (confirmarSenha.length < 4) {
        setConfirmarSenhaErro(true);
        isValid = false;
      } else if (confirmarSenha !== senha) {
        setConfirmarSenhaErro(true);
        setSenhaErro(true);
        isValid = false;
      } else {
        setConfirmarSenhaErro(false);
        setSenhaErro(false);
      }
    
      setValid(isValid);
    };

    const handleMostrarSenha = () => {
        setMostrarSenha(!mostrarSenha);
      };
    
    return (
      <ContainerAssinatura onSubmit={handleSubmit}>
        <div>
          <label htmlFor="cpf">CPF:</label><br />
          <input
            type="number"
            id="cpf"
            name="cpf"
            value={cpf}
            onChange={(event) => setCpf(event.target.value)}
            className={cpfErro ? 'erro' : ''}
          />
          {cpfErro && cpf.length <= 3 && <span className="mensagem-erro">CPF obrigatório</span>}
        </div>
    
        <div>
          <label htmlFor="senha">Senha:</label><br />
          <input
            type={mostrarSenha ? 'text' : 'password'}
            id="senha"
            name="senha"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
            className={senhaErro ? 'erro' : ''}
          />
          <input
            type="checkbox"
            id="mostrar_senha"
            name="mostrar_senha"
            checked={mostrarSenha}
            onChange={handleMostrarSenha}
          />
          {senhaErro && senha.length <= 3 && <span className="mensagem-erro">Senha obrigatória</span>}
        </div>
    
        <div>
          <label htmlFor="confirmar_senha">Confirmar senha:</label><br />
          <input
            type={mostrarSenha ? 'text' : 'password'}
            id="confirmar_senha"
            name="confirmar_senha"
            value={confirmarSenha}
            onChange={(event) => setConfirmarSenha(event.target.value)}
            className={confirmarSenhaErro ? 'erro' : ''}
          />
          {confirmarSenhaErro && confirmarSenha.length <= 3 && <span className="mensagem-erro">As senhas devem ser iguais</span>}
        </div>
    
        <div>
          <input
            type="checkbox"
            id="termos_aceitos"
            name="termos_aceitos"
            checked={termosAceitos}
            onChange={(event) => setTermosAceitos(event.target.checked)}
          />
          <label htmlFor="termos_aceitos">Li e concordo com os termos de uso</label>
        </div>
    
        <button type="submit" disabled={cpfErro || senhaErro || confirmarSenhaErro || !termosAceitos}>
        <Link to= {termosAceitos? "/metodopagamento":''}>Link</Link></button>
      

    </ContainerAssinatura>
  );
}

export default Formulario;
