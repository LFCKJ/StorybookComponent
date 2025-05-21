import React from 'react';
import Skeleton from '../component/Skeleton';

export default {
  title: 'Component/Skeleton',
  
  args: {
    width: 200,
    height: 100,
  },
  
};

export const Box = (args) => <Skeleton.Box {...args} />;

Box.argTypes = {
 width: { control: 'number' },
    height: { control: 'number' },
};


export const Circle = (args) => <Skeleton.Circle {...args} />;

Circle.argTypes = {
 size: { defaultValue:200, control: 'number' },
   
};

export const Paragraph = (args) => <Skeleton.Paragraph {...args} />;

Paragraph.argTypes = {
 line: { defaultValue:3, control: 'number' },
    
};

export const Sample = () =>{
  return (
    <>
    
    <Skeleton.Circle size={60} />
    <Skeleton.Paragraph line={4}/>
    </>
  )
}
