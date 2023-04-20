import React, { useEffect, useState } from 'react'

import {ContainerTiposPlanos} from './PlanosStyled'

function Planos({plano, handlePlanoChange, handleChange, opcaoSelecionada, period}) {

    const [valorSelecionado, setValorSelecionado] = useState('');

    let valores = ['-', '-', '-']; // valores padrão
  if(period === 'Mensal'){
    valores=['R$ 9,90', 'R$ 19,90 ', 'R$ 29,90'];
  } else if(period === 'Semestral'){
    valores=['R$ 59,40', 'R$ 119,40 ', 'R$ 179,40'];
  } else if(period === 'Anual'){
    valores=['R$ 118,80', 'R$ 238,80', 'R$ 358,80'];
  }

  const handleValorSelecionado = (event) => {
    setValorSelecionado(event.target.value);
  }

  // let valor = [
  //   {plano: 'Plano Básico', valorMensal: 'R$ 9.90', valorSemestral: 'R$ 59.40', valorAnual: 'R$ 118.80'},
  //   {plano: 'Plano Top', valorMensal: 'R$ 19.90', valorSemestral: 'R$ 119.40', valorAnual: 'R$ 238.80'},
  //   {plano: 'Plano Top Leite', valorMensal: 'R$ 29.90', valorSemestral: 'R$ 179.40', valorAnual: 'R$ 358.80'}
  // ];

  // useEffect(() =>{
  //   if (period === 'Mensal') {
  //       valor = valor.map(plan => ({ valorSelecionado: plan.valorMensal }));
  //         setValorSelecionado(valor)
  //     } else if (period === 'Semestral') {
  //       valor = valor.map(plan => ({  valorSelecionado: plan.valorSemestral }));
  //       setValorSelecionado(valor)
  //     } else if (period === 'Anual') {
  //       valor = valor.map(plan => ({  valorSelecionado: plan.valorAnual }));
  //       setValorSelecionado(valor)
  //     }
  // },[period])
    
 



console.log(opcaoSelecionada);

  return (
    <>

        <ContainerTiposPlanos>
        
        <label style={{display: 'flex', gap: '1rem'}}>
          <input
            type="radio"
            value="basico"
            checked={plano === 'basico'}
            onChange={handlePlanoChange}
          />
          
          

          
        {plano ==='basico' && <label className='containerSelect'>
           <p>Selecione uma opção:</p> 
             <select required value={opcaoSelecionada} onChange={handleChange}>
                <option value="">Selecione...</option>
                <option value="Soja">Soja</option>
                <option value="Milho">Milho</option>
                <option value="Gado e Proteina Animal">Gado e Proteina Animal</option>
                <option value="Leite">Leite</option>
            </select>
      </label>}
      <p>Plano Básico = {valores[0]}</p>
          
        </label>
        <label style={{display: 'flex', gap: '1rem'}}>
          <input
            type="radio"
            value="top"
            checked={plano === 'top'}
            onChange={handlePlanoChange}
          />
           
          <p>Plano Top = {valores[1]}</p>
        </label>
        <label style={{display: 'flex', gap: '1rem'}}>
          <input
            type="radio"
            value="top_leite"
            checked={plano === 'top_leite'}
            onChange={handlePlanoChange}
          />
         <p>Plano Top + Leite = {valores[2]}</p>
          
        </label>
        {plano === 'basico'? <p>Você selecionou o plano: {plano} + {opcaoSelecionada}</p>:<p>Você selecionou o plano: {plano}</p>}
        </ContainerTiposPlanos>
    
    </>
  )
}

export default Planos