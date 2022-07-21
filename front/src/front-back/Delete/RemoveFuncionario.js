import api from "../../services/api";
import React,{useState,useEffect} from "react"

export default function RemoveFuncionario() {
  const [apagar, setApagar] = useState([])
  const headers = {
    'Access-Control-Allow-Origin' : '*',
  }

  const cadastro = "3"
  const cargo = "vendedor"

  useEffect(()=>{
    api.delete('/funcionarios/remove?cadastro='+cadastro+'&cargo='+cargo,{
      headers,

    })
        .then((res) =>{
            const dadosDelete = res.data
            setApagar(dadosDelete)
        })
    // eslint-disable-next-line    
},[])

  if (!apagar) return "No delete!"

  return (
    <div>
      
    </div>
  );
}