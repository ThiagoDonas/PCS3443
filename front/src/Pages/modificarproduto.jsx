
import Main from '../Main';
import React,{useState,useEffect} from "react"
import api from '../services/api';

function AtualizaProdutos(valor,quantidade,codigo_produto) {

  const headers = {
    'Access-Control-Allow-Origin' : '*',
  }

    api.post('/produtos/atualiza?valor='+valor+'&quantiade='+quantidade+'&codigo_produto='+codigo_produto,{
      headers,

    })

    // eslint-disable-next-line    

}

function Modificarprodutos() {
    const [valor,setValor] = useState();
    const [quantidade,setQuantidade] = useState();
    const [codigo_produto,setCodigoProduto] = useState();
    function handleSubmit(){
        AtualizaProdutos(valor,quantidade,codigo_produto,)
        //console.log(codigo_vendedor,codigo_cliente,codigo_produto,quantidade);
    }
    return (
            <Main>
                <form>
        <label htmlFor="valor">
            valor 
        </label>
        <input onChange={(e)=> {setValor(e.target.value)}} type='number' id='valor' name='valor'/>

        <label htmlFor="quantidade">
            quantidade 
        </label>
        <input onChange={(e)=> {setQuantidade(e.target.value)}} type='number' id='quantidade' name='quantidade'/>

        <label htmlFor="codigo_produto">
            codigo_produto 
        </label>
        <input onChange={(e)=> {setCodigoProduto(e.target.value)}} type='number' id='codigo_produto' name='codigo_produto'/>       

        <button onClick={handleSubmit()} type='submit'> Ok </button>
    </form>
            </Main>
    );
}

export default Modificarprodutos;