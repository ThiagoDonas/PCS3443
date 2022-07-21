import React,{useState,useEffect} from "react"
import api from "../../services/api"


export default function MostraVendedores(){

    const [vendedores,setVendedores] = useState([])
    useEffect(()=>{
        api.get('/clientes/lista')
            .then((res) =>{
                const dadosVendedores = res.data
                setVendedores(dadosVendedores)
            })
    },[])


    return(
        <div>
            <h1>Vendedores</h1>
            {vendedores.map(vendedores => 
            <div key = {vendedores.cadastro_ven}> 
                
                {vendedores.cadastro_ven}-{vendedores.valor_venda}-{vendedores.comissao}
                
            </div>
            )}
        </div>
    )

}