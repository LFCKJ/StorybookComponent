import Upload from '../component/Upload'

export default {
    title: 'Component/Upload',
    component: Upload,
}

export const Default = () =>{
    return (<Upload>
        <button>Click Me</button>
    </Upload>
    );
};

export const AccessFile =() =>{
    return (
        <Upload>
            {(file) => <button>{file ? file.name:"Click me"}</button>}
            
        </Upload>   
    );
};

export const Droppable = ()=>{
    return(
        <Upload droppable>
            {
                (file,dragging)=>(
                    <div style={{
                        width: 300,
                        height: 300,
                        border: '4px dashed black',
                        borderColor: dragging ? "black" : "#aaa",
                        }}> 
                    {file ? file.name : "Click or Drag file to this area to Upload"}
                    </div>
                )}
        </Upload>
    );
};