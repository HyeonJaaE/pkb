import styled from "styled-components";

export const parseAddress = (address = "") => {
  return `${address.slice(0, 4)}...${address.slice(39)}`;
};

export const padNumber = (num, length) => {
  return String(num).padStart(length, "0");
};

export const shuffle = (array) => array.sort(() => Math.random() - 0.5);

export const theme = {
  walletBt: {
    default: "#FFA7A7",
    hover: "#fdd5d5"
  },
  voteBt: {
    default: "#EAEAEA",
    hover: "#FF6C6C"
  }
};

export const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;