import React, { FormEvent, useMemo, useState } from "react";
import "./App.css";
import EditableInput from "./components/editables/EditableInput/EditableInput";
import EditableSelect from "./components/editables/EditableSelect";

function App() {
  const options = useMemo(() => {
    return [
      {
        value: "default",
        label: "-",
      },
      {
        value: "F",
        label: "Female",
      },
      {
        value: "M",
        label: "Male",
      },
    ];
  }, []);
  // In a real world example this data comes from the backend
  const userData = useMemo(() => {
    return {
      name: "Marzieh",
      age: "32",
      color: "#ffbb22",
      gender: "F",
    };
  }, []);
  const [name, setName] = useState(userData.name);
  const [age, setAge] = useState(userData.age);
  const [color, setColor] = useState(userData.color);
  const [gender, setGender] = useState(userData.gender);
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const payload = {
      name,
      age,
      color,
      gender,
    };
    console.log(payload);
    alert("Successfully Saved");
  };
  return (
    <div className="App">
      <main>
        <form onSubmit={onSubmit}>
          <h1>Client's Profile</h1>
          <EditableInput
            label="Name"
            defaultValue={name}
            confirmAction={setName}
          />
          <EditableInput
            label="Age"
            defaultValue={age}
            confirmAction={setAge}
          />
          <EditableInput
            label="Favorite Color"
            defaultValue={color}
            type="color"
            confirmAction={setColor}
          />
          <EditableSelect
            label="Gender"
            options={options}
            defaultValue={gender}
            confirmAction={setGender}
          />
          <button type="submit">Save Changes</button>
        </form>
      </main>
    </div>
  );
}

export default App;
