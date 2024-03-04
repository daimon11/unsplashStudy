import {
  API_URL_IMG,
  ACCESS_KEY
} from './const';
import axios from 'axios';

export const GET_PHOTOS_START = 'AUTH_REQUEST';
export const GET_PHOTOS_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const GET_PHOTOS_ERROR = 'AUTH_REQUEST_ERROR';

export const getPhotosStart = () => ({
  type: GET_PHOTOS_START,
});

export const getPhotosSucces = (data) => ({
  type: GET_PHOTOS_SUCCESS,
  data,
});

export const getPhotosError = (error) => ({
  type: GET_PHOTOS_ERROR,
  error,
});

export const getPhotosAsync = () => (dispatch, getState) => {
  const token = getState().tokenReducer.token.token;
  dispatch(getPhotosStart());

  console.log('getPhotosAsync token', token);

  if (!token) {
    console.log('!!! нету токена');
    axios.get(`${API_URL_IMG}client_id=${ACCESS_KEY}&per_page=20&order_by=popular`)
      .then(response => {
        console.log('images', response.data);
        dispatch(getPhotosSucces([...response.data]));
      })
      .catch(error => {
        console.error(error);
        dispatch(getPhotosError(error.message));
      });
  }
};


