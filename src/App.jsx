import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("#FFFFFF");
  const [text, setText] = useState("");

  function isITAColor() {
    if (text.length < 7 || text[0] !== "#") {
      alert("Isto não é uma cor!");
    } else {
      setColor(text);
    }
  }

  return (
    <div className="app">
      <h2>Escolhe uma cor!</h2>
      <input
        type="color"
        onChange={(event) => {
          setColor(event.target.value);
        }}
      />
      <input
        value={text}
        onChange={(event) => {
          setText(event.target.value);
        }}
      />
      <button
        onClick={(event) => {
          isITAColor();
        }}
      >
        Mudar
      </button>

      <div className="box" style={{ backgroundColor: color }}></div>
      <h1>A cor escolhida é {color}</h1>
    </div>
  );
}

export default App;
