import React,{useState,useEffect} from "react"
import api from "../../services/api"


export default function MostraClientes(){

    const [clientes,setClientes] = useState([])
    useEffect(()=>{
        api.get('/clientes/lista')
            .then((res) =>{
                const dadosClientes = res.data
                setClientes(dadosClientes)
            })
    },[])


    return(
        <div>
            <h1>Clientes</h1>
            {clientes.map(clientes => 
            <div key = {clientes.cadastro_cli}> 
                
                <h2>Nome: {clientes.nome} | Cadastro: {clientes.cadastro_cli} | CPF: {clientes.CPF} | Compras: {clientes.compras}</h2>
                
            </div>
            )}
        </div>
    )

}