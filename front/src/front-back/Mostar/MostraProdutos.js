import React,{useState,useEffect} from "react"
import api from "../../services/api"


export default function MostraProdutos(){

    const [produtos,setProduto] = useState([])
    useEffect(()=>{
        api.get('/produtos/lista')
            .then((res) =>{
                const dadosProdutos = res.data
                setProduto(dadosProdutos)
            })
    },[])


    return(
        <div>
            <h1>Produtos</h1>
            {produtos.map(produtos => 
            <div key = {produtos.codigo_produto}> 
                
                <h2>Nome: {produtos.nome} | Valor: {produtos.valor} | Quantidade: {produtos.quantidade} | Codigo_Produto: {produtos.codigo_produto}</h2>
                
            </div>
            )}
        </div>
    )

}