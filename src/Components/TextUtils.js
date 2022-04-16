import React, { useState } from "react";


export default function TextUtils(props) {
  
  
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  function upperCase() {
    setText(text.toLocaleUpperCase());
  }
  function lowerCase() {
    setText(text.toLowerCase());
  }
  function clearText() {
    setText("");
  }

  function removeExtraSpace() {
    let newTxt = text.split(/[ ]+/);
    newTxt = newTxt.join(" ");
    setText(newTxt);
  }

  return (
    <div className={`TextUtils `}>
      <div className="px-5">
        <label
          htmlFor="text-box"
          className={`form-label fw-bold text-${props.theme}`}
        >
          Enter Your Text Here
        </label>
        <textarea
          onChange={handleOnChange}
          value={text}
          className={`form-control bg-dark border-${props.theme} text-light`}
          id="text-box"
          rows="5"
        />
        <div className="buttons my-2">
          <button
            onClick={upperCase}
            type="button"
            class={`btn btn-outline-${props.theme} bg-dark`}
          >
            Upper Case
          </button>
          <button
            onClick={lowerCase}
            type="button"
            class={`btn btn-outline-${props.theme} bg-dark ms-2`}
          >
            Lower Case
          </button>
          <button
            onClick={clearText}
            type="button"
            class={`btn btn-outline-${props.theme} bg-dark ms-2`}
          >
            Clear
          </button>
          <button
            onClick={removeExtraSpace}
            type="button"
            class={`btn btn-outline-${props.theme} bg-dark ms-2`}
          >
            extra Space
          </button>
        </div>
      </div>
      <div className={`m-5 text-${props.theme}`}>
        <h6>Char count : {text.length}</h6>
        <h6>Word count : {text.split(' ').length}</h6>
      </div>
    </div>
  );
}
