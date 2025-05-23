import PropTypes from "prop-types";
import {useState,useRef, useEffect} from 'react';
let observer = null;
const LOAD_IMG_EVENT_TYPE = 'loadImage';
const onIntersection = (entries, io)=>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            io.unobserve(entry.target);
            entry.target.dispatchEvent(new CustomEvent(LOAD_IMG_EVENT_TYPE));
        }
    })
}



const Image = ({ 
    lazy,
    threshold=0.5,
    placeholder,
    src,
    block,
    width,
    height,
    alt,
    mode="cover",
    ...props}) =>{
const[loaded,setLoaded] = useState(!lazy);
const imgRef = useRef(null);
    
const imageStyle={
    display:block ? "block" : 'inline-block',
    width,
    height,
    objectFit:mode // cover,fill,contain
};
 useEffect(()=>{
    if(!lazy){
        setLoaded(true);
        return;
    }
    const handleLoadImage = () => setLoaded(true);
    const imgElement = imgRef.current;
    imgElement && imgElement.addEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
    return () =>{
    imgElement && imgElement.removeEventListener(LOAD_IMG_EVENT_TYPE, handleLoadImage);
    }
 },[lazy]); 
 useEffect(()=>{
    if(!lazy)
        return;
    if(!observer){
        observer = new IntersectionObserver(onIntersection,{threshold})
    }
    const imgElement = imgRef.current;
    imgElement && observer.observe(imgElement);
    return () => {
        imgElement && observer.unobserve(imgElement);
    };
 },[lazy,threshold]);


    return <img ref={imgRef} 
    src={loaded ? src : placeholder}
    alt={alt}
    style={{...props.style,...imageStyle}}
    />;
};
Image.propTypes ={
    lazy: PropTypes.bool,
    threshold: PropTypes.number,
    src: PropTypes.string.isRequired,
    placeholder:PropTypes.string,
    width: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    height: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    alt: PropTypes.string,
    mode: PropTypes,
};
export default Image;