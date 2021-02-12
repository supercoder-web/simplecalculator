
import './App.css';
import Button  from './component/Button';
import ClearButton from './component/ClearButton';
import Input from './component/Input';

import React, { Component } from 'react';

class App extends Component {
  state = {
    input:"",
    previousNumber:"",
    currentNumber:"",
    operator:""

  };
  Input = val =>{
    this.setState({input:this.state.input + val})
  }
   addZeroToInput = val=>{
     if(this.state.input!== "")
     {
       this.setState({input:this.state.input + val});
     }
   }


addDecimalToInput = val=>{
if(this.state.input.indexOf(".")===-1){
  this.setState({input:this.state.input + val});
}
}
ClearButton = () =>{
  this.setState({input:""});
}

add = () =>{
this.state.previousNumber = this.state.input;
 this.setState({input:""});
 this.state.operator="plus";
}

minus = () =>{
   this.state.previousNumber = this.state.input;
 this.setState({input:""});
 this.state.operator="minus";
 }

product = () =>{
   this.state.previousNumber = this.state.input;
 this.setState({input:""});
 this.state.operator="product";
 }

divide = () =>{
   this.state.previousNumber = this.state.input;
 this.setState({input:""});
 this.state.operator="divide";
 }

evaluate= ()=>{
  this.state.currentNumber = this.state.input;
  if(this.state.operator=="minus"){
    this.setState({
      input:parseInt(this.state.previousNumber)-parseInt(this.state.currentNumber)
    });
  }
   if(this.state.operator=="plus"){
    this.setState({
      input:parseInt(this.state.previousNumber)+parseInt(this.state.currentNumber)
    });
  }
  if(this.state.operator=="product"){
    this.setState({
      input:parseInt(this.state.previousNumber)*parseInt(this.state.currentNumber)
    });
  }
   if(this.state.operator=="divide"){
    this.setState({
      input:parseInt(this.state.previousNumber)/parseInt(this.state.currentNumber)
    });
  }
}
 
  render() {
    return (
      <div className="App">
      <div className="container">
      <div className="row">
       <Input>{this.state.input}</Input>
      </div>
     
      <div  className="row">
      <Button handleClick={this.Input}>7</Button>
      <Button handleClick={this.Input}>8</Button>
      <Button handleClick={this.Input}>9</Button>
      <Button handleClick={this.divide}>/</Button>
      </div>
      <div  className="row">
      <Button handleClick={this.Input}>4</Button>
      <Button handleClick={this.Input}>5</Button>
      <Button handleClick={this.Input}>6</Button>
      <Button handleClick={this.product}>*</Button>
      </div>
      <div  className="row">
      <Button handleClick={this.Input}>1</Button>
      <Button handleClick={this.Input}>2</Button>
      <Button handleClick={this.Input}>3</Button>
      <Button handleClick={this.add}>+</Button>
      </div>
      <div  className="row">
      <Button handleClick={this.addDecimalToInput}>.</Button>
      <Button handleClick={this.addZeroToInput}>0</Button>
      <Button handleClick={this.evaluate}>=</Button>
      <Button handleClick={this.minus}>-</Button>
      </div>
      <div className="row">
      <ClearButton clearClick={this.ClearButton}/>

      </div>
 
      </div>
    </div>
    );
  }
}

export default App;