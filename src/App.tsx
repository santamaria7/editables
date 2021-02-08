import React from "react";
import "./App.css";
import InputComponent from "./components/InputComponent";
import EditableInput from "./components/editables/EditableInput/EditableInput";

function App() {
  return (
    <div className="App">
      <main>
        <form>
          <InputComponent label="test input 1" />
          <InputComponent label="test input 2" inline />
          <InputComponent placeholder="test input 3" />
          <EditableInput label="Your Name" defaultValue="Marzieh"/>
            <EditableInput defaultValue="Marzieh" />
        </form>
      </main>
    </div>
  );
}

export default App;
