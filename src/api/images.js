import {
  API_URL_IMG,
  ACCESS_KEY
} from './const';
import axios from 'axios';

export const GET_PHOTOS_START = 'AUTH_REQUEST';
export const GET_PHOTOS_SUCCESS = 'AUTH_REQUEST_SUCCESS';
export const GET_PHOTOS_SUCCESS_AFTER = 'GET_PHOTOS_SUCCESS_AFTER';
export const GET_PHOTOS_ERROR = 'AUTH_REQUEST_ERROR';

export const getPhotosStart = () => ({
  type: GET_PHOTOS_START,
});

export const getPhotosSucces = (data, page = 1) => ({
  type: GET_PHOTOS_SUCCESS,
  data,
  page,
});

export const getPhotosSuccesAfter = (data, page = 1) => ({
  type: GET_PHOTOS_SUCCESS_AFTER,
  data,
  page,
});

export const getPhotosError = (error) => ({
  type: GET_PHOTOS_ERROR,
  error,
});

export const getPhotosAsync = (page = 1) => (dispatch, getState) => {
  console.log('getPhotosAsync page', page);
  const token = getState().tokenReducer.token.token;
  dispatch(getPhotosStart());

  console.log('!!! нету токена');
  axios.get(`${API_URL_IMG}client_id=${ACCESS_KEY}&page=${page}&per_page=20`, token ? {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  } : '')
    .then(response => {
      page > 1 ?
        dispatch(getPhotosSuccesAfter([...response.data], page)) :
        dispatch(getPhotosSucces([...response.data], page));
    })
    .catch(error => {
      console.error(error);
      dispatch(getPhotosError(error.message));
    });
};


