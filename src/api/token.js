import axios from 'axios';
import {
  CLIENT_SECRET,
  REDIRECT_URI,
  ACCESS_KEY,
  API_URL,
} from './const';
import {useDispatch} from 'react-redux';
import {updateToken} from '../store/tokenReducer';

const cleanUrl = () => {
  const url = window.location.href;
  const cleanUrl = url.split('?')[0];
  window.history.replaceState({}, document.title, cleanUrl);
};

export const delToken = () => {
  localStorage.removeItem('bearer');
};

export const setToken = (token) => {
  console.log('setToken', token);
  localStorage.setItem('bearer', JSON.stringify(token));
};

const getUserData = (token, dispatch) => {
  axios.get(`${API_URL}me`,
    {
      headers: {
        'Authorization': `Bearer ${token.token}`
      }
    })
    .then(response => {
      console.log('getUserData', response.data);
      const tokenData = {
        token: token.token,
        userName: response.data.username,
        userImg: response.data.profile_image.medium,
      };

      console.log('getUserData !!!', tokenData, token);
      setToken(tokenData);
      dispatch(updateToken(tokenData));
    })
    .catch(error => {
      console.error(error);
    });
};

export const getToken = () => {
  const dispatch = useDispatch();

  let token = '';

  if (localStorage.getItem('bearer')) {
    const userData = JSON.parse(localStorage.getItem('bearer'));

    console.log('userData', userData);
    userData.token ?
      token = {
        token: userData.token,
        userName: userData.userName,
        userImg: userData.userImg,
      } :
      token = {};
  }
  if (window.location.search.includes('code')) {
    const code = new URL(window.location.href).search.split('=')[1];

    console.log('code', code);

    const data = {
      client_id: ACCESS_KEY,
      client_secret: CLIENT_SECRET,
      redirect_uri: REDIRECT_URI,
      code,
      grant_type: `authorization_code`,
    };

    axios.post('https://unsplash.com/oauth/token', data)
      .then(response => {
        console.log('token', response.data);
        token = {
          token: response.data.access_token,
          userName: response.data.username,
        };
        cleanUrl();
        getUserData(token, dispatch);
      })
      .catch(error => {
        console.error(error);
        setToken({});
      });
  }

  console.log('getToken', token);
  return token;
};
