import React from "react";
import { render, screen } from "@testing-library/react";
import EditableSelect from "./index";

test("renders an editable select box", async () => {
  const options = [
    {
      label: "employed",
      value: "E",
    },
    {
      label: "unemployed",
      value: "U",
    },
  ];
  render(
    <EditableSelect options={options} label="employment" defaultValue="E" />
  );
  const select = await screen.findByText("employed");

  expect(select).toBeInTheDocument();
});
