import Progress from "../component/Progress";
import {useState} from 'react';
export default{
    title:'Component/Progress',
    component: Progress,
}

export const Default =()=>{
    const[Value, setValue] = useState(20)

    return(
        <div>
            <button onClick={()=> setValue(100)}>change value</button>
            <Progress Value={Value}/>
        </div>
    )     
}