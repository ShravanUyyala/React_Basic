import React from "react";
import styled from "styled-components";

// Watch the tutorial
// http://react.school/ui/button

const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593"
  },
  
};

const Button = styled.button`
  background-color: ${props => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 15px 20px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${props => theme[props.theme].hover};
  }
  `
Button.defaultProps = {
  theme: "blue"
};

export default function App() {
  return (
    <>
      <a href="https://github.com/ShravanUyyala/React_Basic/pulls" >
        <Button>pull</Button>
      </a>
      <a href="https://github.com/ShravanUyyala/React_Basic/compare" >
        <Button>push</Button>
      </a>
      
    </>
  );
}
