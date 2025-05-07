import { bool } from "prop-types";
import Toggle from "../component/Toggle";

export default{
    title: "component/Toggle",
    component: Toggle,
    argTypes:{
        disabled:{
            control:'boolean',
        },
    }
}
export const Default = (args) => {
    return <Toggle {...args} />;
}