import {
  API_URL_IMG,
  ACCESS_KEY
} from './const';
import axios from 'axios';
import { useDispatch } from 'react-redux';

export const getPhotos = () => {
  let images = [];

  axios.get(`${API_URL_IMG}client_id=${ACCESS_KEY}`)
    .then(response => {
      console.log('token', response.data);
    })
    .catch(error => {
      console.error(error);
    });


}


