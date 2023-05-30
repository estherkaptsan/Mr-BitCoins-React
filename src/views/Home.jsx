import { Component } from 'react'
import { userService } from '../services/user.service'
import { bitcoinService } from '../services/bitcoin.service'
import MovesList from '../cmps/MovesList'

export class Home extends Component {

    state = {
        user: null,
        rate: null
    }

    componentDidMount() {
        this.loadUser()
    }

    loadUser = async () => {
        try {
            const user = await userService.getUser()
            this.setState({ user }, () => this.loadRate())

        } catch (err) {
            console.log('err:', err)
        }
    }

    loadRate = async () => {
        try {
            const rate = await bitcoinService.getRate(this.state.user.coins)
            this.setState({ rate })
            console.log('rate')
        } catch (err) {
            console.log('err:', err)
        }
    }

    render() {
        const { user, rate } = this.state
        if (!user) return <div className="contact-home">loading..</div>
        if (!rate) return <div className="contact-home">no rate..</div>

        return (
            <>
                <section className="contact-home">
                    <h2>HELLO  {user.name}!</h2>
                    <h2><i className="fa-solid fa-coins"></i> coins: {user.coins}</h2>
                    <h2><i className="fa-brands fa-bitcoin"></i> BTC: {rate}</h2>
                </section>
                <section>
                    {console.log(user.moves)}
                    <MovesList  title={'Your 3 last moves:'} moves={user.moves}/>
                </section>
            </>
        )
    }
}