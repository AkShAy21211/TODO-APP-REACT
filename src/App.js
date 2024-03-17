import React, { useEffect, useState ,useMemo,useRef} from "react";
import './App.css';
import "./style.css";
import Style from "./style.module.css"
import "./style.scss"
import { Button,Alert,Card } from 'react-bootstrap';
import ChildCom from "./ChildCom";
import Ref from "./Ref";




function  App(){


  let inputRef1 = useRef(null);
  let inputRef2 = useRef(null);

  const submit = (e)=>{

    e.preventDefault();
    console.log("firest input value1",inputRef1.current.value);
    console.log("firest input value2",inputRef2.current.value);

    let input3 = document.getElementById("input3").value;

    console.log("three input value",input3);

  }

return(
  <React.Fragment>
    <h1> react </h1>
    <form onSubmit={submit}>
      <input type="text" ref={inputRef1}/>
      <input type="text" ref={inputRef2}/>
      <input type="text" id="input3"/>
      <button >submit</button>
    </form>
  </React.Fragment>
)
}

export default App;
