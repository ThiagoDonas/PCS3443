import React,{useState,useEffect} from "react";
import Form from "../../components";
import FieldVenda from "../FieldVenda";
import {useForm} from 'react-hook-form';

import Button from "../Button";
import { ButtonGreen, ButtonRed } from "../Button";

import api from "../../services/api";

function Novavenda(cadastro_ven,cadastro_cli,Produto,quant) {

    
    const headers = {
      'Access-Control-Allow-Origin' : '*',
    }
      api.post('/vendas',{
        headers,
        cadastro_vendedor: cadastro_ven,
        cadastro_comprador: cadastro_cli,
        codigo_produto: Produto,
        quantidade: quant
      })
          
      // eslint-disable-next-line    

}

const FormVenda = () => {
    //const {register, handleSubmit} = useForm();
    
    /*const newUser = (user) => {
        console.log(user);
    };*/
    const [codigo_vendedor,setCodigoVendedor] = useState();
    const [codigo_cliente,setCodigoCLiente] = useState();
    const [codigo_produto,setCodigoProduto] = useState();
    const [quantidade,setQuantidade] = useState();
    function handleSubmit(){
        Novavenda(codigo_vendedor,codigo_cliente,codigo_produto,quantidade)
        //console.log(codigo_vendedor,codigo_cliente,codigo_produto,quantidade);
    }

    return (
     //<Form onSubmit={handleSubmit(newUser)}>
    /*<Form onSubmit={handleSubmit}>
        <FieldVenda.Text label = "Código Vendedor" name = "Código_vendedor" type = "text" register = {register}/>
        <FieldVenda.Text label = "Código Cliente" name = "Código_cliente" type = "text" register = {register}/>
        <FieldVenda.Text label = "Código Produto" name = "Código_produto" type = "text" register = {register}/>
        <FieldVenda.Text label = "Quantidade" name = "quantidade" type = "number" register = {register}/>
        <ButtonGreen>Salvar</ButtonGreen>
        <h1></h1>
        <ButtonRed>Cancelar</ButtonRed>
    </Form>*/
    <form>
        <label htmlFor="codigo_vendedor">
            codigo_vendedor 
        </label>
        <input onChange={(e)=> {setCodigoVendedor(e.target.value)}} type='number' id='codigo_vendedor' name='codigo_vendedor'/>

        <label htmlFor="codigo_cliente">
            codigo_cliente 
        </label>
        <input onChange={(e)=> {setCodigoCLiente(e.target.value)}} type='number' id='codigo_cliente' name='codigo_cliente'/>

        <label htmlFor="codigo_produto">
            codigo_produto 
        </label>
        <input onChange={(e)=> {setCodigoProduto(e.target.value)}} type='number' id='codigo_produto' name='codigo_produto'/>

        <label htmlFor="quantidade">
            quantidade 
        </label>
        <input onChange={(e)=> {setQuantidade(e.target.value)}} type='number' id='quantidade' name='quantidade'/>        

        <button onClick={handleSubmit()} type='submit'> Ok </button>
    </form>
)}

export default FormVenda;