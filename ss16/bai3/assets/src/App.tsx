import './App.css'
import { Component } from 'react'

export default class App extends Component {
  render() {
    return (
      <div className='body'>
        <button style={{backgroundColor:"#0d6efd"}}>Primary</button>
        <button style={{backgroundColor:"#6c757d"}}>Secondary</button>
        <button style={{backgroundColor:"#198754"}}>Success</button>
        <button style={{backgroundColor:"#ffc107",color:"black"}}>Warning</button>
        <button style={{backgroundColor:"#dc3545"}}>Danger</button>
        <button style={{backgroundColor:"#0dcaf0",color:"black"}}>Info</button>
        <button style={{backgroundColor:"#f8f9fa",color:"black"}}>Light</button>
        <button style={{backgroundColor:"#212529"}}>Dark</button>
        <button style={{backgroundColor:"#242424",border:"none"}}> <a href="#" style={{color:"#0d6efd", textDecoration:"underline"}}>Link</a></button>
      </div>
    )
  }
}
