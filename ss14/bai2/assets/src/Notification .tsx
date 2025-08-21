import './App.css'
import { Component } from 'react'

interface Notificate{
  Noti:string
}
export default class Notification extends Component<object,Notificate>{
  constructor(props:object){
    super(props)
    this.state = {
      Noti:"Đã đc mount"
    }
  }
  render() {
      return (
        <>
        </>
      )
  }
  componentDidMount() {
    console.log("Compoment đã được mount!")
  }
}
