import api from "../../services/api";
import React,{useState,useEffect} from "react"

export default function RemoveCliente() {
  const [apagar, setApagar] = useState([])
  const headers = {
    'Access-Control-Allow-Origin' : '*',
  }

  const nome = "Gustavo"

  useEffect(()=>{
    api.delete('/clientes/remove?nome='+nome,{
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