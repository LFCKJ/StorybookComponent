import { Component } from "react"
import Input from "../component/Input"


export default {
    title: 'Component/Input',
    component: Input,

    args:{
        label: 'Label',
        block: false,
        invalid:false,
        required:false,
        disabled:false,
        readOnly:false,
    },
    argTypes:{
        label:{
            control: 'text',
        },
        block:{
            control: 'boolean',
        },
        invalid:{
            control: 'boolean',
        },
        required:{
            control: 'boolean',
        },
        disabled:{
            control: 'boolean',
        },
        readOnly:{
            control:'boolean',
        },
    },
};

export const Default =(args)=>{
    return <Input {...args}/>
}