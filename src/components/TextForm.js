import React,{useState} from 'react'

export default function TextForm(props) {

    const handleUpClick= ()=>{
       // console.log("Clicked", text);
        let newText=text.toUpperCase();
        setText(newText)
        props.showAlert("Convertes to uppercase!", "success")
    }
    const handleLoClick= ()=>{
        // console.log("Clicked", text);
         let newText=text.toLowerCase();
         setText(newText)
         props.showAlert("Convertes to lowercase!", "success")
     }
     const handleClearClick= ()=>{
        // console.log("Clicked", text);
         setText('')
     }
     const handleCopyClick= ()=>{
      navigator.clipboard.writeText(text)
      props.showAlert("Text Copied to Clipboard!", "success")
     }
     const handleExtraSpaces= ()=>{  
       let newText = text.split(/[ ]+/)
       setText(newText.join(" "))
       props.showAlert("Extra Spaces has been removed!", "success")
     }
    const handleOnChange= (event)=>{
       // console.log("On Change");
        setText(event.target.value)
    }

    const [text, setText] = useState('')
    // text="new text"  //not allowed in react
    // setText("new text") //allowed
  return (
    <>
    <div className='container' style={{color: props.mode==='dark'?'white':'#042743'}}> 
        <h1 className='mb-2'>{props.heading}</h1>
      <div className="mb-3">
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white'
  ,color: props.mode==='dark'?'white':'#042743'}}
  rows="8" id="myBox" />
</div>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>Convert to Uppercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>Convert to Lowercase</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy Text</button>
<button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>

    <div className="container my-3" style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your Text Summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text.length>0?text:'Nothing to preview here'}</p>
    </div>
    </>
  )
}
