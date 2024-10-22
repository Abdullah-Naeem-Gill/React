import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clear = () => {
    let newText = "";
    setText(newText);
  };
  const speak = () => {
    let msg = new SpeechSynthesisUtterance();
    msg.text = text;
    window.speechSynthesis.speak(msg);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //   setText = ("new text");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            placeholder="Enter any text here"
            value={text}
            onClick={handleOnChange}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary , mx-1" onClick={handleUpClick}>
          Convert to UpperCAse
        </button>
        <button className="btn btn-dark , mx-1" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-success , mx-1" onClick={speak}>
          Listen
        </button>
        <button className="btn btn-danger , mx-1" onClick={clear}>
          clear text
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {text.split(" ").length} words {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
