import api from "../../services/api";
import React, { useState, useEffect } from "react"

export default function NovoCliente() {
    const [post, setPost] = useState([])
    const headers = {
        'Access-Control-Allow-Origin': '*',
    }
    useEffect(() => {
        api.post('/clientes/', {
            headers,
            CPF: 145821,
            nome: "Gabriel"
        })
            .then((res) => {
                const dadosPost = res.data
                setPost(dadosPost)
            })
        // eslint-disable-next-line    
    },[])

    if (!post) return "No post!"

    return (
        <div>

        </div>
    );
}