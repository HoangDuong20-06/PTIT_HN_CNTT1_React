import { Component } from "react";

interface ChildrenProps {
  id:number;
  productname: string;
  price:number;
  quantity:number;
}

export default class Children_Comp extends Component<ChildrenProps> {
  render() {
    return (
      <div>
        <h2>Dữ liệu trong component con</h2>
        <p>Id: {this.props.id}</p>
        <p>Tên sản phẩm: {this.props.productname}</p>
        <p>Giá sản phẩm: {this.props.price} đ</p>
        <p>Số lượng: {this.props.quantity}</p>
      </div>
    );
  }
}
