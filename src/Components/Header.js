import React from "react";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header-container my-5 p-5 bg-dark w-25">
      <h1 className="fw-bold">
        {props.title}
        <span className={`text-${props.theme}`}>Utilities</span>
      </h1>
    </div>
  );
}
