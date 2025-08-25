import './App.css'
import { Component } from 'react'
import type { ChangeEvent, FormEvent } from 'react'

interface UserFormState {
  name: string
  email: string
  age: string
  error: string
  submitted: boolean
}

export default class UserForm extends Component<object, UserFormState> {
  constructor(props: object) {
    super(props)
    this.state = {
      name: '',
      email: '',
      age: '',
      error: '',
      submitted: false,
    }
  }

  handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    this.setState({
      ...this.state,
      [name]: value,
      error: '',
      submitted: false,
    } as Pick<UserFormState, keyof UserFormState>)
  }

  handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const { email, age } = this.state
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      this.setState({ error: '⚠️ Email không hợp lệ', submitted: false })
      return
    }
    if (parseInt(age) < 0) {
      this.setState({ error: '⚠️ Tuổi không được âm', submitted: false })
      return
    }
    this.setState({ error: '', submitted: true })
  }

  handleReset = () => {
    this.setState({
      name: '',
      email: '',
      age: '',
      error: '',
      submitted: false,
    })
  }

  render() {
    const { name, email, age, error, submitted } = this.state

    return (
      <div className="form-container">
        <h2>📋 Nhập thông tin người dùng</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Họ tên"
            value={name}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={email}
            onChange={this.handleChange}
          />
          <input
            type="number"
            name="age"
            placeholder="Tuổi"
            value={age}
            onChange={this.handleChange}
          />
          <div className="btn-group">
            <button type="submit">Gửi</button>
            <button type="button" onClick={this.handleReset} className="reset-btn">
              Xóa tất cả
            </button>
          </div>
        </form>

        {error && <p className="error">{error}</p>}

        {submitted && (
          <div className="result">
            <h3>✅ Thông tin đã nhập:</h3>
            <p>Họ tên: {name}</p>
            <p>Email: {email}</p>
            <p>Tuổi: {age}</p>
          </div>
        )}
      </div>
    )
  }
}
