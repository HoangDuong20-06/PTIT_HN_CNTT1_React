import { Component } from "react";

interface ChildrenProps {
  fullname: string;
}

export default class Children_Comp extends Component<ChildrenProps> {
  render() {
    return (
      <div>
        <h2>Họ và tên bên component con: {this.props.fullname}</h2>
      </div>
    );
  }
}
