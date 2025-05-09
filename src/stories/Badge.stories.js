import Badge from "../component/Badge";
import Image from "../component/Image";

export default {
    title:"component/Badge",
    component: Badge,
    args:{
        count: 10,
        maxCount: 100,
        showZero:false,
    },
    argTypes:{
        count:{
            control:"number"
        },
        maxCount:{
            control:"number"
        },
        backgroundColor:{
            control:"color"
        },
        textColor:{
            control:"color"
        },
        showZere:{
            control:"Boolean"
        },
    },
};

export const Default =(args)=>{
    return <Badge {...args}>
        <Image 
        src="https://picsum.photo/60"
        width={60}
        style={{borderRadius: 8}}/>

    </Badge>;
};

export const Dot =()=>{
    return( <Badge dot>
        <Image 
        src="https://picsum.photo/40"
        width={60}
        />

    </Badge>);
};