import React from "react";
import { Button } from "react-bootstrap";
import "./App.css"


function TodoButton(props) {

  return (
    <Button 
      className=" glowing-shadow " onClick={props.onClick}
    >
      {props.text}
    </Button>
  );
}

export default TodoButton;
