import React,{memo} from 'react'

function ChildCom(props) {

    console.log("childern component");
  return (
    <div>
      <h3 className='App'>child component</h3>
      <h4 style={{backgroundColor:"red",padding:"30px"}}>count: {props.count}</h4>

    </div>
  )
}

export default memo(ChildCom);
