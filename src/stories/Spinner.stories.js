import Spinner from '../component/Spinner';

export default{
    title: "Component/Spinner",
    component: Spinner,
    args:{
        size:24,
        loading:true,
    },
    argTypes:{
        size:{
            control:{
                type:'number',}
            
        },
            color:{
                control:{
                    type:'color',
                },
            },
            loading:{
                control:{
                    type:'boolean',
                },
            },        
        }
}
export const Default =(args)=>{
    return <Spinner {...args} />
}