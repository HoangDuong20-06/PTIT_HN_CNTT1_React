import { Component } from "react";
import './App.css';
interface State {
  company: string;
}
export default class UpdateState extends Component<{company?:string},State> {
  constructor(props:{company:string} ){
    super(props);
    this.state = {
      company: "Rikkei Academy"
    };
  }
  handleChange = () => {
    this.setState((prevState) => ({
      company: prevState.company === "Rikkei Academy" ? "RikkeiSoft" : "Rikkei Academy"
    }));
  };
  render() {
    return (
      <div>
        <h2>Company: {this.state.company}</h2>
        <button onClick={this.handleChange}>Change state</button>
      </div>
    );
  }
}
