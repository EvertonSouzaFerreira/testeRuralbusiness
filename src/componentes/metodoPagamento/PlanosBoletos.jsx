import { useState } from 'react';

import {Boletos} from './PlanosBoletosStyled'

const PlanoBoleto = ({planoSelecionado,setPlanoSelecionado }) => {
  

  const handleRadioChange = (event) => {
    setPlanoSelecionado(event.target.value);
  };



  return (
    <Boletos>
      
            
            <div className='plano'>
              <div style={{display : 'flex'}}>
              <input type="radio" name="plano" value="Top-3m" onChange={handleRadioChange} />
              <strong>Plano Top 3 Meses</strong>
              </div>
              
              <p>R$ 65,00</p>
            </div>
          
          
            <div className='plano'>
              <div style={{display : 'flex'}}>
                <input type="radio" name="plano" value="Top-Leite-3m" onChange={handleRadioChange} />
                <strong>Plano Top + Leite 3 Meses</strong>
                </div>
              <p>R$ 90,00</p>
            </div>
          
            <div className='plano'>
            <div style={{display : 'flex'}}>
              <input type="radio" name="plano" value="top-6m" onChange={handleRadioChange} />
              <strong>Plano Top 6 Meses</strong>
            </div>
              <p>R$ 125,00</p>
            </div>
          
          
            <div className='plano'>
            <div style={{display : 'flex'}}>
              <input type="radio" name="plano" value="top-Leite-6m" onChange={handleRadioChange} />
              <strong>Plano Top + Leite 6 Meses</strong>
            </div>
              <p>R$ 180,00</p>
            </div>
          
         
            <div className='plano'>
            <div style={{display : 'flex'}}>
              <input type="radio" name="plano" value="top-1-ano" onChange={handleRadioChange} />
              <strong>Plano Top 1 Ano</strong>
            </div>
              <p>R$ 245,00</p>
            </div>
          
            <div className='plano'>
            <div style={{display : 'flex'}}>
              <input type="radio" name="plano" value="top-Leite-1ano" onChange={handleRadioChange} />
              <strong>Plano Top + Leite 1 Ano</strong>
            </div>
              <p>R$ 355,00</p>
            </div>
          
        
      
      {planoSelecionado && <p>Você selecionou o plano:<strong>{planoSelecionado}</strong> .</p>}
    </Boletos>
  );
};

export default PlanoBoleto;
