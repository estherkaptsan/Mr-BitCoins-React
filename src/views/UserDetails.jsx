import React, { Component } from 'react'
import { userService } from '../services/user.service'
import { bitcoinService } from '../services/bitcoin.service'
import MovesList from '../cmps/MovesList'

export default class UserDetails extends Component {
  state = {
    user: null,
    bitcoinRate: null,
  }
  async componentDidMount() {
    const user = await userService.getUser()
    if (!user) this.props.history.push('/signup')
    const bitcoinRate = await bitcoinService.getRate(user.coins)
    this.setState({ user, bitcoinRate })
  }

  
  get lastThreeMoves() {
    const { user } = this.state
    return user.moves.slice(0,3)
  }

  render() {
    const { user, bitcoinRate } = this.state
    if (!user || !bitcoinRate) {
      return <div>Loading...</div>
    }
    return (
      <><section className='user-details'>
        <section className="user text-center">
          <h1>Hello {user.name}! </h1>
          <div className='flex space-around user-balance'>
          <h2>Your Current Balance: {user.coins}$ </h2>
          <h3>BTC Rate: {bitcoinRate}</h3>
          </div>
        </section>
        <hr></hr>
        <MovesList title={'Your Last 3 Moves:'} moves={this.lastThreeMoves}/>
        </section>
      </>
    )
  }
}
