import React,{useState,useEffect} from "react"
import api from "../../services/api"


export default function MostraVendasCliente(){

    const [vendasCliente,setVendasCliente] = useState([])
    const nome = "Thiago"
    useEffect(()=>{
        api.get('/vendas/cliente?nome='+nome)
            .then((res) =>{
                const dadosVendasCliente = res.data
                setVendasCliente(dadosVendasCliente)
            })
    },[])


    return(
        <div>
            <h1>Venda Cliente</h1>
            {vendasCliente.map(vendasCliente => 
            <div key = {vendasCliente.codigo_venda}> 
                
                {vendasCliente.cadastro_vendedor}-{vendasCliente.cadastro_comprador}-{vendasCliente.codigo_produto}-{vendasCliente.quantidade}-{vendasCliente.codigo_venda}-{vendasCliente.valor_total}
                
            </div>
            )}
        </div>
    )

}