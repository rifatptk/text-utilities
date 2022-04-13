import "./App.css";
import Header from "./Components/Header";
import TextUtils from "./Components/TextUtils";
import { useState } from "react";

function App() {
  // =====================================
  const [theme, setTheme] = useState("warning");
  function setPrimaryTheme() {
    setTheme("primary");
  }
  function setDangerTheme() {
    setTheme("danger");
  }
  function setWarningTheme() {
    setTheme("warning");
  }
  function setSuccessTheme() {
    setTheme("success");
  }
  function setLightTheme() {
    setTheme("light");
  }
  function setInfoTheme() {
    setTheme("info");
  }
  function setSecTheme() {
    setTheme("secondary");
  }
  return (
    <div className="App">
      <Header title="Text" theme={theme} />
      <TextUtils theme={theme} />
      <div className="m-5">
        <h5 className={`text-${theme}`}>Themes</h5>
        <div className="themes-container d-flex gap-3">
          <div onClick={setPrimaryTheme} className="bg-primary theme-btn"></div>
          <div onClick={setDangerTheme} className="bg-danger theme-btn"></div>
          <div onClick={setWarningTheme} className="bg-warning theme-btn"></div>
          <div onClick={setSuccessTheme} className="bg-success theme-btn"></div>
          <div onClick={setLightTheme} className="bg-light theme-btn"></div>
          <div onClick={setInfoTheme} className="bg-info theme-btn"></div>
          <div onClick={setSecTheme} className="bg-secondary theme-btn"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
