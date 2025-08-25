import { Component } from 'react'
import "./App.css"
type Subject = {subject:string}
interface State {
  list:Subject[]
}
export default class SubjectList extends Component<{subject?:string},State> {
  constructor(props:{subject?:string}){
    super(props);
    this.state = {
      list:[
        {subject:"Toán"},
        {subject:"Văn"},
        {subject:"Anh"},
        {subject:"Hóa"},
        {subject:"Sinh"}
      ],
    };
  };
  render() {
    return (
      <div >
        <h2>📚Danh sách môn học</h2>
        <div className = "body">
          {this.state.list.map((item, index) => (
        <button key={index}>{item.subject}</button>
        ))}
        </div>
      </div>
    )
  }
}
