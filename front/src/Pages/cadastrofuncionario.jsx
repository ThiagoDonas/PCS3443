import Main from '../Main';

import MostraClientes from '../front-back/Mostar/MostraClientes';
import api from '../services/api';
import React,{useState,useEffect} from "react"


function Novofuncionario(CPF,nome,salario,cargo) {
    
    const headers = {
      'Access-Control-Allow-Origin' : '*',
    }
      api.post('/funcionarios',{
        headers,
        CPF: CPF,
        nome: nome,
        salario: salario,
        cargo: cargo,
        senha: 0
      })

      // eslint-disable-next-line    
}
function Cadastrofuncionario() {
    const [CPF,setCPF] = useState();
    const [nome,setNome] = useState();
    const [salario,setSalario] = useState();
    const [cargo,setCargo] = useState();
    function handleSubmit(){
        Novofuncionario(CPF,nome,salario,cargo)
        //console.log(codigo_vendedor,codigo_cliente,codigo_produto,quantidade);
    }
    return (
        <Main>
            <form>
        <label htmlFor="CPF">
            CPF 
        </label>
        <input onChange={(e)=> {setCPF(e.target.value)}} type='string' id='CPF' name='CPF'/>

        <label htmlFor="nome">
            nome 
        </label>
        <input onChange={(e)=> {setNome(e.target.value)}} type='string' id='nome' name='nome'/>

        <label htmlFor="salario">
            salario 
        </label>
        <input onChange={(e)=> {setSalario(e.target.value)}} type='string' id='salario' name='salario'/>

        <label htmlFor="cargo">
            cargo 
        </label>
        <input onChange={(e)=> {setCargo(e.target.value)}} type='string' id='cargo' name='cargo'/>        

        <button onClick={handleSubmit()} type='submit'> Ok </button>
    </form>
        </Main>
    );
}

export default Cadastrofuncionario;