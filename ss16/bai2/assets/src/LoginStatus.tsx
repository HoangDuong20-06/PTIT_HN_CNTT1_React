import './App.css'
import { Component } from 'react'
interface isLoggedIn{
  login:boolean;
}
export default class App extends Component<object,isLoggedIn> {
  constructor(props:{login:boolean}){
    super(props);
    this.state = {
      login:false
    }
  }
   handleClick = () => {
    this.setState({ login: !this.state.login })
  }
  render() {
    return (
      <div>
        <div className='LoginPop'>
          {this.state.login? (<span>🔒 Vui lòng đăng nhập để tiếp tục</span>):(<span>✅ Xin chào, User</span>)}
          {this.state.login? (<button className='LoginButton' onClick={this.handleClick}>Đăng nhập</button>):(<button className='LoginButton' onClick={this.handleClick}>Đăng xuất</button>)}
        </div>
      </div>
    )
  }
}
