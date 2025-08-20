import './App.css'
import { Component } from "react";
import Children_Comp from "./Children_Comp";

interface ParentState {
  id:number;
  productname: string;
  price:number;
  quantity:number;
}

export default class Parent_Comp extends Component<{id?:number,productname?:string,price?:number,quantity?:number}, ParentState> {
  constructor(props: {id:number,productname:string,price:number,quantity:number}) {
    super(props);
    this.state = {
      id:1,
      productname:"Bưởi ba roi",
      price:12.000,
      quantity:6
    };
  }

  render() {
    return (
      <div>
        <h2>Dữ liệu trong component con</h2>
        <Children_Comp 
        id = {this.state.id} 
        productname = {this.state.productname}
        price = {this.state.price}
        quantity = {this.state.quantity}/>
      </div>
    );
  }
}
