import './App.css'
import { Component } from "react";
import Children_Comp from "./Children_Comp";

interface ParentState {
  fullname: string;
}

export default class Parent_Comp extends Component<{fullname?:string}, ParentState> {
  constructor(props: {fullname?:string}) {
    super(props);
    this.state = {
      fullname: "Nguyễn Văn Nam"
    };
  }

  render() {
    return (
      <div>
        <h2>Họ và tên bên component cha: {this.state.fullname}</h2>
        <Children_Comp fullname={this.state.fullname} />
      </div>
    );
  }
}
