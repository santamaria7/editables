import React from 'react';
import { render, screen } from '@testing-library/react';
import EditableInput from "./EditableInput";

test('renders an editable date input', async () => {
  render(<EditableInput type="date" defaultValue="2020-10-29" label="signup date"/>);
  const input = await screen.findByDisplayValue('2020-10-29');
  expect(input).toBeInTheDocument();
});
