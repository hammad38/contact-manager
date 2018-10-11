import React, {Component} from 'react';
import Contact from './Contact';

class Contacts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contacts: [
        {
          id: '1',
          name: 'person1',
          email: 'person1@mail.com',
          phone: '111-111-111'
        },
        {
          id: '2',
          name: 'person2',
          email: 'person2@mail.com',
          phone: '222-222-222'
        },
        {
          id: '3',
          name: 'person3',
          email: 'person3@mail.com',
          phone: '333-333-333'
        },
      ]
    }
  }

  deleteContact = (id, e) => {
    const {contacts} = this.state;
    const updatedContacts = contacts.filter((contact) => contact.id != id);
    this.setState({
      contacts: updatedContacts
    });
  }

  render() {
    const {contacts} = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
            deleteContactHandler={this.deleteContact.bind(this, contact.id)}
          />))
        }
      </React.Fragment>
    );
  }
}

export default Contacts;