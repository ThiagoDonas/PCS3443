import React,{useState,useEffect} from "react"
import api from "../../services/api"


export default function MostraVendas(){

    const [vendas,setVendas] = useState([])
    useEffect(()=>{
        api.get('/vendas/lista')
            .then((res) =>{
                const dadosVendas = res.data
                setVendas(dadosVendas)
            })
    },[])

    return(
        <div>
            <h1>Vendas</h1>
            {vendas.map(vendas => 
            <div key = {vendas.codigo_venda}> 
                
                <h2>Cadastro_Vendedor: {vendas.cadastro_vendedor} | Cadastro_Comprador: {vendas.cadastro_comprador} | codigo_produto: {vendas.codigo_produto} | Quantidade: {vendas.quantidade} | Venda_Codigos: {vendas.codigo_venda} | Valor_Total: {vendas.valor_total}</h2>
                
            </div>
            )}
        </div>
    )

}