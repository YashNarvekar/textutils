import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpclick = (event)=>{
        console.log("uppercase was clicked" + text);
        let newText= text.toUpperCase();
        setText(newText)
    }

    const handlelwclick = (event)=>{
        console.log("lowercase was clicked" + text);
        let newText= text.toLowerCase();
        setText(newText)
    }

    const handlelclear = (event)=>{
        console.log("clear button clicked");
        let newText = " ";
        setText(newText);
    }

    const handleOnChange = (event) => {
        console.log("onchange clicked");
        setText(event.target.value)
    }



    const [text, setText]= useState("enter the text here22");

    return ( 
        <>
    <div style={{backgroundColor:props.mode === 'dark' ? 'white':'black'}}>

        <h1 style={{backgroundColor:props.mode === 'dark' ? 'grey':'white'}}>{props.heading}</h1>
        <div className="mb-1">
        <textarea className="form-control" style={{backgroundColor:props.mode === 'dark' ? 'grey':'white', color:props.mode === 'dark' ? 'white':'black'}} value={text} onChange={handleOnChange} id="mybox" rows="12"></textarea>
        </div>
        <div  style={{backgroundColor:props.mode === 'dark' ? 'grey':'white'}}>
        <button className="btn btn-primary me-2" onClick={handleUpclick} >Convert to upper case</button>
        <button className="btn btn-primary me-2" onClick={handlelwclick} >Convert to lower case</button>
        <button className="btn btn-primary me-2" onClick={handlelclear} >Clear text</button>
        </div>

    </div   >
    <div className="container my-3" style={{backgroundColor:props.mode === 'dark' ? 'grey':'white'}}>
        <p>{text.split(" ").length} words and {text.length} character</p>
        <p>{0.008 * text.split(" ").length}  Minutes Read</p>
        <p>Preview</p>
        <h5>{text.length>0 ? text :" Enter in textbox to preview"}</h5>

    </div>
    </>
  )
}
