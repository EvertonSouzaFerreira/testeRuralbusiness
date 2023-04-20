import { useState } from 'react';

import {ContainerSignUp, Titulo, Btn} from './SignUpStyled'
import { Link } from 'react-router-dom';
import { Botoes } from '../metodoPagamento/MetodoPagamentoStyled';

//components
import Cartao from '../Cartao/Cartao';


function Formulario() {
  const [form, setForm] = useState({
    nome: '',
    sobrenome: '',
    celular: '',
    atividade: '',
    email: '',
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    estado: '',
    cidade: '',
    termos: ''
  });

  const [erros, setErros] = useState({
    nome: '',
    sobrenome: '',
    celular: '',
    atividade: '',
    email: '',
    cep: '',
    endereco: '',
    numero: '',
    complemento: '',
    bairro: '',
    estado: '',
    cidade: '',
    termos: ''
  });

  const [noError, setNoError] = useState(false)
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };



  const handleSubmit = (event) => {
    event.preventDefault();

    const novosErros = {};
    Object.keys(form).forEach((key) => {
      if (!form[key]) {
        novosErros[key] = 'Por favor, preencha este campo.';
      }
      else{
        setNoError(true)
      }
    });
    setErros(novosErros);

    
  };

  return (
    <>
    <Titulo>Cadastre-se</Titulo>
     {!noError?<ContainerSignUp onSubmit={handleSubmit}>
        <div>
        <div className='subContainerForm'>
        <label>
            Nome:<br></br>
            <input type="text" name="nome" value={form.nome} onChange={handleChange} className={erros.nome && 'error'} />
            {erros.nome && <p className="error-message">{erros.nome}</p>}
        </label>
        <label>
            Sobrenome:<br></br>
            <input type="text" name="sobrenome" value={form.sobrenome} onChange={handleChange} className={erros.sobrenome && 'error'} />
            {erros.sobrenome && <p className="error-message">{erros.sobrenome}</p>}
        </label>
        <label>
            Celular:<br></br>
            <input type="text" name="celular" value={form.celular} onChange={handleChange} className={erros.celular && 'error'} onKeyPress={(event) => {
            const charCode = event.which ? event.which : event.keyCode;
            if (charCode < 48 || charCode > 57) {
                event.preventDefault();
            }
            }} />
            {erros.celular && <p className="error-message">{erros.celular}</p>}
        </label>
        
        <label>
            Atividade:<br></br>
            <select name="atividade" value={form.atividade} onChange={handleChange} className={erros.atividade && 'error'}>
            <option value="">Selecione uma opção</option>
            <option value="opcao1">Opção 1</option>
            <option value="opcao2">Opção 2</option>
            <option value="opcao3">Opção 3</option>
            </select>
            {erros.atividade && <p className="error-message">{erros.atividade}</p>}
        </label>
        <label>
            Email:<br></br>
            <input type="email" name="email" value={form.email} onChange={handleChange} className={erros.email && 'error'} />
            {erros.email && <p className="error-message">{erros.email}</p>}
        </label>
        <label>
            CEP:<br></br>
            <input type="text" name="cep" value={form.cep} onChange={handleChange} className={erros.cep && 'error'}onKeyPress={(event) => {
            const charCode = event.which ? event.which : event.keyCode;
            if (charCode < 48 || charCode > 57) {
                event.preventDefault();
            }
            }} />
            {erros.cep && <p className="error-message">{erros.cep}</p>}
        </label>
        </div>
        <div className='subContainerForm'>
        <label>
            Endereço:<br></br>
            <input type="text" name="endereco" value={form.endereco} onChange={handleChange} className={erros.endereco && 'error'} />
            {erros.endereco && <p className="error-message">{erros.endereco}</p>}
        </label>
        <label>
            Número:<br></br>
            <input type="text" name="numero" value={form.numero} onChange={handleChange} className={erros.numero && 'error'}onKeyPress={(event) => {
            const charCode = event.which ? event.which : event.keyCode;
            if (charCode < 48 || charCode > 57) {
                event.preventDefault();
            }
            }} />
            {erros.numero && <p className="error-message">{erros.numero}</p>}
        </label>
        <label>
            Complemento:<br></br>
            <input type="text" name="complemento" value={form.complemento} onChange={handleChange} />
        </label>
        
        <label>
            Bairro:<br></br>
            <input type="text" name="bairro" value={form.bairro} onChange={handleChange} className={erros.bairro && 'error'} />
            {erros.bairro && <p className="error-message">{erros.bairro}</p>}
        </label>
        <label>
    Estado:<br></br>
    <select name="estado" value={form.estado} onChange={handleChange} className={erros.estado && 'error'}>
        <option value="">Selecione um estado</option>
        <option value="DF">Distrito Federal</option>
        <option value="MS">Mato Grosso do Sul</option>
        <option value="SP">São Paulo</option>
    </select>
    {erros.estado && <p className="error-message">{erros.estado}</p>}
    </label>

    <label>
    Cidade:<br></br>
    <select name="cidade" value={form.cidade} onChange={handleChange} className={erros.cidade && 'error'}>
        <option value="">Selecione uma cidade</option>
        {form.estado === 'DF' && <option value="Brasília">Brasília</option>}
        {form.estado === 'MS' && <option value="Campo Grande">Campo Grande</option>}
        {form.estado === 'SP' && <option value="São Paulo">São Paulo</option>}
    </select>
    {erros.cidade && <p className="error-message">{erros.cidade}</p>}
    </label>
    </div>
    </div>
    <Botoes>
      <Btn type="submit">Pagamento</Btn>
      <Btn><Link  to={'/'}>Voltar</Link></Btn>
    </Botoes>

</ContainerSignUp>: <Cartao setNoError={setNoError}/>}
    
    </>
  );
}

export default Formulario
