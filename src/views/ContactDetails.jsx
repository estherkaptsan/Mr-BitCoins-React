import { Component } from 'react'
import { contactService } from '../services/contact.service'
import { spendBalance, transferCoins } from '../store/actions/user.actions'
import { connect } from 'react-redux'
import TransferFund from '../cmps/TransferFund'
import MovesList from '../cmps/MovesList'

class _ContactDetails extends Component {
    state = {
        contact: null
    }

    componentDidMount() {
        this.loadContact()
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.match.params.id !== this.props.match.params.id) {
            this.loadContact()
        }
    }

    loadContact = async () => {
        try {
            const contact = await contactService.getContactById(this.props.match.params.id)
            this.setState({ contact })
        } catch (error) {
            console.log('error:', error)
        }
    }

    onBack = () => {
        this.props.history.push('/contact')
    }

    onTransferCoins = (amount, contact) => {
        this.props.transferCoins(amount, contact)
    }

    get filterMoves() {
        const { contact } = this.state
        const { user } = this.props
        return user.moves.filter((move) => move.toId === contact._id)
    }

    render() {
        const { contact } = this.state
        const { user } = this.props
        
        if (!contact) return <div>Loading...</div>
        return (
            <>
                <section className='contact-details'>
                    <section>
                        <img src={require(`../assets/imgs/user.png`)} />
                    </section>
                    <section>
                        <h1>{contact.name}</h1>
                    </section>
                    <section>
                        <h4>{contact.phone}</h4>
                    </section>
                    <section>
                        <h4>{contact.email}</h4>
                    </section>
                    <button onClick={this.onBack}><i className="fa-solid fa-circle-arrow-left"></i></button>
                </section>

                <section>
                    <TransferFund
                        contact={contact}
                        maxCoins={user.coins}
                        onTransferCoins={this.onTransferCoins}
                    />
                </section>
                <section>
                    <MovesList title={'Your Moves: '} moves={this.filterMoves} />
                </section>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    user: state.userModule.loggedInUser
})

const mapDispatchToProps = { spendBalance, transferCoins }

export const ContactDetails = connect(mapStateToProps, mapDispatchToProps)(_ContactDetails)
