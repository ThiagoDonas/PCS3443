import React,{useState,useEffect} from "react"
import api from "../../services/api"


export default function MostraCliente(props){

    const [dadocliente,setCliente] = useState([])
    
    useEffect(()=>{
        api.get('/clientes/busca?nome='+props.nomeCliente)
            .then((res) =>{
                const dadosCliente = res.data
                setCliente(dadosCliente)
            })
    },[])


    return(
        <div>
            <h1>Cliente</h1>
            <h2>CPF:{dadocliente.CPF}|Nome:{dadocliente.nome}|Cadastro:{dadocliente.cadastro_cli}|compras:{dadocliente.compras}</h2>
            
        </div>
    )

}