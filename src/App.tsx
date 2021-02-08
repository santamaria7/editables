import React, { useMemo } from "react";
import "./App.css";
import EditableInput from "./components/editables/EditableInput/EditableInput";
import EditableSelect from "./components/editables/EditableSelect";

function App() {
  const options = useMemo(() => {
    return [
      {
        value: "Female",
        label: "Female",
      },
      {
        value: "Male",
        label: "Male",
      },
    ];
  }, []);
  return (
    <div className="App">
      <main>
        <form>

          <EditableInput label="Your Name" defaultValue="Marzieh" />
          <EditableInput defaultValue="Marzieh" />
          <EditableSelect options={options} label="Gender" />
        </form>
      </main>
    </div>
  );
}

export default App;
