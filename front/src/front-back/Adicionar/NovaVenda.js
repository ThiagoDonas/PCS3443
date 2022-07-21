import api from "../../services/api";
import React,{useState,useEffect} from "react"

export default function Novavenda(cadastro_ven,cadastro_cli,Produto,quant) {
    const [post, setPost] = useState([])
    
    const headers = {
      'Access-Control-Allow-Origin' : '*',
    }
    useEffect(()=>{
      api.post('/vendas',{
        headers,
        cadastro_vendedor: cadastro_ven,
        cadastro_comprador: cadastro_cli,
        codigo_produto: Produto,
        quantidade: quant
      })
          .then((res) =>{
              const dadosPostFuncionaro = res.data
              setPost(dadosPostFuncionaro)
          })
      // eslint-disable-next-line    
  },[])
  
    if (!post) return "No post!"

  }