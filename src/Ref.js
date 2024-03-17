import React, { Component,createRef } from 'react'

class Ref extends Component {



    constructor(){
        super();

        this.inpurRef = createRef(); 

     
    }



    // componentDidMount(){

    //     this.inpurRef.current.value="akshay"

    //     console.log(this.inpurRef.current.value);
    // }


    handle=()=>{

        this.inpurRef.current.focus();
        this.inpurRef.current.style.background="green";
        this.inpurRef.current.style.color="white";
        console.log(this.inpurRef.current.value);
    }
  render() {
    // console.log(this.inpurRef);
    return (
      <div>
        <h1>react ref</h1>

        <input type='text' ref={this.inpurRef}/>
        <button onClick={this.handle}>click focus</button>
      </div>
    )
  }
}

export default Ref
