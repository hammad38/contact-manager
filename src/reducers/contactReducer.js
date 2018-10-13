import {ADD_CONTACTS, DELETE_CONTACTS, GET_CONTACTS} from "../actions/types";

const initialState = {
  contacts: []
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CONTACTS:
      return {
        ...state,
        contacts: action.payload
      };
    case DELETE_CONTACTS:
      return {
        ...state,
        contacts: state.contacts.filter(contact => (contact.id !== action.payload))
      };
    case ADD_CONTACTS:
      return {
        ...state,
        contacts: [action.payload, ...state.contacts]
      };
    default:
      return state;
  }
}