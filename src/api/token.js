import axios from 'axios';
import {
  CLIENT_SECRET,
  REDIRECT_URI,
  ACCESS_KEY,
} from './const';
import { useDispatch } from 'react-redux';
import { updateToken } from '../store/tokenReducer';

const cleanUrl = () => {
  const url = window.location.href;
  const cleanUrl = url.split('?')[0];
  window.history.replaceState({}, document.title, cleanUrl);
};

export const delToken = () => {
  localStorage.removeItem('bearer');
};

export const setToken = ({ token, username }) => {
  console.log('setToken', token, username);
  const userData = {
    token: token,
    username: username,
  };
  localStorage.setItem('bearer', JSON.stringify(userData));
};

export const getToken = () => {
  let token = '';
  const dispatch = useDispatch();

  if (localStorage.getItem('bearer')) {
    const userData = JSON.parse(localStorage.getItem('bearer'));

    console.log('userData', userData);
    userData.token ?
      token = { token: userData.token, username: userData.username } :
      token = {};
  }
  if (window.location.search.includes('code')) {
    const code = new URL(window.location.href).search.split('=')[1];

    console.log('code', code);

    const data = {
      client_id: ACCESS_KEY,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
      code: code,
      grant_type: `authorization_code`,
    };

    axios.post('https://unsplash.com/oauth/token', data)
      .then(response => {
        console.log('token', response.data);
        token = {
          token: response.data.access_token,
          username: response.data.username
        };
        setToken(token);
        cleanUrl();

        dispatch(updateToken(token));
      })
      .catch(error => {
        console.error(error);
        setToken({});
      });
  }

  console.log('getToken', token);
  return token;
};