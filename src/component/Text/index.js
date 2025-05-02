import PropTypes from "prop-types";
import "./Text.css";
const Text=({children,size,strong,underline,delete: del,color,block,paragraph,mark,code,...props}) => {
   
    const Tag=block ? 'div' : paragraph ? 'p' :'span'; 
  
    const fontStyle = {
        fontWeight: strong ? "bold" : undefined,
        fontSize : typeof size === 'number' ? size : undefined,
        textDecoration: underline ? 'underline' : undefined,
        color,

    };
    if(mark){
        children = <mark>{children}</mark>;
    }
    if(code){
        children = <code>{children}</code>;
    }
    if(del){
        children = <del>{children}</del>;
    }
    return(
        <Tag className={typeof size === "string" ?`Text--size-${size}` : undefined}
         style={{...props.style,...fontStyle}}{...props}>
            {children}
        </Tag>
    );
};
Text.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    block: PropTypes.bool,
    paragraph: PropTypes.bool,
    strong: PropTypes.bool,
    underline: PropTypes.bool,
    delete: PropTypes.bool,
    color: PropTypes.string,
    mark: PropTypes.bool,
    code: PropTypes.bool,
    style: PropTypes.object,
};
export default Text;