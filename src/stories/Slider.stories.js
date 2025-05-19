import Slider from "../component/Slider";
import Spacer from "../component/Spacer";
import Icon from "../component/Icon";
export default{
    title: 'Component/Slider',
    component: Slider,
    args:{
        defaultValue: 1,
        min: 1,
        max: 100,
        step: 0.1,
        
    },
    argTypes:{
        defaultValue:{
            control: "number",
        },
        min:{
            control:"number",
        },
        max:{
            control:"number",
        },
        step:{
            control:"number",
        },
        onChange:{
            action:"onChange",
        },
    },
};

export const Default = (args) => {
    return <Slider {...args}/>;
};

export const VolumeControl = () =>{
    return(
        <Spacer>
              <Icon name="volume"/>
              <Slider style={{width: 100, display: "inline-block"}}/>
              <Icon name="volume-2"/>  
        </Spacer>
    )
}