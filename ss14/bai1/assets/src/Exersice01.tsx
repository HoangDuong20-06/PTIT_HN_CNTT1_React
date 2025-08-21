import {Component}from "react"
import './App.css'
interface Username{
  username:string;
}
export default class username extends Component<object, Username>{
  constructor(props:object){
    super(props);
    this.state = {
      username: "Hoang Duong"
    }; 
  }
  render(){
    return (
      <div><p>Họ và tên: {this.state.username}</p></div>
    )
  }
}
