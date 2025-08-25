import './App.css'
import { Component } from 'react'

interface ThemeState {
  isDarkMode: boolean
}

export default class ThemeSwitcher extends Component<object, ThemeState> {
  constructor(props: object) {
    super(props)
    this.state = {
      isDarkMode: false
    }
  }

  handleClick = () => {
    this.setState({ isDarkMode: !this.state.isDarkMode })
  }

  render() {
    const { isDarkMode } = this.state

    return (
      <div className={isDarkMode ? 'theme dark' : 'theme light'}>
        <h2>
          {isDarkMode ? '🌙 Chế độ Tối đang bật' : '☀️ Chế độ Sáng đang bật'}
        </h2>
        <button onClick={this.handleClick}>Chuyển theme</button>
      </div>
    )
  }
}
