import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';


export const SidebarData = [ 
    {
        title:'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },
    {
        title:'Cadastro Funcionários',
        path: '/funcionario',
        icon: <AiIcons.AiFillSmile/>,
        cName: 'nav-text'
    },
    {
        title:'Registrar Venda',
        path: '/registrarvenda',
        icon: <AiIcons.AiFillShop/>,
        cName: 'nav-text'
    },
    {
        title:'Listar Funcionários',
        path: '/listafuncionarios',
        icon: <AiIcons.AiFillDatabase/>,
        cName: 'nav-text'
    },
    {
        title:'Relatório de vendas',
        path: '/relatoriovendas',
        icon: <AiIcons.AiFillDollarCircle/>,
        cName: 'nav-text'
    },
    {
        title:'Clientes',
        path: '/clientes',
        icon: <AiIcons.AiFillPicture/>,
        cName: 'nav-text'
    },
    {
        title:'Catálogo',
        path: '/catalogo',
        icon: <AiIcons.AiFillShopping/>,
        cName: 'nav-text'
    },
    {
        title:'Cadastrar cliente',
        path: '/cadastrarcliente',
        icon: <AiIcons.AiFillLock/>,
        cName: 'nav-text'
    },
    {
        title:'Modificar produto',
        path: '/modificarproduto',
        icon: <AiIcons.AiFillApple/>,
        cName: 'nav-text'
    }
]

export default SidebarData;