import styled from "@emotion/styled";
import ImageComponent from '../Image';
import { useState, useEffect } from 'react';
import AvatarGroup from "./AvatarGroup";

const ShapeToCssValue = {
  circle: "50%",
  round: "4px",
  square: "0px",
}

const AvatarWrapper = styled.div`
  position: relative;
  display: inline-block;
  border: 1px solid #dadada;
  border-radius: ${({shape}) => ShapeToCssValue[shape]};
      background-color: #eee;
  overflow: hidden;

> img{
transition: opacity 0.2s ease-out;
}  `;


const Avatar =({
    lazy,
    threshold,
    src,
    size=70,
    shape="circle",
    placeholder,
    alt,
    mode="cover",
    ...props}) =>{

      const[loaded,setLoaded] = useState(false);

      useEffect(()=>{
        const image = new Image();
        image.src = src;
        image.onload = () => setLoaded(true);
      },[src]);

      
    return (<AvatarWrapper {...props} shape={shape}>
        <ImageComponent
        block
        lazy={lazy}
        threshold={threshold}
        width={size}
        height={size}
        placeholder={placeholder}
        src={src}
        alt={alt}
        mode={mode}

        style={{opacity: loaded ? 1:0}}
        />
    </AvatarWrapper>);

};

Avatar.Group = AvatarGroup;

export default Avatar;