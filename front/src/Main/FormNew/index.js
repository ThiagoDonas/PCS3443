import React from "react";
import Form from "../../components";
import Field from "../Field";
import {useForm} from 'react-hook-form';


import Button from "../Button";

const FormNew = () => {
    const {register, handleSubmit} = useForm();

    const newUser = (user) => {};

    return (
    <Form onSubmit={handleSubmit(newUser)}>
        <Field.Text label = "Login" name = "email" type = "text" register = {register}/>
        <Field.Text label = "Senha" name = "senha" type = "password" register = {register}/>
        <Button>Enviar</Button>
    </Form>
)}

export default FormNew;