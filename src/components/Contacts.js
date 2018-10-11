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
          phone: '111-111-111'
        },
        {
          id: '3',
          name: 'person3',
          email: 'person3@mail.com',
          phone: '111-111-111'
        },
      ]
    }
  }

  render() {
    const {contacts} = this.state;
    return (
      <React.Fragment>
        {contacts.map(contact => (
          <Contact
            key={contact.id}
            contact={contact}
          />))
        }
      </React.Fragment>
    );
  }
}

export default Contacts;