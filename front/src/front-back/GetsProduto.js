import React,{useState,useEffect} from "react"
import api from "../services/api"


export default function GetsProdutos(){
    const [produtos,setProduto] = useState([])
    
    useEffect(()=>{
        api.get('/produtos/lista',"Thiago")
            .then((res) =>{
                const dadosProdutos = res.data
                setProduto(dadosProdutos)
            })
    },[])

    return(
        <div>
        {produtos.map(produtos => 
            <div key = {produtos.codigo_produto}> 
                
                {produtos.nome}-{produtos.valor}-{produtos.quantidade}-{produtos.codigo_produto}
                
            </div>
            )}
        </div>

    )

}