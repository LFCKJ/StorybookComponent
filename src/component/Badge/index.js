import styled from "@emotion/styled"

const BadgeContainer = styled.div`
position: relative;
display: inline-block;
`;
const Super = styled.sup`
position: absolute;
top:0;
right: 0;
display: inline-flex;
align-items: center;
height: 20px;
padding: 0 8px;
font-size: 12px;
color: white;
border-radius: 20px;
background-color: #f44;
transform: translate(50%, -50%);

&.dot{
padding: 0,
width: 6px;
heidht: 6px;
border-radius:50%;
}

`

const Badge = ({
    children,
    count,
    maxCount,
    showZero,
    dot = false,
    backgroundColor,
    textColor,
     ...props})=>{


  const colorStyle ={
    backgroundColor: backgroundColor,
    color: textColor,

  };

  let badge = null;
  if(count>=0){
   badge = (<Super style={colorStyle}>
        {maxCount && count > maxCount? `${maxCount}+`: count}
   </Super>);

  }else{
    if(count !== undefined){
        badge = (showZero ? <Super style={colorStyle}>0</Super>:null);
    }
    else if(dot){
        badge=(<Super className="dot" style={colorStyle}/>);
    }
  };
    
    
    return( 
    <BadgeContainer {...props}>
        {children} {badge}
     </BadgeContainer>);
};
//if(count > MaxCount){maxCount+}else{count}


export default Badge;