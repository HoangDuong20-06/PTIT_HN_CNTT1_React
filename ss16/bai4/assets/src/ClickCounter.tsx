import { Component } from 'react'
import './App.css'
interface Click{
  count:number
}
export default class ClickCounter extends Component<object,Click> {
  constructor (prop: {count:number}){
    super(prop)
    this.state = {
      count : 0
    }
  }
   handleClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h2>{this.state.count}</h2>
        <button onClick={this.handleClick}>Click me</button>
      </div>
    )
  }
}
