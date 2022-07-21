import api from "../../services/api";
import React,{useState,useEffect} from "react"

export default function RemoveProduto() {
  const [apagar, setApagar] = useState([])
  const headers = {
    'Access-Control-Allow-Origin' : '*',
  }

  const codigo_produto = "14"

  useEffect(()=>{
    api.delete('/produtos/deleta?codigo_produto='+codigo_produto,{
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