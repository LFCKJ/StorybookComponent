
import Avatar from "../component/Avatar"

export default {
    title:'component/Avatar',
    component:Avatar,
    args:{
        src:"https://picsum.photos/200",
        shape:"circle",
        size: 70,
        mode:"cover",
       
    },
    argTypes:{
        shape:{
            control:"inline-radio",
            options: ["circle", "round", "square"],
        },
        size:{
            control:{type:"range",min:40,max:200},
            
            },
        mode:{
                control:"inline-radio",
                options: ["contain", "cover" ,"fill"],
            },
        },
        
    };


export const Default =(args) =>{
    return <Avatar {...args}/>
};

export const Group = () =>{
    return(
        <Avatar.Group>
            <Avatar src="https://picsum.photos/200?1"/>
            <Avatar src="https://picsum.photos/200?1"/>
            <Avatar src="https://picsum.photos/200?1"/>
            <Avatar src="https://picsum.photos/200?1"/>
        </Avatar.Group>
    );
};