import React from "react";
import "./App.css";
import InputComponent from "./components/InputComponent";

function App() {
  return (
    <div className="App">
      <main>
        <form>
          <InputComponent label="test input 1" />
          <InputComponent label="test input 2" inline />
          <InputComponent placeholder="test input 3" />
        </form>
      </main>
    </div>
  );
}

export default App;
