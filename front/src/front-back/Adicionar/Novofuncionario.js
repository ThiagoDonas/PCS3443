import api from "../../services/api";
import React,{useState,useEffect} from "react"

export default function Novofuncionario() {
  const [post, setPost] = useState([])
  const headers = {
    'Access-Control-Allow-Origin' : '*',
  }
  useEffect(()=>{
    api.post('/funcionarios',{
      headers,
      CPF: 4872,
      nome: "RUan",
      salario: 1000,
      cargo: "vendedor",
      senha: 0
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

