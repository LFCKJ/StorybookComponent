import Text from '../component/Text';

export default {
    title: "component/Text",
    component: Text,
    argTypes: {
        size: {control: 'number'},
        strong: { control: 'boolean'},
        delete: { control: 'boolean'},
        underline: { control: 'boolean'},
        color: { control: 'color'},
        Block:{control:'boolean'},
        paragraph: { control: 'boolean'},
        mark: { control: 'boolean'},
        code: { control: 'boolean'}
    }
};

export const Default = (args) => {
    return  <Text{...args}>Text</Text>;  
};
export const Size = (args) => {
    return <>
            <Text{...args} size="large">Large</Text>
            <Text{...args} size="normal">Noraml</Text>
            <Text{...args} size="small">Small</Text>
            <Text{...args} size={24}>Custom</Text>
         </>;
};