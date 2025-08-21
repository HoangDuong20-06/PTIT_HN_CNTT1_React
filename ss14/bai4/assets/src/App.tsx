import { Component } from "react";
import './App.css';
interface State {
  slogan: string;
}
export default class UpdateState extends Component<{slogan?:string},State> {
  constructor(props:{slogan:string} ){
    super(props);
    this.state = {
      slogan: "Học code để đi làm"
    };
  }
  handleChange = () => {
    this.setState({ slogan: "Học code sẽ thành công. Cố lên!!!" });
  };
   shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div>
        <h2>Slogan: {this.state.slogan}</h2>
        <button onClick={this.handleChange}>Change state</button>
      </div>
    );
  }
}
