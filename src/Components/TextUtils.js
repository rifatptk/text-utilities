import React, { useState } from "react";

export default function TextUtils() {
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
  function clearText (){
    setText('');
  }

  return (
    <div className="TextUtils">
      <div className="px-5">
        <label htmlFor="text-box" className="form-label fw-bold text-warning">
          Example textarea
        </label>
        <textarea
          onChange={handleOnChange}
          value={text}
          className="form-control bg-dark border-warning text-light"
          id="text-box"
          rows="5"
        />
        <div className="buttons my-2">
          <button
            onClick={upperCase}
            type="button"
            class="btn btn-outline-warning bg-dark"
          >
            Upper Case
          </button>
          <button
            onClick={lowerCase}
            type="button"
            class="btn btn-outline-warning bg-dark ms-2"
          >
            Lower Case
          </button>
          <button onClick={clearText} type="button" class="btn btn-outline-warning ms-2 bg-dark">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}
