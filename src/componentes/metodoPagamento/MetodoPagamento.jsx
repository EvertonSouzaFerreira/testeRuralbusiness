import React, {useState} from 'react'

import {ContainerPagamento, OpcoesPagamentos,Botoes} from './MetodoPagamentoStyled'
import Planos from './Planos';
import MesesPagamento from './CartaoTamanhoPlano';
import PlanoBoleto from './PlanosBoletos';
import { Link } from 'react-router-dom';

function MetodoPagamento() {

  const [pagamento, setPagamento] = useState('');
  const [planoSelecionado, setPlanoSelecionado] = useState(null);

  const handlePagamentoChange = (event) => {
    setPagamento(event.target.value);
  };

  const [period, setPeriod] = useState('Mensal');
  const [plano, setPlano] = useState('');

  const handlePlanoChange = (event) => {
    setPlano(event.target.value);
  };

  const [opcaoSelecionada, setOpcaoSelecionada] = useState('');

  const handleChange = (event) => {
    setOpcaoSelecionada(event.target.value);
  };

  

  return (
    <div>
    <ContainerPagamento>
        <h2>Escolha a forma de pagamento</h2>
      <OpcoesPagamentos>
        <label>
          <input
            type="radio"
            value="cartao"
            checked={pagamento === 'cartao'}
            onChange={handlePagamentoChange}
          />
          Cartão
        </label>
        <label>
          <input
            type="radio"
            value="boleto"
            checked={pagamento === 'boleto'}
            onChange={handlePagamentoChange}
          />
          Boleto
        </label>
      </OpcoesPagamentos>
      
      {pagamento === 'cartao' && (
        
        <div className='containerPlanosPagamnetos'>
        <h3>Escoha o tempo do seu Plano</h3>
        <MesesPagamento period={period} setPeriod={setPeriod}/>
        <h3>Escoha seu plano</h3>
        <Planos period={period} opcaoSelecionada={opcaoSelecionada} plano={plano} handlePlanoChange={handlePlanoChange} handleChange={handleChange}/>
        </div>
     
      )}
      {pagamento === 'boleto' && (
        <div className='containerPlanosPagamnetos'>
          <h3>Escoha seu plano</h3>
          <PlanoBoleto planoSelecionado={planoSelecionado} setPlanoSelecionado={setPlanoSelecionado}/>
        </div>
      )}
    <Botoes>
      {plano || planoSelecionado? <button> <Link  to={'/pagamento'}>Ir para o cadastro </Link></button>: <button className='disabled' disabled={true}>Ir para o cadastro </button>}
      <button><Link  to={'/'}>Voltar</Link></button>
    </Botoes>
    </ContainerPagamento>
    </div>
  )
}

export default MetodoPagamento