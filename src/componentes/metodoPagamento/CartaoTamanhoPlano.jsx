import React, { useState } from 'react';

import {ContainerMesesPagamento} from './CartaoTamenhoPagamentoStyled'

function MesesPagamento({period, setPeriod}) {
  

  const handlePeriodChange = (event) => {
    setPeriod(event.target.value);
  }

  return (
    <ContainerMesesPagamento>
      <div>
        <label>
          <input
            type="radio"
            value="Mensal"
            checked={period === 'Mensal'}
            onChange={handlePeriodChange}
          />
          Mensal
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Semestral"
            checked={period === 'Semestral'}
            onChange={handlePeriodChange}
          />
          Semestral
        </label>
      </div>
      <div>
        <label>
          <input
            type="radio"
            value="Anual"
            checked={period === 'Anual'}
            onChange={handlePeriodChange}
          />
          Anual
        </label>
      </div>
    </ContainerMesesPagamento>
  );
}

export default MesesPagamento;
