import React,{useState,useEffect} from "react"
import api from "../../services/api"


export default function MostraFuncionario(){

    const [funcionarios,setFuncionarios] = useState([])
    useEffect(()=>{
        api.get('/funcionarios/lista')
            .then((res) =>{
                const dadosFuncionarios = res.data
                setFuncionarios(dadosFuncionarios)
            })
    },[])
    function Ativo(ativo){
        if(ativo){
            return ' sim'
        }
        else{
            return ' não'
        }
    }
    return(
        <div>
            <h1>Funcionarios</h1>
            {funcionarios.map(funcionarios => 
            <div key = {funcionarios.cadastro}> 
                <h2>CPF:{funcionarios.CPF} | Nome:{funcionarios.nome} | Salario:{funcionarios.salario} | Cadastro: {funcionarios.cadastro} | Ativo:{Ativo(funcionarios.ativo)}</h2>
               
            </div>
            )}
        </div>
    )

}