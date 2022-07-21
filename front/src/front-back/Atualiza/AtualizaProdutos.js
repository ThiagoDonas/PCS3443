import api from "../../services/api";
import React,{useState,useEffect} from "react"

export default function AtualizaProdutos() {
  const [post, setPost] = useState([])
  const headers = {
    'Access-Control-Allow-Origin' : '*',
  }

  const valor = "15";
  const quantidade = "30";
  const codigo_produto = "4";

  useEffect(()=>{
    api.post('/produtos/atualiza?valor='+valor+'&quantiade='+quantidade+'&codigo_produto='+codigo_produto,{
      headers,

    })
        .then((res) =>{
            const dadosPostFuncionaro = res.data
            setPost(dadosPostFuncionaro)
        })
    // eslint-disable-next-line    
},[])

  if (!post) return "No post!"

  return (
    <div>
      
    </div>
  );
}