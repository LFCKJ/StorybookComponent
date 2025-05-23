import Icon from "../component/Icon";
import { Buffer } from 'buffer';
window.Buffer = Buffer;

export default {
    title:'component/Icon',
    component: Icon,
    args:{
        name:'box',
        size:16,
        strokeWidth:2,
        color:"#222",
        rotate: 0,
    },
    argTypes:{
        name:{control:"text"},
        
        size:{
            control:{type:"range", min: 16, max: 80,},
        },
        
        strokeWidth:{
            control:{type:"range",min:2,max:6},
        },
        rotate:{control:{type:"range", min:0, max:360}},
        color:{control:"color"},
    },
};

export const Default =(args)=>{
   return  <Icon {...args} />

};