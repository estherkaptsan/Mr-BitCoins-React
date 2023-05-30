import { Component } from 'react'
import { contactService } from '../services/contact.service'
import { ContactList } from '../cmps/ContactList'
import { ContactDetails } from './ContactDetails'
import { ContactFilter } from '../cmps/ContactFilter'
import { connect } from 'react-redux'
import { loadContacts, removeContact, setFilterBy } from '../store/actions/contact.actions'

export class _ContactIndex extends Component {

    componentDidMount() {
        this.props.loadContacts()
    }

    onChangeFilter = (filterBy) => {
        this.props.setFilterBy(filterBy)
        this.props.loadContacts()
    }

    onRemoveContact = async (contactId) => {
        try {
            await this.props.removeContact(contactId)
        } catch (error) {
            console.log('error:', error)
        }
    }

    onSelectContactId = (contactId) => {
        this.setState({ selectedContactId: contactId })
    }

    onChangeFilter = (filterBy) => {
        this.props.setFilterBy(filterBy)
        this.props.loadContacts()
    }

    render() {
        const { contacts, filterBy } = this.props
        if (!contacts) return <div>Loading...</div>
        return (
            <section className='contact-index'>
                        <ContactFilter filterBy={filterBy} onChangeFilter={this.onChangeFilter} />
                        <ContactList contacts={contacts} onRemoveContact={this.onRemoveContact}
                                     onSelectContactId={this.onSelectContactId} />
            </section>
        )
    }
}

const mapStateToProps = state => ({
    contacts: state.contactModule.contacts,
    filterBy: state.contactModule.filterBy
})

const mapDispatchToProps = {
    loadContacts,
    removeContact,
    setFilterBy,
}

export const ContactIndex = connect(mapStateToProps, mapDispatchToProps)(_ContactIndex)
