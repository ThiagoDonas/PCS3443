import React from 'react';
import Content from './Content';
import Input from './Input';
import Label from './Label';

const Text = ({label, type, name, register}) => (
    <Label>
        <Content>{label}</Content>
        <Input type = {type} name = {name} {...register('name', {required:true})}/> 
    </Label>

);

const Field = {
    Text,
};

//register = ref?
export default Field;