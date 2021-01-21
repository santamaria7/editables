import styled from "styled-components";

const theme = {
    black: '#000',
    white: '#fff',
    blue: '#5f8cff',
    green: '#30ab3e',
    red: '#ff0000',
};

const ActionButton = styled.button`
  position: relative;
  cursor: pointer;
  border: none;
  padding: 0;
  width: 20px;
  height: 20px;
  line-height: 20px;
  margin: 0 auto 0 5px;
  outline: none;
  color: ${theme.blue};
  background-color: transparent;
  text-align: center;
  &:focus {
    outline: none;
  }
`;

export const EditableWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: border-color 0.5s ease, padding 0.5s ease;
  &.focused {
    padding: 0 5px;
    border: 1px solid ${theme.blue};
  }
  &.bordered {
    border: 1px solid ${theme.blue};
  }
  label {
    margin-bottom: 0;
  } 
  // Date-picker
  [class*='-Input'] {
    padding: 0;
    margin: 0;
    input {
      box-sizing: border-box;
      margin: 0;
      &[disabled] {
        border: none !important;
        background: none !important;
      }
    }
  }
  
`;
export const EditableLabel = styled.label`
  color: ${theme.blue};
  margin-right: 5px;
  margin-bottom: 0;
  height: 30px;
  line-height: 2;
  min-width: 80px;
`;
export const EditBox = styled.input`
  border: none;
  background: none;
  outline: none;
  height: 30px;
  line-height: 2.1;
  width: 90%;
  &.edit {
    padding: 5px;
    border: 1px solid ${theme.blue};
  }
  &:focus {
    outline: none;
  }
`;
export const ConfirmCancelWrapper = styled.div`
  &.show {
    display: flex;
    align-items: center;
  }
  &.hide {
    display: none;
  }
`;
export const EditButton = styled(ActionButton)`
  width: 25px;
  height: 25px;
  line-height: 25px;
  align-self: center;
`;
export const ConfirmButton = styled(ActionButton)`
  background: none;
  font-size: 17px !important;
  &:before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    height: 7px;
    width: 15px;
    transform: translate(-50%, -110%) rotate(-45deg);
    display: inline-block;
    border-left: 1px solid ${theme.blue};
    border-bottom: 1px solid ${theme.blue};
  }
`;
export const CancelButton = styled(ActionButton)`
  background: none;
  font-size: 14px !important;
`;

export const EditableInputWrapper = styled.div`
  margin: 0.625rem 0 0;
  display: flex;
  justify-content: start;
  flex-wrap: wrap;
`;
export const InputWrapper = styled.div`
  position: relative;
  padding-top: 15px;
  &.inline {
    display: flex;
  }
`;
export const InputLabel = styled.label`
  padding: 0 5px;
  text-transform: uppercase;
  font-size: 10px !important;
  position: absolute;
  top: 8px;
  left: 15px;
  margin: 0;
  z-index: 1;
  &.inline {
    position: relative;
    top: initial;
    left: initial;
    background: initial;
    //font-size: initial !important;
    text-transform: initial;
  }
  `;
export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px;
  border-radius: 5px;
  background: #ffffff !important;
  border: 1px solid ${({ theme }) => theme.lightGrey};
  &.error {
    outline: transparent;
    border: 1px solid red;
  }
  `;

export const SelectWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
`;

export const StyledSelect = styled.select`
  display: inline-block;
  background: #fff;
  padding: 5px;
  border-radius: 5px;
  border: 1px solid ${theme.blue};
`;

export const StyledLabel = styled.label`
  display: inline-block;
  margin-bottom: 0;
  margin-right: 5px;
`;