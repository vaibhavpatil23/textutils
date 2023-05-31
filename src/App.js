import { useState } from "react";
import "./App.css";
import About from "./componant/About";
import Navbar from "./componant/Navbar";
// import Textform from "./componant/Textform";
// import React, { useState } from 'react';
// import Alert from "./componant/Alert";

function App() {
  const [mode, setmode] = useState("light");
  const [Alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggelemode = () => {
    if (mode === "light") {
      setmode("dark");
      document.body.Style.backgroundColor = "black";
      showAlert("Dark mode has been enable", "succes");
    } else {
      setmode("light");
      document.body.Style.backgroundColor = "white";
      showAlert("light mode has been enable", "succes");
    }
  };
  return (
    <>
      <Navbar titel="Textnuten" mode={mode} toggelemode={toggelemode} />
      <div className="container">
        <Alert alert="{alert}" />
        {/* <Textform heading="inter the text to analysis" mode={mode} /> */}
        <About />
      </div>
    </>
  );
}

export default App;
