import React, { Component } from 'react'
import { userService } from '../services/user.service'

export class Signup extends Component {

  state = {
    name: ''
  }

  onSignup = (ev) => {
    ev.preventDefault()

    try {
      userService.signup(this.state.name)
      this.props.history.push('/')
    } catch (error) {
      console.log(error)
    }
  }

  handleChange = ({ target }) => {
    let value = target.value
    this.setState({ name: value })
  }

  render() {
    return (
      <form className='signup' onSubmit={this.onSignup}>
        <span><i className="fa-brands fa-bitcoin"></i></span>
        <input onChange={this.handleChange}
          placeholder='Pleace enter your name' type='text' />
        <button>sign up</button>
      </form>
    )
  }
}

export default Signup
