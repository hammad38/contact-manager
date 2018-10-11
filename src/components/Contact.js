import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContactDetail: false
    }
  }

  showContactDetail = (e) => {
    console.log('hello');
    this.setState({
      showContactDetail: !this.state.showContactDetail
    })
  }

  render() {
    const {name, email, phone} = this.props.contact;
    const {showContactDetail} = this.state;

    return (
      <div className="card card-body mb-3">
        <h4>{name} <i onClick={this.showContactDetail} className="fas fa-sort-down"></i></h4>
        {showContactDetail ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default Contact;