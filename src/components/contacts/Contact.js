import React, {Component} from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
import {Consumer} from "../../context";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showContactDetail: false
    }
  }

  showContactDetail = (e) => {
    this.setState({
      showContactDetail: !this.state.showContactDetail
    })
  }

  deleteContact = async(id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({type: 'DELETE_CONTACT', payload: id});
    } catch (e) {
      dispatch({type: 'DELETE_CONTACT', payload: id});
    }
  }

  render() {
    const {id, name, email, phone} = this.props.contact;
    const {showContactDetail} = this.state;

    return (
      <Consumer>
        {value => {
          const {dispatch} = value;
          return(
            <div className="card card-body mb-3">
              <h4>{name}
                <i onClick={this.showContactDetail} className="fas fa-sort-down" style={{cursor: 'pointer'}}></i>
                <i onClick={this.deleteContact.bind(this, id, dispatch)} className="fas fa-times" style={{cursor: 'pointer', float: 'right', color: 'red'}}></i>
              </h4>
              {showContactDetail ? (
                <ul className="list-group">
                  <li className="list-group-item">Email: {email}</li>
                  <li className="list-group-item">Phone: {phone}</li>
                </ul>
              ) : null}
            </div>
          );
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
}

export default Contact;