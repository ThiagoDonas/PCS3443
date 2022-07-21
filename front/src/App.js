import './App.css';
import React from 'react';
import Main from './Main'
import FormNew from './Main/FormNew';
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Pages/layout";
import Home from "./Pages/home"

import Venda from './Pages/venda';
import Listafuncionarios from './Pages/listafuncionarios';
import Relatoriovendas from './Pages/relatoriovendas';
import Clientes from './Pages/clientes';
import Produtos from './Pages/produtos';
import Modificarprodutos from './Pages/modificarproduto';
import Cadastrofuncionario from './Pages/cadastrofuncionario';
import Cadastrocliente from './Pages/cadastrocliente';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Home />} />
        <Route path="/registrarvenda" element = {<Venda/>}/>
        <Route path="/listafuncionarios" element= {<Listafuncionarios/>}/>
        <Route path="/relatoriovendas" element={<Relatoriovendas/>}/>
        <Route path="/clientes" element={<Clientes/>}/>
        <Route path="/catalogo" element={<Produtos/>}/>
        <Route path="/modificarproduto" element={<Modificarprodutos/>}/>
        <Route path="/funcionario" element={<Cadastrofuncionario/>}/>
        <Route path="/cadastrarcliente" element={<Cadastrocliente/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
