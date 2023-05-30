import React from 'react'
import { Link } from 'react-router-dom'

export function ContactPreview({ contact, onRemoveContact }) {

    return (
        <article  className='contact-preview'>
            <Link to={`/contact/${contact._id}`} className="info">
                <img src={require(`../assets/imgs/user.png`)}/>
                <h2>{contact.name}</h2>
            </Link>
            <section className="contact-crud">
                <button onClick={() => onRemoveContact(contact._id)} ><i className="fa-regular fa-trash-can"></i></button>
                <Link to={`/contact/edit/${contact._id}`} title='back'><i className="fa-solid fa-pencil"></i></Link>
            </section>
        </article>
    )
}
