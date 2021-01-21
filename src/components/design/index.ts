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
    text-transform: initial;
  }
  `;
export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 5px;
  border-radius: 5px;
  background: #ffffff !important;
  border: 1px solid ${theme.blue};
  &.error {
    outline: transparent;
    border: 1px solid red;
  }
  `;

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



export const DatePickerWrapper = styled.div`
  .react-datepicker__input-container {
    input {
      border: none;
      &:focus {
        outline: none;
      }
    }
  }
  .react-datepicker-popper {
    z-index: 20;
    margin-top: 5px;
    box-shadow: 1px 1px 12px rgb(0, 0, 0, 0.32);
    .react-datepicker {
      border-radius: 8px;
      background-color: #ffffff;
      box-shadow: 0 20px 20px 0 rgba(0, 0, 0, 0.06);
      border: none;
      .react-datepicker__triangle {
        display: none;
      }
      .react-datepicker__navigation {
        width: 14px;
        height: 14px;
      }
      .react-datepicker__navigation--previous {
        border-right-color: transparent;
        border: none;
        left: 15px;
        background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTAwIDUwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTAwIDUwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiM5RkEwQTQ7fTwvc3R5bGU+PHRpdGxlPlBhdGg8L3RpdGxlPjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPjxnIGlkPSJTeW1ib2xzIj48ZyBpZD0ic2VjdGlvbnMtX3gyRl8tZm9vdGVyLV94MkZfLWRlc2t0b3AiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDApIHJvdGF0ZSg5MCAyNTAgMjUwKSI+PHBhdGggY2xhc3M9InN0MCIgZD0iTTQ4MiAyNjhsLTIxNCAyMTRjLTMgMy04IDUtMTIgNS00IDAtOS0yLTEyLTVsLTIxNC0yMTRjLTYtNy02LTE3IDAtMjQgMy0zIDctNCAxMi00IDQgMCA4IDEgMTEgNGwxODcgMTg3IDAtMzg5YzAtOSA3LTE3IDE2LTE3IDkgMCAxNiA4IDE2IDE3bDAgMzg5IDE4Ny0xODdjNi02IDE2LTYgMjMgMCA2IDcgNiAxNy0yMyAxN3oiLz48L2c+PC9nPjwvc3ZnPg==);
      }
      .react-datepicker__navigation--next {
        border-left-color: transparent;
        border: none;
        right: 15px;
        background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTAwIDUwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTAwIDUwMDsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiM5RkEwQTQ7fTwvc3R5bGU+PHRpdGxlPlBhdGg8L3RpdGxlPjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPjxnIGlkPSJTeW1ib2xzIj48ZyBpZD0ic2VjdGlvbnMtX3gyRl8tZm9vdGVyLV94MkZfLWRlc2t0b3AiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDApIHJvdGF0ZSgyNzAgMjUwIDI1MCkiPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00ODIgMjY4bC0yMTQgMjE0Yy0zIDMtOCA1LTEyIDUtNCAwLTktMi0xMi01bC0yMTQtMjE0Yy02LTctNi0xNyAwLTI0IDMtMyA3LTQgMTItNCA0IDAgOCAxIDExIDRsMTg3IDE4NyAwLTM4OWMwLTkgNy0xNyAxNi0xNyA5IDAgMTYgOCAxNiAxN2wwIDM4OSAxODctMTg3YzYtNiAxNi02IDIzIDAgNiA3IDYgMTctMjMgMTd6Ii8+PC9nPjwvZz48L3N2Zz4=);
      }
    }
    .react-datepicker__month-container {
      .react-datepicker__header {
        background-color: #ffffff !important;
        border-bottom: none !important;
        .react-datepicker__current-month {
          display: none;
        }
        .react-datepicker__day-name {
          color: #9fa0a4;
          font-weight: bold;
        }
        .react-datepicker__month-select,
        .react-datepicker__year-select {
          border: none;
          color: #20293f;
          font-size: 14px;
          font-weight: bold;
          appearance: none !important;
          -webkit-appearance: none;
          -moz-appearance: none;
          background: transparent
            url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4IiB2aWV3Qm94PSIwIDAgNTAwIDUwMCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTAwIDUwMDsgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsOiMwMDAwMDA7fTwvc3R5bGU+PHRpdGxlPlBhdGg8L3RpdGxlPjxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPjxnIGlkPSJTeW1ib2xzIj48ZyBpZD0ic2VjdGlvbnMtX3gyRl8tZm9vdGVyLV94MkZfLWRlc2t0b3AiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAsIDApIj48cGF0aCBjbGFzcz0ic3QwIiBkPSJNNDgxIDM3NWMtNiA2LTE2IDYtMjMgMGwtMjAyLTIwMy0yMDMgMjAzYy02IDYtMTYgNi0yMyAwLTYtNy02LTE3IDAtMjNsMjE0LTIxNGMzLTMgNy01IDEyLTUgNCAwIDggMiAxMSA1bDIxNCAyMTRjNyA2IDcgMTYgMCAyM3oiLz48L2c+PC9nPjwvc3ZnPg==)
            no-repeat right 0 center;
          background-size: 12px 12px;
          text-align-last: right;
          padding-right: 18px;
          outline: none;
        }
        .react-datepicker__month-dropdown-container {
          margin-right: 16px;
        }
      }
      .react-datepicker__month {
        .react-datepicker__week {
          .react-datepicker__day {
            font-size: 14px;
            font-weight: 300;
          }
        }
      }
    }
  }
  .react-datepicker__day--outside-month:not(.react-datepicker__day--disabled) {
    color: rgba(0, 0, 0, 0.8);
    font-size: 90%;
  }
`;
