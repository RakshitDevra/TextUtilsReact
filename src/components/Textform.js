import React, {useState} from 'react'

export default function Textform(props) {

    const [text,setText]=useState("");
    const handleupclick = () => {
        // console.log("Uppercase was clicked on " + text);
        const newText=text.toUpperCase();

        setText(newText);
        props.showAlert("Converted to Upperscase!","success ")

    }
    const handledownclick = () => {
        // console.log("Lowercase was clicked on " + text);
     //   const newText=text.toUpperCase();

        setText(text.toLowerCase());
        props.showAlert("Converted to Lowercase!","success ")

    }
    const handleclearclick = () => {
        setText('');
        props.showAlert("Text Cleared!","success ")
    }

    const handleOnChange = (event) => {
        // console.log("On change");
        setText(event.target.value);

    }
    // button given by a student
    const handleCopy =() => {
      var text=document.getElementById('myBox');
      text.select();
      navigator.clipboard.writeText(text.value);
      document.getSelection().removeAllRanges();
      props.showAlert("Text copied to clipboard!","success ")
    }
    // button given by a student
    const handleExtraSpaces= () =>{
      let newText=text.split(/[*]+/);
      setText(newText.join(" "))
      props.showAlert("Extraspaces Removed!","success ")
    } 
    let btnstyle={
      marginLeft:13

    }
  return (
    <>
    <div>
        <h1 style={{color:props.mode==='dark'?'white':'black'}}>{props.heading}</h1>

  <div className="mb-3" style={{color:props.mode==='dark'?'white':'black'}}>
    
    <textarea className="form-control" value={text} onChange={handleOnChange}  style={{backgroundColor: props.mode==='dark'?'#2e2424':'white',color:props.mode==='dark'?'white':'black'}}id="myBox" rows="13"></textarea>
  </div>
  <button disabled={text.length===0}className='btn btn-info mx-1 my-1' onClick={handleupclick} style={btnstyle} >Convert to uppercase</button>
  <button disabled={text.length===0} className='btn btn-secondary  mx-1 my-1' onClick={handledownclick} style={btnstyle} >Convert to Lowercase</button>
  <button  disabled={text.length===0} className='btn btn-warning  mx-1 my-1 '   onClick={handleclearclick}  style={btnstyle}>Clear Text</button>
  <button  disabled={text.length===0}className='btn btn-success  mx-1 my-1 '   onClick={handleCopy}  style={btnstyle}>Copy Text</button>
  <button disabled={text.length===0} className='btn btn-danger  mx-1 my-1 '   onClick={handleExtraSpaces}  style={btnstyle}>Remove Extra Spaces </button>

  </div>
  <div className="container my-15px" style={{color:props.mode==='dark'?'white':'black'}}>
    <h1>Your text summary </h1>
    <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>

    {/* // {filter function -> arrow function jis bhi element ke liye true return karega wo eleemnt iss array mai rahega.jis ke liye true return nahi karega wo element iss array mai nahi rahega.(text.split(" ") space par split karke ek array return kar raha tha })   */}
   <p>it will take {0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
   <h2>Preview</h2>
   <p>
    {text.length>0?text:"Enter something in the textbox above  to preview it here"}
   </p>
  </div>
  </>
  )
}
