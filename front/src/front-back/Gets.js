import React,{useState,useEffect} from "react"
import api from "../services/api"


export default function Gets(){
    
    const [funcionarios,setFuncionarios] = useState([])
    useEffect(()=>{
        api.get('/funcionarios/lista')
            .then((res) =>{
                const dadosFuncionarios = res.data
                setFuncionarios(dadosFuncionarios)
            })
    },[])

    const [vendas,setVendas] = useState([])
    useEffect(()=>{
        api.get('/vendas/lista')
            .then((res) =>{
                const dadosVendas = res.data
                setVendas(dadosVendas)
            })
    },[])

    const [vendasCliente,setVendasCliente] = useState([])
    const nome = "Thiago"
    useEffect(()=>{
        api.get('/vendas/cliente?nome='+nome)
            .then((res) =>{
                const dadosVendasCliente = res.data
                setVendasCliente(dadosVendasCliente)
            })
    },[])

    const [produtos,setProduto] = useState([])
    useEffect(()=>{
        api.get('/produtos/lista')
            .then((res) =>{
                const dadosProdutos = res.data
                setProduto(dadosProdutos)
            })
    },[])

    const [clientes,setClientes] = useState([])
    useEffect(()=>{
        api.get('/clientes/lista')
            .then((res) =>{
                const dadosClientes = res.data
                setClientes(dadosClientes)
            })
    },[])

    const [vendedores,setVendedores] = useState([])
    useEffect(()=>{
        api.get('/clientes/lista')
            .then((res) =>{
                const dadosVendedores = res.data
                setVendedores(dadosVendedores)
            })
    },[])

    const [dadocliente,setCliente] = useState([])
    const nomeCliente = "Thiago"
    useEffect(()=>{
        api.get('/clientes/busca?nome='+nomeCliente)
            .then((res) =>{
                const dadosCliente = res.data
                setCliente(dadosCliente)
            })
    },[])

    return(
        <div>
            <h1>Funcionarios</h1>
            {funcionarios.map(funcionarios => 
            <div key = {funcionarios.cadastro}> 
                
                "CPF":{funcionarios.CPF}-{funcionarios.nome}-{funcionarios.salario}-{funcionarios.cadastro}-{funcionarios.ativo}
               
            </div>
            )}

            <h1>Vendas</h1>
            {vendas.map(vendas => 
            <div key = {vendas.codigo_venda}> 
                
                {vendas.cadastro_vendedor}-{vendas.cadastro_comprador}-{vendas.codigo_produto}-{vendas.quantidade}-{vendas.codigo_venda}-{vendas.valor_total}
                
            </div>
            )}

            <h1>Venda Cliente</h1>
            {vendasCliente.map(vendasCliente => 
            <div key = {vendasCliente.codigo_venda}> 
                
                {vendasCliente.cadastro_vendedor}-{vendasCliente.cadastro_comprador}-{vendasCliente.codigo_produto}-{vendasCliente.quantidade}-{vendasCliente.codigo_venda}-{vendasCliente.valor_total}
                
            </div>
            )}

            <h1>Produtos</h1>
            {produtos.map(produtos => 
            <div key = {produtos.codigo_produto}> 
                
                {produtos.nome}-{produtos.valor}-{produtos.quantidade}-{produtos.codigo_produto}
                
            </div>
            )}

            <h1>Clientes</h1>
            {clientes.map(clientes => 
            <div key = {clientes.cadastro_cli}> 
                
                {clientes.cadastro_cli}-{clientes.CPF}-{clientes.nome}-{clientes.compras}
                
            </div>
            )}

            <h1>Cliente busca</h1>
        
                {dadocliente.CPF}-{dadocliente.nome}-{dadocliente.cadastro_cli}-{dadocliente.compras}
                

            <h1>Vendedores</h1>
            {vendedores.map(vendedores => 
            <div key = {vendedores.cadastro_ven}> 
                
                {vendedores.cadastro_ven}-{vendedores.valor_venda}-{vendedores.comissao}
                
            </div>
            )}
        </div>
    )

}