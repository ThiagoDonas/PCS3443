import api from "../../services/api";
import React, { useState, useEffect } from "react"

export default function NovoProduto() {
    const [post, setPost] = useState([])
    const headers = {
        'Access-Control-Allow-Origin': '*',
    }
    useEffect(() => {
        api.post('/produtos', {
            headers,
            nome: "l",
            valor: 5,
            quantidade: 20
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