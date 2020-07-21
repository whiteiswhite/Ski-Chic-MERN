import axios from 'axios';

export function fetchUsers() {
  return {
    type: 'FETCH_USER',
    payload: axios.get('https://randomuser.me/api/?results=50')
  };
}