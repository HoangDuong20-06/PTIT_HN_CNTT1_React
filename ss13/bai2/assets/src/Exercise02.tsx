import {Component}from "react"
import './App.css'
interface Username{
  id:number,
  username:string,
  birth:string,
  address:string,
}
export default class username extends Component<object, Username>{
  constructor(props:object){
    super(props);
    this.state = {
      id: 1,
      username: "Hoang Duong",
      birth: "20/06/2006",
      address: "Hà nội,Việt Nam"
    }; 
  }
  render(){
    return (
      <div>Thông tin cá nhân
        <p>id: {this.state.id}</p>
        <p>Tên: {this.state.username}</p>
        <p>Ngày sinh: {this.state.birth}</p>
        <p>Địa chỉ: {this.state.address}</p>
      </div>
    )
  }
}
