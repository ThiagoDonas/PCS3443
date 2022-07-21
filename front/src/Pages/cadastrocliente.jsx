import Main from '../Main';
import React, { useState } from "react"
import api from '../services/api';

function NovoCliente(CPF,nome) {
    while(CPF<100000000000){
        return 0
    }
    const headers = {
        'Access-Control-Allow-Origin': '*',
    }
        api.post('/clientes', {
            headers,
            CPF: CPF,
            nome: nome
        })
        // eslint-disable-next-line    
    
}
function Cadastrocliente() {
    const [CPF,setCPF] = useState();
    const [nome,setNome] = useState();
    function handleSubmit(){
        
        NovoCliente(CPF,nome)
        //console.log(codigo_vendedor,codigo_cliente,codigo_produto,quantidade);
    }
    return (
        <Main>
        <form>
            <label htmlFor="nome">
                nome 
            </label>
            <input onChange={(e)=> {setNome(e.target.value)}} type='string' id='nome' name='nome'/>
            <label htmlFor="CPF">
                CPF 
            </label>
            <input onChange={(e)=> {setCPF(e.target.value)}} type='number' id='CPF' name='CPF'/>
            <button onClick={handleSubmit()} type='submit'> 
                OK
            </button>
        </form>
        </Main>
    );
}

export default Cadastrocliente;