import styled from "styled-components";

const theme = {
  black: "#000",
  white: "#fff",
  blue: "#5f8cff",
  green: "#30ab3e",
  red: "#ff0000",
};


export const SelectWrapper = styled.div`
  flex-direction: column;
  display: flex;
  position: relative;
`;

export const Label = styled.label`
  color: ${theme.blue};
  font-weight: bold;
`;

export const Select = styled.select`
  border: none;
  min-width: 150px;
  padding: 10px;
  &:focus {
    outline: none;
  }
  &.bordered {
    border: 1px solid ${theme.blue};
  }
`;


