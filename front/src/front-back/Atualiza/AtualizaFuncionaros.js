import api from "../../services/api";
import React,{useState,useEffect} from "react"

export default function AtualizaFuncionarios() {
  const [post, setPost] = useState([])
  const headers = {
    'Access-Control-Allow-Origin' : '*',
  }

  const cadastro = "1";
  const novo_status = "false";

  useEffect(()=>{
    api.post('/funcionarios/atualiza_status?cadastro='+cadastro+'&novo_status='+novo_status,{
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