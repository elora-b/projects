import React, { Component } from 'react'
import Contact from './Contact'

export default class List extends Component {

state = {
    contacts : [
        {
            id : 1,
            nom : "John Doe",
            email : 'john@gmail.com',
            tel : "555-555-5555"
        },

        {   
            id : 2,
            nom : "John Doe",
            email : 'john@gmail.com',
            tel : "555-555-5555"
        },

        {
            id : 3,
            nom : "John Doe",
            email : 'john@gmail.com',
            tel : "555-555-5555"
        }
    ]
}

    delete= (id) => {
        const newContacts = this.state.contacts.filter(contact => 
            contact.id !== id)

            this.setState({
                contacts : newContacts
            })

    }

    render() {
        return (
            <React.Fragment>
                {/* map : pour chaque objet, return un contact
                return autant de Contact/> qu'il y a d'objet */}
                {this.state.contacts.map(contact => (
                    <Contact
                    key={contact.id}
                    nom={contact.nom}
                    email={contact.email}
                    tel={contact.tel}
                    deleteOnClick={() => this.delete(contact.id)}
                    />
                ))}
            </React.Fragment>
        )
    }
}
