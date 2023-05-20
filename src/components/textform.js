import React, {useState} from 'react'
export default function TextForm(props){
    const handleUpClick=() =>{
        let newText=text.toUpperCase();
        settext(newText);
    }
    const handleOnChange=(event) =>{
        settext(event.target.value)
    }
    const LowerCase=()=>{
        let tet=text.toLowerCase()
        settext(tet)
    }
    const [text,settext]=useState("Enter the Text")

    function clr(event){
        settext("")
    }
    let [namer,setname]=useState("enter your name")
    let count=0;
    const store=(ice)=>{
            setname(ice.target.value);
    }
    const proceed=(event)=>{
        setname=("")
    }

 return(
    <>
    <div>
        <h1 style={{color:props.mode==="dark"?"red":"black"}}>{props.heading}+fdfdf</h1>
        <textarea className="form-control"  value={text} onChange={handleOnChange} row="8" style={{backgroundColor: props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}}> 
        </textarea>
    </div>
    <button className="btn btn-primary" onClick={handleUpClick}>Convert To Upper Case</button>
    <button className="btn btn-primary" onClick={LowerCase}>Convert To lower Case</button>
    <button className="btn btn-primary, mx-25" onClick={clr} style={{color:props.mode==="dark"?"red":"black"}}>clear text</button>
    <div>
        <textarea id="" cols="200" rows="5" value={namer} onChange={store} style={{backgroundColor: props.mode==="dark"?"grey":"white",color:props.mode==="dark"?"white":"black"}} ></textarea>
        <button className="btn btn-secondary" onClick={proceed}>Proceed</button>

    </div>
    </>
 )   
}