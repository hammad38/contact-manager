import {GET_CONTACTS, DELETE_CONTACTS, ADD_CONTACTS} from "./types";
import axios from 'axios';

export const getContacts = () => async dispatch => {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  dispatch(
    {
      type: GET_CONTACTS,
      payload: response.data
    }
  );
}

export const deleteContact = (id) => async dispatch => {
  try {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    dispatch(
      {
        type: DELETE_CONTACTS,
        payload: id
      }
    );
  } catch (e) {
    dispatch(
      {
        type: DELETE_CONTACTS,
        payload: id
      }
    );
  }
}

export const addContact = (newContact) => async dispatch => {
  const response = await axios.post('https://jsonplaceholder.typicode.com/users/', newContact);
  dispatch(
    {
      type: ADD_CONTACTS,
      payload: response.data
    }
  );
}