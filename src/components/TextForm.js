import React, {useState} from 'react'

export default function TextForm(props) {

  const handleUpCLick = ()=>{
    let newText = text.toUpperCase()
    setText(newText)  
  }

  const handleLowCLick = ()=>{
    let  newText = text.toLowerCase()
    setText(newText)
  }

  const handleOnChange = (event)=>{
    setText(event.target.value)
  }

  const [text, setText] = useState('');

  return (
    <>
    <div className="container">
      <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpCLick}>Convert to Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowCLick}>Convert to Lowercase</button>
    </div>

    <div className="container my-4">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} word and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} minutes to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}