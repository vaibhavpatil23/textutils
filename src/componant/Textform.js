import React, { useState } from "react";

export default function Textform(props) {
  const handleupClick = () => {
    // console.log("UPPERcase was click",+text)
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleloClick = () => {
    // console.log("UPPERcase was click",+text)
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleonchang = (event) => {
    // console.log("onchang")
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter test here");
  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div classname="mb-3">
          <label forhtml="mybox" classname="form-label"></label>
          <textarea
            classname="form-control"
            value={text}
            onChange={handleonchang}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
            }}
            id="mybox"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleupClick}>
          convert to upper case
        </button>
        <button className="btn btn-primary mx-2" onClick={handleloClick}>
          convert to Lower case
        </button>
      </div>
      <div className="container">
        <h1>Your text summery</h1>
        <p>
          {text.split(" ").length} words,and {text.length} character
        </p>
        <p>{0.008 * text.split(" ").length} Minite read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
